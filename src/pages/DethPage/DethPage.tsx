import { Link } from "react-router-dom";
import "./dethpage.css";
import { useContext } from "react";
import { LachonContext } from "../../context/LachonContext";
const DethPage = () => {
  const { restartGame } = useContext(LachonContext);
  const fun = () => {
    const startGameSound = new Audio("./sounds/lachon_trzezwy.mp3");
    startGameSound.play();
    restartGame();
  };
  return (
    <div className="dethPage">
      <h1>Zjebaleś!!</h1>
      <img src="./images/lachon/martwy_lachon.jpg" alt="martwy" />
      <h2>Nie zyjesz</h2>
      <Link
        to="/lachon_adventure/game"
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

export default DethPage;
