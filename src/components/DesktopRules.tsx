import { ReactComponent as RulesSvg } from "../svg/image-rules.svg";
import { ReactComponent as IconClose } from "../svg/icon-close.svg";
import { StateContext } from "../Context/StateProvider";
import { ContextInterface } from "../@types/model";

import { useContext } from "react";

const styles = {
  container: "bg-black opacity-50 h-screen flex justify-center items-center",
  rulesContainer: "rules-container bg-white p-6 rounded-lg",
  rulesHeader: "flex justify-between items-center mb-8",
  rulesText: "uppercase text-sky-900 text-3xl",
};

const DesktopRules: React.FC = () => {
  const { setShowRules } = useContext(StateContext) as ContextInterface;


  return (
    <div className="desktop-rules">
      <div className={styles.container}>
        <div className={styles.rulesContainer}>
          <div className={styles.rulesHeader}>

            <h1 className={styles.rulesText}>Rules</h1>

            <div className="close-icon" onClick={() => {setShowRules(false)}}>
              <IconClose className="cursor-pointer" />
            </div>
          </div>

          <div className="">
            <RulesSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRules;
