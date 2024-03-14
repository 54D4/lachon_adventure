import { useContext } from "react";
import Quotes from "../quotes/Quotes";
import "./Main.css";
import { LachonContext } from "../../context/LachonContext";

const Main = () => {
  const { addPromil, disBtn, alkohol } = useContext(LachonContext);
  const mySound = new Audio("./sounds/picie.mp3");

  return (
    <div className="main">
      <h1>{alkohol.nazwa}</h1>
      <h2>{alkohol.moc}‰</h2>
      <button
        className="alko"
        disabled={disBtn}
        onClick={() => {
          mySound.play();
          addPromil();
        }}
      >
        <img src={alkohol.img} alt="wóda" />
      </button>

      <Quotes />
    </div>
  );
};

export default Main;
