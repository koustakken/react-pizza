import React, { useState, useEffect } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import axios from 'axios';

//import pizzas from './assets/pizza.json';

function App() {
  //get pizzas on mockApi
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('https://62ecfb06a785760e67617b14.mockapi.io/pizza').then((res) => {
      setPizzas(res.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
