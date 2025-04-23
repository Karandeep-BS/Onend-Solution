// ProportionalReducer.js
import { useState, useEffect } from 'react';

const useProportionalReducer = (originalValue = 1092, totalValue = 4674) => {
  const [newValue, setNewValue] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setNewValue(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reductionFactor = newValue / originalValue;
  const newTotal = totalValue * reductionFactor;

  return newTotal;
};

export default useProportionalReducer;
