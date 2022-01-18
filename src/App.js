import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact element={<ProductsList />} />
          <Route
            path="/product/:productId"
            exact element={<ProductsDetails />} />
          <Route>404 Page Not Found!</Route>
        </Routes>
      </Router>
    </Provider>
  );
};
