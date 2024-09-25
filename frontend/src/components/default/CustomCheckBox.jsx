import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../main/cart/CartProvider';

const CustomCheckBox = ({id, sauces}) => {
  const [checkedState, setCheckedState] = useState(sauces);
  const {handleSauceSelection} = useContext(CartContext)

  useEffect(() => {
    handleSauceSelection(id, checkedState);
  }, [checkedState])

  const handleCheckboxChange = (e) => {
    const inputElement = e.currentTarget.querySelector('input');

    const { name } = inputElement;
    const newCheckedState = !checkedState[name];

    setCheckedState((prevState) => ({
      ...prevState,
      [name]: newCheckedState,
    }));
  };

  return (
    <div className="customCheckBoxHolder">
      {Object.keys(checkedState).map((sauce) => (
        <div
          className="customCheckBoxBody"
          onClick={handleCheckboxChange}
          key={sauce}
        >
          <input
            className="customCheckBoxInput"
            name={sauce}
            type="checkbox"
            checked={checkedState[sauce]}
            onChange={() => {}}
          />
          <label className="customCheckBoxWrapper" htmlFor={sauce}>
            <div className="customCheckBox">
              <div className="inner">{sauce === "herbs" ? "Kräuter" : sauce === 'garlic' ? "Knoblauch" : "Scharf"}</div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomCheckBox;