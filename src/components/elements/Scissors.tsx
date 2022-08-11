import { ReactComponent as ScissorsIcon } from "../../svg/icon-scissors.svg";

const Scissors = () => {
  return (
    <button
      className="element scissors rounded-full flex justify-center items-center w-32 h-32 cursor-pointer lg:w-44 lg:h-44"
      data-testid="scissors"
    >
      <div className="element-white bg-white w-24 h-24 rounded-full flex justify-center items-center lg:w-32 lg:h-32">
        <ScissorsIcon />
      </div>
    </button>
  );
};

export default Scissors;
