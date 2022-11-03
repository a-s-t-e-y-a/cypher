import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/pages/Signup";
import LoginPage from "./components/pages/Login";
import Index from "./components/pages/index";
import Menstyle from "./components/pages/MenStyle";
import Final_cart from "./components/cart/final_cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/serve/:type" element={<Index />} />
          <Route exact path="/serve/him/" element={<Menstyle/>} />
          <Route exact path="/serve/signup" element={<SignupPage />} />
          <Route exact path="/serve/login" element={<LoginPage />} />
          <Route exact path="/serve/cart" element={<Final_cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
