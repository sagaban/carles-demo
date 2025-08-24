import { Route, Routes } from 'react-router';
import { AboutPage } from './views/About';
import AuthLayout from './layouts/AuthLayout';
import Login from './views/Login';
import Register from './views/Register';
import ConcertsHome from './views/concerts/Index';
import City from './views/concerts/[city]';
import Trending from './views/concerts/Trending';
import { IndexPage } from './views/Index';
import FormDemo from 'views/FormDemo';
import { ProtectedRoute } from './layouts/ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="form-demo" element={<FormDemo />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts" element={<ProtectedRoute />}>
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Routes>
  );
}
