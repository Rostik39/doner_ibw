import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../../functions/useFetch';

const NumberInput = ({className, initValue, username}) => {
  const [value, setValue] = useState(initValue);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);
  const {data, error, isPending, fetchData} = useFetch();

  useEffect(() => {
    fetchData("/balance", "PUT",
      {
        body: {
          new_balance: value,
          username: username
        }
      })
  }, [value])

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          inputRef.current.blur();
          if (inputValue.trim() === '') {
              setInputValue(value);
          } else {
              try {
                  const calculatedValue = eval(inputValue.replace(',', '.'));
                  setValue(calculatedValue.toFixed(2).toString());
                  setInputValue(calculatedValue.toFixed(2).toString());
              } catch (error) {
                  console.error("Invalid expression");
              }
          }
      }
  };

  return (
      <input
          className={`${className}__input input ${value < 0 ? 'negative-value' : ''}`}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          ref={inputRef}
      />
  );
};

export default NumberInput;