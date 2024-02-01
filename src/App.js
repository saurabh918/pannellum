import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import { Nav } from "./components/nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
      </Routes >
    </>
  );
}

export default App;
