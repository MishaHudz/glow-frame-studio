import HomePage from 'pages/HomePage/HomePage';
import OrderPage from 'pages/OrderPage/OrderPage';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MyContext } from 'сontext/context';
import { useState } from 'react';

export const App = () => {
  const [isEnglish, setIsEnglish] = useState(() =>
    JSON.parse(window.localStorage.getItem('language') ?? true)
  );

  return (
    <MyContext.Provider
      value={{
        isEnglish,
        setIsEnglish,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/order-litophanes" element={<OrderPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MyContext.Provider>
  );
};
