import { useState, useEffect } from "react";
import pattern from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
function App() {
  const [advice, setAdvice] = useState("");
  const [slipId, setSlipId] = useState();
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    try {
      
      const res = await fetch("	https://api.adviceslip.com/advice");
      if (!res.ok) {
        throw new Error("Network response is not ok");
      }
      const data = await res.json();
      setAdvice(data.slip.advice);
      setSlipId(data.slip.id);
    } catch (error) {
      setError(error);
    } 
  };

  useEffect(function () {
    fetchAdvice();
  }, []);

  const handleDiceClick = () => {
    fetchAdvice();
  };

  if (error) {
    return <h4>{error.message}</h4>;
  }

  return (
    <article className="card-container">
      <div className="card-content">
        <h6>{`Advice #${slipId}`}</h6>
        <p>{advice}</p>
        <img src={pattern} alt="svg image" />
      </div>
      <div className="card-icons">
        <img
          className="icon-dice"
          onClick={handleDiceClick}
          src={dice}
          alt="svg image"
        />
      </div>
    </article>
  );
}

export default App;
