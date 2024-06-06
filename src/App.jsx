import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Portfolio } from "./components/Portfolio";
import { Store } from "./components/Store";
import { Dropdown } from "./components/Dropdown";
import listImages from "./components/Portfolio/listImages";
import products from "./components/Store/products";

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/portfolio">Портфолио</Link></li>
          <li><Link to="/store">Интернет-магазин</Link></li>
          <li><Link to="/dropdown">Выпадающий список</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/portfolio" element={<Portfolio data={listImages} />} />
        <Route path="/store" element={<Store data={products} />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </Router>
  );
}

export default App
