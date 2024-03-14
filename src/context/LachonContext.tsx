import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import rozmowa from "./data/rozmowa.json";
import quotes from "./data/quotes.json";
import jedzenie from "./data/jedzenie.json";
import alkohole from "./data/alkochole.json";
import { useNavigate } from "react-router-dom";
type lachonType = {
  promil: number;
  addPromil: () => void;
  AmountAlko: number;
  status: number;
  bambiIrl: number;
  grantZiom: () => void;
  granatUsed: boolean;
  wiadomosc: wiadomosc;
  wyslano: boolean;
  wyslijWiadomosc: (id: string, correct: string) => void;
  wypite: number;
  quote: string;
  disBtn: boolean;
  ilsocPowietrza: number;
  wezBucha: () => void;
  szafkaOn: boolean;
  open: () => void;
  close: () => void;
  prof: string;
  changeProf: (src: string) => void;
  lodowa: lodowaType[];
  kacaFun: () => void;
  kacaUsed: boolean;
  zjedz: (id: number) => void;
  restartGame: () => void;
  alkohol: alkohol;
  sadaFuncition: () => void;
  sadaDis: boolean;
  first: boolean;
  newGame: () => void;
};
type alkohol = {
  nazwa: string;
  moc: number;
  img: string;
};
type answer = {
  content: string;
  id: string;
};
type wiadomosc = {
  message: string;
  answer: answer[];
  conrrect: string;
};
type lodowaType = {
  src: string;
  id: number;
};
export const LachonContext = createContext({} as lachonType);

const LachonContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [wypite, setWypite] = useState(0);
  const [promil, setPromil] = useState(0.0);
  const [AmountAlko, setAmountAlko] = useState(50);
  const [status, setStatus] = useState(0);
  const [bambiIrl, setBambiIrl] = useState(0);
  const [sip, setSip] = useState(2.5);
  const [granatUsed, setGranatUsed] = useState(false);
  const [wiadomosc, setWiadomosc] = useState({
    message: "Życze ci miłej zabawy?",
    answer: [
      { content: "Dzięki", id: "1" },
      { content: "Spierdalaj", id: "2" },
      { content: "dkfgjhn", id: "3" },
    ],
    conrrect: "1",
  });
  const [alkohol, setAlkohol] = useState(alkohole[0]);
  const [mulPro, setMulPro] = useState(alkohol.moc / 200);
  const [wyslano, setWyslano] = useState(true);
  const [poziomProblemu, setPoziomProblemu] = useState(0);
  const [quote, setQuote] = useState(quotes[0].quotes);
  const [disBtn, setDisBtns] = useState(false);
  const [ilsocPowietrza, setIloscPowietrz] = useState(40);
  const [szafkaOn, setSzafkaOn] = useState(false);
  const [prof, setProf] = useState("./images/lachon/lachon_0.0.jpg");
  const [lodowa, setLodowa] = useState([
    {
      src: jedzenie[Math.floor(Math.random() * jedzenie.length)],
      id: Math.floor(Math.random() * 1000),
    },
  ]);
  const [kacaUsed, setKacaUsed] = useState(false);
  const [sadaDis, setSadaDis] = useState(false);
  const [moreStatus, setMoreStatus] = useState(0);
  const [wypiteButelki, setWypiteButelki] = useState(0);
  const [zjedzoneJedzenie, setZjedzoneJedzenie] = useState(0);
  const [first, setFirst] = useState(true);
  const newGame = () => {
    setFirst(false);
  };
  const sadaFuncition = () => {
    const granatSound = new Audio("./sounds/granatSound.mp3");
    granatSound.volume = 0.3;
    if (status >= 400) {
      granatSound.play();
      setMoreStatus(50);
      setStatus(status - 400);
      setSadaDis(true);
      setTimeout(() => {
        setMoreStatus(0);
        setSadaDis(false);
      }, 5000);
    } else {
      const kurwa = new Audio("./sounds/kurwa.mp3");
      kurwa.play();
    }
  };
  useEffect(() => {
    const lachon_smierc = new Audio("./sounds/lachon_smierc.mp3");
    const szans_naZgona = Math.floor(
      Math.random() * Math.floor(wypiteButelki * promil) - zjedzoneJedzenie
    );
    const interval = setInterval(() => {
      if (szans_naZgona == 23) {
        lachon_smierc.play();
        clearInterval(interval);
        navigate("/lachon_adventure/deth");
      }
      if (poziomProblemu === 1) {
        restartGame();
        lachon_smierc.play();
        navigate("/lachon_adventure/deth");
        clearInterval(interval);
      }
      if (promil >= 18) {
        navigate("/lachon_adventure/win");
      }
    }, 200); // Run every second

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [poziomProblemu, navigate, promil, zjedzoneJedzenie, wypiteButelki]);
  useEffect(() => {
    const lachon_smierc = new Audio("./sounds/lachon_smierc.mp3");

    const interval = setInterval(() => {
      if (ilsocPowietrza > 0) {
        setIloscPowietrz((prevCount) => prevCount - 1);
      } else {
        restartGame();
        lachon_smierc.play();
        navigate("/lachon_adventure/deth");
        clearInterval(interval); // Stop the interval when count reaches zero
      }
    }, 1000); // Run every second

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [ilsocPowietrza, navigate]);

  const wezBucha = () => {
    setIloscPowietrz(40);
  };
  const open = () => {
    setSzafkaOn(!szafkaOn);
  };
  const close = () => {
    setSzafkaOn(false);
  };
  const changeQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)].quotes);
  };
  const wyslijWiadomosc = (id: string, correct: string) => {
    if (id !== correct) {
      setPoziomProblemu(poziomProblemu + 1);
    }
    if (poziomProblemu === 10) {
      alert("gg");
    }
    setWyslano(false);
  }; //wysyłanie wiaomosci

  const restartAlko = () => {
    const chooseAlko = Math.floor(Math.random() * alkohole.length);
    setAlkohol(alkohole[chooseAlko]);
    setMulPro(alkohol.moc / 200);
    setAmountAlko(50);
    setWypite(0);
    setWypiteButelki(wypiteButelki + 1);
  };
  const nowaWiadomosc = () => {
    const losRoz = rozmowa[Math.floor(Math.random() * rozmowa.length) - 1];
    const phoneSound = new Audio("./sounds/phoneSound.mp3");

    if (losRoz !== undefined && wyslano === false) {
      phoneSound.play();
      setWyslano(true);
      setWiadomosc(losRoz); // losowanie wiadomosci
    }
  };
  const changeProf = (src: string) => {
    setProf(src);
  };
  const disableButton = () => {
    setDisBtns(true);
    setTimeout(() => {
      setWypite(wypite + sip);
      setDisBtns(false);
    }, 500);
  };
  const addPromil = () => {
    setPromil(Math.round((promil + mulPro) * 100) / 100); // picie
    setStatus(status + 20 + moreStatus);
    setWypite(wypite + sip);

    if (AmountAlko <= wypite + sip) {
      setStatus(status + 10); // dodakowy status
      setBambiIrl(Math.round(Math.random() * 100)); // szansa na bambiIRL
      setTimeout(() => {
        nowaWiadomosc();
      }, 2000);
      setTimeout(() => {
        changeQuote();
      }, 8000);
      const bambiIRL = new Audio("./sounds/bambiIRL.mp3");
      bambiIRL.volume = 0.2;
      bambiIrl == 1 && bambiIRL.play();
    }
    AmountAlko <= wypite + sip ? restartAlko() : disableButton();
  };

  const grantZiom = () => {
    //funkcja granata
    const granatSound = new Audio("./sounds/granatSound.mp3");
    granatSound.volume = 0.3;
    if (status >= 100) {
      granatSound.play();
      setSip(sip * 2);
      setStatus(status - 100);
      setGranatUsed(true);
      setTimeout(() => {
        setSip(2.5);
        setGranatUsed(false);
      }, 10000);
    } else {
      const kurwa = new Audio("./sounds/kurwa.mp3");
      kurwa.play();
    }
  };
  //funkcja kacy

  const kacaFun = () => {
    if (status >= 300) {
      setLodowa([
        ...lodowa,
        {
          src: jedzenie[Math.floor(Math.random() * jedzenie.length)],
          id: Math.floor(Math.random() * 1000),
        },
        {
          src: jedzenie[Math.floor(Math.random() * jedzenie.length)],
          id: Math.floor(Math.random() * 1000),
        },
        {
          src: jedzenie[Math.floor(Math.random() * jedzenie.length)],
          id: Math.floor(Math.random() * 1000),
        },
        {
          src: jedzenie[Math.floor(Math.random() * jedzenie.length)],
          id: Math.floor(Math.random() * 1000),
        },
      ]);

      setStatus(status - 300);
      setKacaUsed(true);
      setTimeout(() => {
        setKacaUsed(false);
      }, 2000);
    } else {
      const kurwa = new Audio("./sounds/kurwa.mp3");
      kurwa.play();
    }
  };
  const zjedz = (id: number) => {
    setZjedzoneJedzenie(zjedzoneJedzenie + 1);
    setLodowa(lodowa.filter((e) => e.id !== id));
  };
  const restartGame = () => {
    setPromil(0.0);
    setLodowa([]);
    setPoziomProblemu(0);
    setStatus(0);
    setAmountAlko(50);
    setWiadomosc({
      message: "Życze ci miłej zabawy?",
      answer: [
        { content: "Dzięki", id: "1" },
        { content: "Spierdalaj", id: "2" },
        { content: "dkfgjhn", id: "3" },
      ],
      conrrect: "1",
    });
    setIloscPowietrz(40);
    setWypite(0);
    setZjedzoneJedzenie(0);
  };
  //zwraca wszystkie wartosc

  return (
    <LachonContext.Provider
      value={{
        restartGame,
        newGame,
        promil,
        first,
        addPromil,
        AmountAlko,
        status,
        bambiIrl,
        grantZiom,
        granatUsed,
        wiadomosc,
        wyslano,
        wyslijWiadomosc,
        wypite,
        quote,
        disBtn,
        ilsocPowietrza,
        wezBucha,
        open,
        szafkaOn,
        prof,
        close,
        changeProf,
        lodowa,
        kacaFun,
        kacaUsed,
        zjedz,
        alkohol,
        sadaFuncition,
        sadaDis,
      }}
    >
      {children}
    </LachonContext.Provider>
  );
};

export default LachonContextProvider;
