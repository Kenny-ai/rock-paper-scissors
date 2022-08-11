import { ReactComponent as PaperIcon } from "../../svg/icon-paper.svg";

const Paper = () => {
  return (
    <button
      className="element paper rounded-full flex justify-center items-center w-32 h-32 cursor-pointer lg:w-44 lg:h-44"
      data-testid="paper"
    >
      <div className="element-white bg-white w-24 h-24 rounded-full flex justify-center items-center lg:w-32 lg:h-32">
        <PaperIcon />
      </div>
    </button>
  );
};

export default Paper;
