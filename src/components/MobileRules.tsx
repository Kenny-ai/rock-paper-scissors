import { ReactComponent as RulesSvg } from "../svg/image-rules.svg";
import { ReactComponent as IconClose } from "../svg/icon-close.svg";
import { StateContext } from "../Context/StateProvider";
import { ContextInterface } from "../@types/model";

import { useContext } from "react";

const styles = {
  iconStyles:
    "close-icon flex justify-center items-center h-1/4 cursor-pointer",
};

const MobileRules: React.FC = () => {
  const { setShowRules } = useContext(StateContext) as ContextInterface;

  return (
    <div className="rules">
      <div className="bg-white h-screen">
        <div className="rules-header flex justify-center items-center h-1/4">
          <h1 className="uppercase text-sky-900 text-3xl">Rules</h1>
        </div>

        <div className="flex justify-center items-center h-1/2">
          <RulesSvg />
        </div>

        <div
          className={styles.iconStyles}
          onClick={() => {
            setShowRules(false);
          }}
        >
          <IconClose />
        </div>
      </div>
    </div>
  );
};

export default MobileRules;
