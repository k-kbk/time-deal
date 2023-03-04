import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Login from './components/login';
import Product from './components/product';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
