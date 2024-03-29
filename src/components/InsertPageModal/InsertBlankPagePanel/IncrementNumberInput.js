import React, { useState } from 'react';
import { Input } from '@pdftron/webviewer-react-toolkit';
import Icon from 'components/Icon';
import classNames from 'classnames';

const IncrementNumberInput = ({ className, min, onChange, value, fillWidth }) => {
  const [number, setNumber] = useState(value);

  const incrementNumber = () => {
    onChange(number + 1);
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    const newNumber = number - 1;
    if (newNumber < min) {
      return;
    }
    onChange(newNumber);
    setNumber(newNumber);
  };

  const handleChange = (e) => {
    onChange(parseInt(e.target.value));
    setNumber(parseInt(e.target.value));
  };

  return (
    <div className={classNames({
      incrementNumberInput: true,
      [className]: !!className,
    })}>
      <Input type="number" min={min} onChange={handleChange} value={number} fillWidth={fillWidth} />
      <div className="increment-buttons">
        <button className="increment-arrow-button" onClick={incrementNumber}>
          <Icon className="up-arrow" glyph={'icon-chevron-up'} />
        </button>
        <button className="increment-arrow-button" onClick={decrementNumber}>
          <Icon className="down-arrow" glyph={'icon-chevron-down'} />
        </button>
      </div>
    </div>
  );
};

export default IncrementNumberInput;
