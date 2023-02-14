import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from './components/Cart';

import CartProvider from './context/CartContext';

const App = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 3,
    },
    {
      id: 2,
      value: 5,
    },
    {
      id: 3,
      value: 7,
    },
  ]);

  useEffect(() => {
    console.log("counters change");
  }, [counters]);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        return {
          ...counter,
          value: 0,
        };
      })
    );
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      })
    );
  };

  const getCountersWithValue = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };

  const [product, setProduct] = useState([])

  const handleClick = (item) => {
    setProduct([...product, item])
  }
  

  console.log(product)
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar totalCount={getCountersWithValue()} product={product}/>
        <Routes>
          <Route path='/' element={<Counters counters={counters}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                />} />
          <Route path='/products' element={<Products items={product} handleClick={handleClick}/>}/>
          <Route path='/cart' element={ <Cart product={product} setProduct={setProduct}/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
