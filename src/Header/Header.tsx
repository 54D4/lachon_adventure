import { useContext, useState } from "react";
import { LachonContext } from "../context/LachonContext";
import Phone from "../componets/phone/Phone";
import Lodówa from "../componets/Lodówa/Lodówa";
import Szafka from "../componets/szafka/Szafka";

const Header = () => {
  const [phoneOn, setPhoneOn] = useState(false);
  const [lodowaOn, setLodowaOn] = useState(false);
  const { wyslano, szafkaOn, close } = useContext(LachonContext);
  return (
    <div className="header">
      <header>
        <button
          className="przycisk"
          onClick={() => {
            setPhoneOn(!phoneOn);
            lodowaOn && setLodowaOn(false);
            close();
          }}
        >
          {wyslano && <i className="fa-solid fa-exclamation"></i>}
          Komóra
          <i className="fa-solid fa-arrow-down"></i>
        </button>
        <button
          className="przycisk"
          onClick={() => {
            setLodowaOn(!lodowaOn);
            phoneOn && setPhoneOn(false);
            close();
          }}
        >
          <i className="fa-solid fa-arrow-down"></i>
          Lodówka
        </button>
      </header>
      {phoneOn && <Phone />}
      {lodowaOn && <Lodówa />}
      {szafkaOn && <Szafka />}
    </div>
  );
};

export default Header;
