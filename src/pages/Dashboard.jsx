import React, { useEffect, useState } from "react";
import { API } from "../api";
import { MultipleInput } from "../components/MultipleInput";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { RULE_TESTING_MODE } from "../env";
import { objectsToPatternString, testSequence } from "../rule-compiler";
import useSound from "use-sound";
import alertSound from "../statics/alert.wav";

export const Dashboard = (props) => {
  const [queue, setQueue] = useState([]);
  const [ruleFeedback, setRuleFeedback] = useState([]);
  const [automaticTradeEnabled, setAutomaticTradeEnabled] = useState(false);
  const [result, setResult] = useState(undefined);
  const [tradeAmount, setTradeAmount] = useState(10);
  const [soundEnabled, setSoundEnabled] = useState(true);
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
    API.onError(props.onError);
    API.startTicks();
  }, []);

  const resumeAnalisys = () => {
    API.unpause();
    setQueue([]);
    setRuleFeedback("");
  };

  const onUnpause = (rule, colors, flag) => (value, decisionValue) => {
    if (RULE_TESTING_MODE) {
      console.log("unpause", value, decisionValue);
      const rose = value > decisionValue;
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
          <MultipleInput onChange={setTradeAmount} value={tradeAmount} />
        </div>
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
      {/* <p>{patternString}</p> */}
      {result !== undefined && (
        <h3 style={{ color: result ? "red" : "blue" }}>
          {result ? "positivo" : "negativo"}
        </h3>
      )}
      {ruleFeedback.length > 0 && <p>{ruleFeedback}</p>}
      {ruleFeedback.length > 0 && (
        <button onClick={resumeAnalisys}>Voltar para a analise</button>
      )}
    </div>
  );
};
