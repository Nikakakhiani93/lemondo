import React, { useState } from 'react';
import styles from './WithName.module.scss';

interface WithNameProps {
  onSearch: (filterText: string) => void;
}

const WithNameInput: React.FC<WithNameProps> = ({ onSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onSearch(text);
  };

  return (
    <div>
      <input
        className={styles.searchInput}
        type='text'
        placeholder='სახელით ძიება'
        onChange={handleChange}
      />
    </div>
  );
};

export default WithNameInput;
