import { Info } from "react-feather";

function InfoButton({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      <Info />
    </button>
  );
}

export default InfoButton;
