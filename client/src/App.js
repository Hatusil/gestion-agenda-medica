import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TestDB from './pages/TestDB';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* Navegación */}
          <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/test-db">Test DB</Link>
          </nav>

          {/* Rutas */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </div>
              }
            />
            <Route path="/test-db" element={<TestDB />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;