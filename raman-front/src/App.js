import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import News from "./Pages/News";
import Gallery from "./Pages/Gallery";
import Bio from "./Pages/Bio";
import Contact from "./Pages/Contact";
import Concerts from "./Pages/Concerts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
