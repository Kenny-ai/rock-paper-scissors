import { useStateContext } from "../Context/StateProvider";

const Header = () => {
  const styles = {
    container: "flex justify-center items-center pt-8 mb-8 md:mb-12",
    header:
      "header flex justify-between w-10/12 rounded-2xl border-2 border-gray-500 p-4 lg:w-1/2 lg:p-5",
    rpsText: "mb-0 uppercase text-xl lg:text-4xl",
    score:
      "score bg-sky-100 flex items-center justify-center px-3 rounded-lg sm:px-6 lg:px-12",
  };

  const { scores } = useStateContext();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="header-title">
          <p className={styles.rpsText}>Rock </p>
          <p className={styles.rpsText}>Paper</p>
          <p className={styles.rpsText}>Scissors</p>
        </div>

        <div className={styles.score}>
          <div className="score flex items-center flex-col">
            <p className="text-blue-500 text-xs uppercase sm:text-base">
              Your score
            </p>
            <p className="text-gray-500 text-4xl lg:text-6xl">
              {scores.userScore}
            </p>
          </div>
        </div>
        <div className={styles.score}>
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
