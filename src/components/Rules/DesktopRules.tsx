import { ReactComponent as RulesSvg } from "../../assets/image-rules.svg";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";
import { useStateContext } from "../../contexts/StateProvider";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";

const DesktopRules = () => {
  const { setShowRules } = useStateContext();

  const handleCloseRules = () => {
    setShowRules(false);
  };

  return (
    <div className="desktop-rules relative h-full" data-testid="desktop-rules">
      <div
        onClick={handleCloseRules}
        className="bg-black opacity-50 flex h-full justify-center items-center"
      ></div>

      <AnimatePresence>
        <motion.div
          className="rule bg-white rounded-lg p-6 w-[360px] absolute flex flex-col justify-center"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
        >
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="uppercase text-sky-900 text-3xl">Rules</h1>

              <motion.div
                className="close-icon cursor-pointer"
                data-testid="close-desktop-rules"
                whileHover={{ scale: 1.2 }}
                onClick={handleCloseRules}
              >
                <IconClose />
              </motion.div>
            </div>

            <div className="flex justify-center items-center">
              <RulesSvg />
            </div>
          </>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DesktopRules;
