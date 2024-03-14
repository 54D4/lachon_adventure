import { useContext } from "react";
import { LachonContext } from "../../context/LachonContext";

const Jedzenie = ({ src, id }: { id: number; src: string }) => {
  const { zjedz } = useContext(LachonContext);
  return (
    <div
      className="skin"
      onClick={() => {
        zjedz(id);
      }}
    >
      <img src={src} alt="jedzenie" />
    </div>
  );
};

export default Jedzenie;
