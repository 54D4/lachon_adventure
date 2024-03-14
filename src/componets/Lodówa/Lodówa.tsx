import { useContext } from "react";
import Jedzenie from "./Jedzenie";
import "./Lodówa.css";
import { LachonContext } from "../../context/LachonContext";

const Lodówa = () => {
  const { lodowa } = useContext(LachonContext);
  return (
    <div className="lodowa">
      <h1>Lodówa</h1>
      <div className="grid">
        {lodowa.map(
          (e) =>
            e.src !== "undefined" && (
              <Jedzenie src={e.src} key={e.id} id={e.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Lodówa;
