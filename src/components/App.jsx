import HomePage from 'pages/HomePage/HomePage';
import OrderPage from 'pages/OrderPage/OrderPage';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/order-litophanes" element={<OrderPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
