import {useState, useCallback} from "react";

export const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = useCallback(() => {
    if (count >= 1) setCount (count - 1);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);



  const handleReset = useCallback(() => setCount(initialCount), []);

  return [count, handleIncrement, handleDecrement, handleReset]
}

export default useCounter