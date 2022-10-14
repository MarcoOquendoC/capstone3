import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Navbar />
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
