import { ReactComponent as RulesSvg } from "../../assets/image-rules.svg";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";
import { useStateContext } from "../../contexts/StateProvider";
import { motion } from "framer-motion";

const styles = {
  iconStyles:
    "close-icon flex justify-center items-center h-1/4 cursor-pointer",
};

const MobileRules: React.FC = () => {
  const { setShowRules } = useStateContext();

  return (
    <motion.div className="rules" data-testid="mobile-rules">
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
    </motion.div>
  );
};

export default MobileRules;
