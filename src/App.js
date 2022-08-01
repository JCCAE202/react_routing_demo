import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="home/:userid" element={<Home />} />

        <Route path="home/:userid/:username" element={<Home />} />

        <Route path="about" element={<About />} />

        {/* should always be last because the * matches everything */}
        <Route path="*" element={<NotFound />} />

      </Routes>
        
    </div>
  );
}

export default App;
