import { ReactComponent as RockIcon } from "../../assets/icon-rock.svg";
import "./styles.css";

const Rock = () => {
  return (
    <button
      className="element rock rounded-full flex justify-center items-center w-32 h-32 cursor-pointer lg:w-44 lg:h-44 select-none"
      data-testid="rock"
    >
      <div className="element-white bg-white w-24 h-24 rounded-full flex justify-center items-center lg:w-32 lg:h-32">
        <RockIcon />
      </div>
    </button>
  );
};

export default Rock;
