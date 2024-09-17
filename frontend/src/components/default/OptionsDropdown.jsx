import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../main/cart/CartProvider';

const OptionsDropdown = ({id, options, initValue=null}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const {handleChangeOption} = useContext(CartContext)

  useEffect(() => {
    initValue ? setSelectedOption(initValue) : null;
  }, [])

  useEffect(() => {
    handleChangeOption(id, selectedOption);
  }, [selectedOption])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label className="list__select select" htmlFor="slct">
        <select id="slct" value={selectedOption} onChange={handleSelectChange} required>
            <option value="" disabled>Select option</option>
            {options.map((optionObj) => {
              const optionKey = Object.keys(optionObj)[0]; // Extract the key
              return <option key={optionKey} value={optionKey}>{optionKey}</option>;
            })}
        </select>
        <svg>
            <use xlinkHref="#select-arrow-down" />
        </svg>
      </label>

      <svg className="sprites">
        <symbol id="select-arrow-down" viewBox="0 0 10 6">
          <polyline points="1 1 5 5 9 1" />
        </symbol>
      </svg>
    </>
  );
};

export default OptionsDropdown;