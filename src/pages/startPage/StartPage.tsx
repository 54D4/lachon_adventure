import { Link } from "react-router-dom";
import "./startPage.css";
const StartPage = () => {
  const fun = () => {
    const startGameSound = new Audio("./sounds/lachon_trzezwy.mp3");
    startGameSound.play();
  };
  return (
    <div className="bg">
      <img src="./images/lachon/sigmaLachon.jpg" alt="img" />
      <div className="start">
        <h1>Rozpocznij Pice</h1>
        <Link
          to="/lachon_adventure/game/game"
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
