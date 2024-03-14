import { useContext } from "react";
import { LachonContext } from "../../context/LachonContext";

const Skin = ({ id, src }: { id: string; src: string }) => {
  const { changeProf } = useContext(LachonContext);
  return (
    <div
      className="skin"
      id={id}
      onClick={() => {
        changeProf(src);
      }}
    >
      <img src={src} alt="lachon" />
    </div>
  );
};

export default Skin;
