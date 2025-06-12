import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Inventory } from "./pages/Inventory";
import { Aboutus } from "./pages/Aboutus";
import { Ourservices } from "./pages/Ourservices";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourservices" element={<Ourservices />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
