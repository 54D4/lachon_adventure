import { useContext } from "react";
import "./AlkoProgres.css";
import { LachonContext } from "../../context/LachonContext";

const AlkoProgres = () => {
  const { AmountAlko, wypite } = useContext(LachonContext);

  return (
    <div className="alkoProgres">
      <h1 className="h1Alko"> {(AmountAlko - wypite) / 100} L </h1>
      <div className="progres">
        <div
          className="left"
          style={{
            height: `${
              wypite === 0 ? 100 : 100 - (wypite / AmountAlko) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default AlkoProgres;
