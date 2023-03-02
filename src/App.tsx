import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
