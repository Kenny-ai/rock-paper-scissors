import { ReactComponent as RockIcon } from "../../svg/icon-rock.svg";
import "../../styles/Body.css";


const Rock = () => {
  return (
    <div>
      <div className="element rock rounded-full flex justify-center items-center w-32 h-32 cursor-pointer lg:w-44 lg:h-44 hover:scale-105 select-none">
        <div className="element-white bg-white w-24 h-24 rounded-full flex justify-center items-center lg:w-32 lg:h-32">
          <RockIcon />
        </div>
      </div>
    </div>
  );
}

export default Rock