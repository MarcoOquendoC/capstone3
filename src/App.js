import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
