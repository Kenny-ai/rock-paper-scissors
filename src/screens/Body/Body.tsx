import { ReactComponent as Triangle } from "../../assets/bg-triangle.svg";
import { useStateContext } from "../../contexts/StateProvider";
import Paper from "../../components/elements/Paper";
import Scissors from "../../components/elements/Scissors";
import Rock from "../../components/elements/Rock";
import { elementsArray } from "../../App";
import { motion } from "framer-motion";

enum Id {
  ROCK = 1,
  PAPER,
  SCISSORS,
}

const Body = () => {
  const { setElements, setShowGame } = useStateContext();

  return (
    <div className="body">
      <section className="flex justify-center items-center py-12 w-full md:mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 6,
            stiffness: 100,
            restDelta: 0.001,
          }}
          className="relative flex justify-center items-center p-4 sm:p-12"
        >
          <Triangle />

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-0 left-0"
            onClick={() => {
              setElements(
                elementsArray.filter((element) => element.id === Id.PAPER)
              );
              setShowGame(true);
            }}
          >
            <Paper />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-0 right-0"
            onClick={() => {
              setElements(
                elementsArray.filter((element) => element.id === Id.SCISSORS)
              );
              setShowGame(true);
            }}
          >
            <Scissors />
          </motion.div>

          <motion.div className="w-full flex justify-center absolute bottom-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setElements(
                  elementsArray.filter((element) => element.id === Id.ROCK)
                );
                setShowGame(true);
              }}
            >
              <Rock />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Body;
