import React from 'react';
import styles from '../Search/Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      onChange={(event) => setSearchValue(event.target.value)}
      value={searchValue}
      className={styles.root}
      placeholder="Поиск"
    />
  );
};

export default Search;
