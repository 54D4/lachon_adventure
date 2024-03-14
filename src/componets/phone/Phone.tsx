import { useContext } from "react";
import "./phone.css";
import { LachonContext } from "../../context/LachonContext";

const Phone = () => {
  const { wiadomosc, wyslijWiadomosc, wyslano } = useContext(LachonContext);
  return (
    <div className="phone">
      <div className="Problem">
        <img src="./images/lachon/problem.jpg" alt="problem" />
        <h3>Julka/Problem</h3>
      </div>
      {wyslano && (
        <div className="textArea">
          <p className="mess">{wiadomosc.message}</p>
          {wiadomosc.answer.map((a) => (
            <button
              className="wiadomosc"
              id={a.id}
              onClick={() => {
                wyslijWiadomosc(a.id, wiadomosc.conrrect);
              }}
            >
              {a.content}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Phone;
