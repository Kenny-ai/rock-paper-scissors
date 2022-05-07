import React, { useContext } from 'react'
import { ContextInterface } from '../@types/model';
import { StateContext } from '../Context/StateProvider';

const styles = {
  buttonStyles:
    "uppercase border-2 border-gray-300 rounded-lg px-7 py-1 cursor-pointer",
};

const Button = () => {
    const { setShowRules } = useContext(
      StateContext
    ) as ContextInterface;
  return (
    <div className='bg-red-500'>
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
}

export default Button