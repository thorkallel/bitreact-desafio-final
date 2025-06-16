import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Inventory } from "./pages/Inventory";
import { Aboutus } from "./pages/Aboutus";
import { Ourservices } from "./pages/Ourservices";
import { Userzone } from "./pages/Userzone";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CarsProvider } from "./context/CarsContext";
import "./styles/sweetalert2.css";
import { useUserContext } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";

const AppRoutes = () => {
  const { user } = useUserContext();
  console.log("User in App", user);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route
            path="/userzone"
            element={
              <PrivateRoute>
                <Userzone />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <UserProvider>
      <CarsProvider>
        <AppRoutes />
      </CarsProvider>
    </UserProvider>
  );
}

export default App;
