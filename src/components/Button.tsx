import { useStateContext } from "../Context/StateProvider";

const styles = {
  buttonStyles:
    "uppercase border-2 border-gray-300 rounded-lg px-7 py-1 cursor-pointer select-none active:scale-105 hover:ring-2",
};

const Button = () => {

  const { setShowRules } = useStateContext();
  return (
    <div className="py-5 lg:py-3">
      <div className="button flex justify-center lg:justify-end md:px-12">
        <button
          className={styles.buttonStyles}
          onClick={() => {
            setShowRules(true);
          }}
        >
          Rules
        </button>
      </div>
    </div>
  );
};

export default Button;