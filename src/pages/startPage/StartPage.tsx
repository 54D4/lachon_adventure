import { Link } from "react-router-dom";
import "./startPage.css";
import { useContext } from "react";
import { LachonContext } from "../../context/LachonContext";
const StartPage = () => {
  const fun = () => {
    const startGameSound = new Audio(
      "https://drive.google.com/file/d/1VWwN-SyP06JXVdM7rtW6K3nqm4ySzIjO/view"
    );
    startGameSound.play();
  };
  const { first } = useContext(LachonContext);
  return (
    <div className="bg">
      <img src="./images/lachon/sigmaLachon.jpg" alt="img" />
      <div className="start">
        <h1>Rozpocznij Pice</h1>
        <Link
          to={!first ? "/lachon_adventure/game/" : "/lachon_adventure/deth/"}
          className="startBtm"
          onClick={() => {
            fun();
          }}
        >
          Zacznij Gre
        </Link>
        <Link to="/" className="startBtm">
          Instrukcja Obsługi
        </Link>
      </div>
      <img src="./images/lachon/spizganyLachon.jpg" alt="img" />
    </div>
  );
};

export default StartPage;
