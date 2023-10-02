import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from '../withPrice/WithPrice.module.scss';

interface SymbolFilterProps {
  min: number;
  max: number;
  values: number[];
  onChange: (values: number[]) => void;
}

const WithSymbol: React.FC<SymbolFilterProps> = ({
  min,
  max,
  values,
  onChange,
}) => {
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValues = [...values];
    newValues[index] = parseFloat(event.target.value);
    onChange(newValues);
  };

  return (
    <div className={styles.priceSlider}>
      <span>სიმბოლოების რაოდნობა</span>

      <div className={styles.inputContainer}>
        <div className={styles.inputSymbolWrapper}>
          {values.map((value, index) => (
            <input
              key={index}
              name='symbolFilter'
              type='number'
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              min={index === 0 ? min : values[index - 1] + 1}
              max={index === 1 ? max : values[index + 1] - 1}
              step={1}
            />
          ))}
        </div>
      </div>
      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={styles.rangeTrack}
            style={{
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#99CC66', '#ccc'],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className={styles.rangeThumb} />
        )}
      />
    </div>
  );
};

export default WithSymbol;
