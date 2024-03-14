import FriendCard from "./FriendCard/FriendCard";
import { useContext } from "react";

import "./FriendsBar.css";
import { LachonContext } from "../../context/LachonContext";

const FriendsBar = () => {
  const { grantZiom, granatUsed, kacaFun, kacaUsed, sadaFuncition, sadaDis } =
    useContext(LachonContext);
  return (
    <div className="FriendsBar">
      <h1>Ziomeczki </h1>
      <div className="ziomeczki">
        <FriendCard
          fun={grantZiom}
          disVar={granatUsed}
          nazwa="Granat"
          status={100}
          src="./images/znajomi/granat.jpg"
        />
        <FriendCard
          fun={kacaFun}
          disVar={kacaUsed}
          nazwa="Kaca"
          status={300}
          src="./images/znajomi/kaca.jpg"
        />
        <FriendCard
          fun={sadaFuncition}
          disVar={sadaDis}
          nazwa="Sada"
          status={400}
          src="./images/znajomi/sada.jpg"
        />
      </div>
    </div>
  );
};

export default FriendsBar;
