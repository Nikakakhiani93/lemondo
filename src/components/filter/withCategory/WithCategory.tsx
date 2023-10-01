import React from 'react';
import styles from './WithCategory.module.scss';

interface WithCategoryProps {
  categories: string[];
  checkedCategories: string[];
  onDropChange: (category: string) => void;
}

const WithCategory: React.FC<WithCategoryProps> = ({
  categories,
  checkedCategories,
  onDropChange,
}) => {
  console.log(onDropChange);

  return (
    <div className={styles.CategoryContainer}>
      <span>კატეგორიები</span>
      <div className={styles.CategoryItems}>
        {categories.map((category) => (
          <label key={category}>
            <input
              type='checkbox'
              value={category}
              checked={checkedCategories.includes(category)}
              onChange={() => onDropChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default WithCategory;
