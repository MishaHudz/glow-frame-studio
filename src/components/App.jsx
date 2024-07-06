import HomePage from 'pages/HomePage/HomePage';
import OrderPage from 'pages/OrderPage/OrderPage';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/order-litophanes" element={<OrderPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
  );
};
