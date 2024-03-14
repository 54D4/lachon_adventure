const FriendCard = ({
  fun,
  nazwa,
  status,
  disVar,
  src,
}: {
  fun: () => void;
  nazwa: string;
  status: number;
  disVar: boolean;
  src: string;
}) => {
  return (
    <button className="friendCard" onClick={() => fun()} disabled={disVar}>
      <img src={src} alt="Granat" />
      <h2>{nazwa}</h2>
      <h3>Status: {status}</h3>
    </button>
  );
};

export default FriendCard;
