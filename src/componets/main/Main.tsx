import { useContext } from "react";
import Quotes from "../quotes/Quotes";
import "./Main.css";
import { LachonContext } from "../../context/LachonContext";

const Main = () => {
  const { addPromil, disBtn, alkohol } = useContext(LachonContext);
  const mySound = new Audio(
    "https://drive.google.com/file/d/1GUNjj6n0hnU-4IGSYEC6YNBVW8almv6h/view"
  );

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
