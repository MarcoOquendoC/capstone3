import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import './styles/App.css';

function App() {
  const location = useLocation();
  const id = location.state;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details id={id} />} />
      </Routes>
    </div>
  );
}

export default App;
