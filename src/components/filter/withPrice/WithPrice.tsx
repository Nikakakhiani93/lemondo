import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from './WithPrice.module.scss';

interface PriceFilterProps {
  values: number[];
  min: number;
  max: number;
  onChange: (values: number[]) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
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
      <span>ფასები</span>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          {values.map((value, index) => (
            <div className={styles.inputWrapper} key={index}>
              <input
                name='priceFilter'
                type='number'
                value={value}
                onChange={(e) => handleInputChange(0, e)}
                min={index === 0 ? min : values[index - 1]}
                max={index === 1 ? max : values[index + 1]}
                step={1}
              />
              <div className={styles.currencySymbol}>₾</div>
            </div>
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

export default PriceFilter;
