import Skin from "./Skin";
import "./szafka.css";
import skins from "./lachonSkins.json";
const Szafka = () => {
  return (
    <div className="szafka">
      <h1>Szafka</h1>
      <div className="grid">
        {skins.map((e) => (
          <Skin id={e.id} src={e.src} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Szafka;
