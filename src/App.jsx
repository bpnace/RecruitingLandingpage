import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Startseite from './pages/Startseite'
import UeberUns from './pages/UeberUns'
import Stellenangebote from './pages/Stellenangebote'
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/stellenangebote" element={<Stellenangebote />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
