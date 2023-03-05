import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Login from './components/login';
import Product from './components/product';
import Admin from './components/admin';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
