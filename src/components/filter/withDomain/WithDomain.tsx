import React from 'react';
import styles from '../withCategory/WithCategory.module.scss';

interface DomainFilterProps {
  domains: string[];
  checkedDomains: string[];
  onDomainChange: (category: string) => void;
}

const withDomain: React.FC<DomainFilterProps> = ({
  checkedDomains,
  domains,
  onDomainChange,
}) => {
  return (
    <div className={styles.CategoryContainer}>
      <h2>დომენის ზონა</h2>
      <div className={styles.CategoryItems}>
        {domains.map((domain) => (
          <label key={domain}>
            <input
              type='checkbox'
              value={domain}
              checked={checkedDomains.includes(domain)}
              onChange={() => onDomainChange(domain)}
            />
            {domain}
          </label>
        ))}
      </div>
    </div>
  );
};

export default withDomain;
