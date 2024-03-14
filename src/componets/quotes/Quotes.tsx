import { useContext } from "react";
import "./Quotes.css";
import { LachonContext } from "../../context/LachonContext";

const Quotes = () => {
  const { quote } = useContext(LachonContext);
  return (
    <div className="quotes ">
      <p className="moving-text">{quote}</p>
    </div>
  );
};

export default Quotes;
