import React from 'react';
import styles from '../Search/Search.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

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
