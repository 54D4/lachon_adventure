import { useContext } from "react";
import "./LachonBar.css";
import { LachonContext } from "../../context/LachonContext";

const LachonBar = () => {
  const { promil, status, ilsocPowietrza, wezBucha, open, prof } =
    useContext(LachonContext);

  return (
    <div className="LachonBar">
      <div className="Lachon">
        <img src={prof} alt="Lachon" />
      </div>
      <h2>Lachon</h2>
      <h2>{promil} ‰</h2>
      <p>Status: {Math.round(status)}</p>
      <div className="ox">
        <h3>Powietrze</h3>
        <button
          className="epet"
          onClick={() => {
            wezBucha();
          }}
        >
          <img src="./images/alkohole/epet.png" alt="epet" />
        </button>
        <div className="progress-bar">
          <div
            className="progress2"
            style={{ width: `${(ilsocPowietrza / 40) * 100}%` }}
          ></div>
        </div>
      </div>
      <button
        className="szafkabtn"
        onClick={() => {
          open();
        }}
      >
        Szafka
      </button>
    </div>
  );
};

export default LachonBar;
