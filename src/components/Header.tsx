import { useStateContext } from "../Context/StateProvider";
import { motion } from "framer-motion";

const Header = () => {
  const { scores, setScores, setShowGame } = useStateContext();

  const handleReset = () => {
    setShowGame(false);
    setScores({ userScore: 0, cpuScore: 0 });
  }

  return (
    <div className="flex justify-center items-center pt-8 mb-8 md:mb-12">
      <div className="header flex justify-between items-center w-10/12 rounded-2xl border-2 border-gray-500 p-4 lg:w-1/2 lg:p-5">
        <div className="header-title">
          <p className="mb-0 uppercase text-xl lg:text-4xl">Rock </p>
          <p className="mb-0 uppercase text-xl lg:text-4xl">Paper</p>
          <p className="mb-0 uppercase text-xl lg:text-4xl">Scissors</p>
        </div>

        <div className="score bg-sky-100 flex items-center justify-center px-3 py-4 rounded-lg sm:px-6 lg:px-12">
          <div className="score flex items-center flex-col">
            <p className="text-blue-500 text-xs uppercase sm:text-base">
              Your score
            </p>
            <p className="text-gray-500 text-4xl lg:text-6xl">
              {scores.userScore}
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-1 px-5 bg-sky-100 text-blue-500 rounded-lg uppercase cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </motion.button>

        <div className="score bg-sky-100 flex items-center justify-center px-3 py-4 rounded-lg sm:px-6 lg:px-12">
          <div className="score flex items-center flex-col">
            <p className="text-blue-500 text-xs uppercase sm:text-base">
              cpu score
            </p>
            <p className="text-gray-500 text-4xl lg:text-6xl">
              {scores.cpuScore}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
