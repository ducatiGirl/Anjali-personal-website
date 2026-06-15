import Navbar from './Navbar';
import Punyam from './projects/Punyam'; // Make sure this is imported
import Home from './pages/Home';
import ICare from './projects/iCare';
import KKDS from './projects/KKDS';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/Punyam" element={<Punyam />} />
          <Route path="/projects/iCare" element={<ICare />} />
          <Route path="/projects/KKDS" element={<KKDS />} />
        </Routes>
      </div>
    </>
  );
}

export default App;