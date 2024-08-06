import { useState, useEffect } from 'react';

const useTimedFalse = (initialValue: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    let timer: number;
    
    if (value === true) {
      timer = setTimeout(() => {
        setValue(false);
      }, 5000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [value]);

  return [value, setValue];
};

export default useTimedFalse;
