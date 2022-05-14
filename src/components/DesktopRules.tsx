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

const DesktopRules = () => {
  const { setShowRules } = useContext(StateContext) as ContextInterface;

  return (
    <div className="desktop-rules relative">
      <div className={styles.container}></div>
      <div className="h-full absolute top-0 flex justify-center items-center w-full">
        <div className="bg-white p-6 rounded-lg w-fit">
          <div className={styles.rulesHeader}>
            <h1 className={styles.rulesText}>Rules</h1>

            <div
              className="close-icon cursor-pointer"
              onClick={() => {
                setShowRules(false);
              }}
            >
              <IconClose />
            </div>
          </div>

          <div>
            <RulesSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRules;
