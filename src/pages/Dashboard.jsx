import React, { useEffect, useState } from "react";
import { API } from "../api";
import { MultipleInput } from "../components/MultipleInput";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { RULE_TESTING_MODE, DEV_MODE } from "../env";
import { objectsToPatternString, testSequence } from "../rule-compiler";
import useSound from "use-sound";
import alertSound from "../statics/alert.wav";
import { Input } from "../components/Input";

export const Dashboard = (props) => {
  const [queue, setQueue] = useState([]);
  const [ruleFeedback, setRuleFeedback] = useState([]);
  const [automaticTradeEnabled, setAutomaticTradeEnabled] = useState(false);
  const [result, setResult] = useState(undefined);
  const [inicialTradeAmount, setInicialTradeAmount] = useState(10);
  const [tradeAmount, setTradeAmount] = useState(10);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [nErrors, setNErrors] = useState(0);
  const [maxNErrors, setMaxNErrors] = useState(5);
  const [amountMultiplier, setAmountMultiplier] = useState(2);
  const [play] = useSound(alertSound);

  const PAUSED_TIME = 10000;
  useEffect(() => {
    const handleNewPoint = (d) => {
      setQueue((q) => {
        let _q = [...q];
        _q.push({
          value: d.quote,
          lastDigit: Math.round(d.quote * 100) % 10,
          color: d.delta > 0 ? "blue" : "red",
        });
        if (_q.length > 10) {
          _q.shift();
        }
        // console.log(_q.map((i) => i.lastDigit));
        return [..._q];
      });
    };
    API.setOnData(handleNewPoint);
    // API.onError(props.onError);
    API.startTicks();
  }, []);

  const resumeAnalisys = () => {
    API.unpause();
    setQueue([]);
    setRuleFeedback("");
  };

  const handlePredictionError = () => {
    // errou
    const nE = nErrors + 1;
    if (nE > maxNErrors) {
      setAutomaticTradeEnabled(false);
    } else {
      setTradeAmount(tradeAmount * amountMultiplier);
      setNErrors(nE);
    }
  };

  const onUnpause = (rule, colors, flag) => (value, _decisionValue, stack) => {
    console.log("stack", stack);
    const decisionValue = stack[1];
    const rose = value > decisionValue;
    if (flag !== rose) {
      handlePredictionError();
    } else {
      setTradeAmount(inicialTradeAmount);
    }
    if (RULE_TESTING_MODE) {
      console.log("unpause", value, decisionValue);
      let feedback = "A regra previu " + (flag ? "subida" : "descida");
      feedback += " e ele " + (rose ? "subiu" : "desceu");
      feedback += " [" + rule.toString() + "] " + colors;
      setRuleFeedback(feedback);
      setTimeout(resumeAnalisys, PAUSED_TIME);
    } else {
      resumeAnalisys();
    }
  };
  useEffect(() => {
    // console.log("queue chanced, useEffect running");
    const patternString = objectsToPatternString(queue);
    const { result: r, rule, colors } = testSequence(patternString);
    API.setShouldFreeze(r !== undefined, onUnpause(rule, colors, r));
    setResult(r);
    if (r !== undefined && soundEnabled) {
      play();
    }
    if (r !== undefined && automaticTradeEnabled) {
      API.buy(tradeAmount, r);
    }
  }, [queue]);

  const handleLogout = () => {
    localStorage.clear();
    props.logout();
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <ToggleSwitch
            label="Modo Automatico"
            onClick={() => setAutomaticTradeEnabled(!automaticTradeEnabled)}
            isOn={automaticTradeEnabled}
          />
          <Input
            label="Maximo de erros"
            onChange={setMaxNErrors}
            value={maxNErrors}
          />
          <Input
            label="Quantidade incial"
            onChange={setInicialTradeAmount}
            value={inicialTradeAmount}
          />
          <Input
            label="Multiplicador"
            onChange={setAmountMultiplier}
            value={amountMultiplier}
          />
          <p>Quantidade atual</p>
          <p>{tradeAmount}</p>
        </div>
        <button onClick={props.showIndexScreen}>Trocar Indice</button>
        <button onClick={handleLogout}>Logout</button>
        <ToggleSwitch
          label="Avisos sonoros"
          onClick={() => setSoundEnabled(!soundEnabled)}
          isOn={soundEnabled}
        />
      </div>
      <div className="digit-container">
        {queue.map((point) => (
          <p style={{ color: point.color, margin: 20 }}>{point.lastDigit}</p>
        ))}
      </div>
      {result !== undefined && (
        <h3 style={{ color: result ? "red" : "blue" }}>
          {result ? "positivo" : "negativo"}
        </h3>
      )}
      {ruleFeedback.length > 0 && <p>{ruleFeedback}</p>}
      {ruleFeedback.length > 0 && (
        <button onClick={resumeAnalisys}>Voltar para a analise</button>
      )}
      {<button onClick={API.reset}>Reset</button>}
    </div>
  );
};
