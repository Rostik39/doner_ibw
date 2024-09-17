import React, { useState } from 'react';

const CustomCheckBox = () => {
  // State to track which checkboxes are checked
  const [checkedState, setCheckedState] = useState({
    cCB1: false,
    cCB2: false,
    cCB3: false,
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <div className="customCheckBoxHolder">
      {/* Checkbox 1 */}
      <input
        className="customCheckBoxInput"
        id="cCB1"
        type="checkbox"
        checked={checkedState.cCB1}
        onChange={handleCheckboxChange}
      />
      <label className="customCheckBoxWrapper" htmlFor="cCB1">
        <div className="customCheckBox">
          <div className="inner">Kräuter</div>
        </div>
      </label>

      {/* Checkbox 2 */}
      <input
        className="customCheckBoxInput"
        id="cCB2"
        type="checkbox"
        checked={checkedState.cCB2}
        onChange={handleCheckboxChange}
      />
      <label className="customCheckBoxWrapper" htmlFor="cCB2">
        <div className="customCheckBox">
          <div className="inner">Knoblauch</div>
        </div>
      </label>

      {/* Checkbox 3 */}
      <input
        className="customCheckBoxInput"
        id="cCB3"
        type="checkbox"
        checked={checkedState.cCB3}
        onChange={handleCheckboxChange}
      />
      <label className="customCheckBoxWrapper" htmlFor="cCB3">
        <div className="customCheckBox">
          <div className="inner">Scharf</div>
        </div>
      </label>
    </div>
  );
};

export default CustomCheckBox;