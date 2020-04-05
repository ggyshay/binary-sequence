import React, { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";
import { objectsToPatternString, testSequence } from "./rule-compiler";
import { RULE_TESTING_MODE } from "./env";

function App() {
  const [queue, setQueue] = useState([]);
  const [ruleFeedback, setRuleFeedback] = useState([]);
  const PAUSED_TIME = 10000;
  useEffect(() => {
    const handleNewPoint = (d) => {
      setQueue((q) => {
        let _q = [...q];
        _q.push({
          value: d.quote,
          // isUp: d.delta > 0,
          lastDigit: Math.round(d.quote * 100) % 10,
          color: d.delta > 0 ? "blue" : "red",
        });
        if (_q.length > 10) {
          _q.shift();
        }
        return [..._q];
      });
    };
    API.setOnData(handleNewPoint);
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

  const patternString = objectsToPatternString(queue);
  const { result, rule, colors } = testSequence(patternString);
  API.setShouldFreeze(result !== undefined, onUnpause(rule, colors, result));
  // console.log("result", result);

  return (
    <div className="App">
      <div className="digit-container">
        {queue.map((point) => (
          <p style={{ color: point.color, margin: 20 }}>{point.lastDigit}</p>
        ))}
      </div>
      <p>{patternString}</p>
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
}

export default App;
