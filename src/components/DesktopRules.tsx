import { ReactComponent as RulesSvg } from "../svg/image-rules.svg";
import { ReactComponent as IconClose } from "../svg/icon-close.svg";
import { useStateContext } from "../Context/StateProvider";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Body.css";

const DesktopRules = () => {
  const { setShowRules } = useStateContext();

  const handleCloseRules = () => {
    setShowRules(false);
  };

  return (
    <div className="desktop-rules relative">
      <div
        onClick={handleCloseRules}
        className="bg-black opacity-50 h-screen flex justify-center items-center"
      ></div>

      <AnimatePresence>
        <motion.div
          className="bg-white rounded-lg p-6 w-[360px] absolute flex flex-col justify-center rule"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
        >
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="uppercase text-sky-900 text-3xl">Rules</h1>

              <motion.div
                className="close-icon cursor-pointer"
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
