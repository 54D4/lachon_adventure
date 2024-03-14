import { useContext } from "react";
import "./WinPage.css";
import { LachonContext } from "../../context/LachonContext";
import { Link } from "react-router-dom";

const WinPage = () => {
  const { restartGame } = useContext(LachonContext);
  const fun = () => {
    const startGameSound = new Audio(
      "https://drive.google.com/file/d/1VWwN-SyP06JXVdM7rtW6K3nqm4ySzIjO/view"
    );
    startGameSound.play();
    restartGame();
  };
  return (
    <div className="winPage">
      <h1>Gratulacje Wygrałeś </h1>
      <h2>Przepiłeś nawet Granata</h2>
      <img src="./images/lachon/lachon_8.jpg" alt="lachon" />
      <Link
        to="/game"
        className="startBtm"
        onClick={() => {
          fun();
        }}
      >
        Zacznij Gre
      </Link>
    </div>
  );
};

export default WinPage;
