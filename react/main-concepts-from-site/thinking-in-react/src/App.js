import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import products from './Products';

function App() {
  return (
    <FilterableProductTable products={products} />
  );
}

export default App;
