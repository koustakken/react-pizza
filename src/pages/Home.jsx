import React, { useState, useEffect } from 'react';

import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
  const { searchValue } = useContext(AppContext);

  //get pizzas on mockApi
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //context
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://62ecfb06a785760e67617b14.mockapi.io/pizza?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty}&order=desc`,
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  const items = pizzas
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <Banner />
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onClickSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : items}</div>
    </div>
  );
};

export default Home;
