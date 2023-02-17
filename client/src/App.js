/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/pages/Signup";
import LoginPage from "./components/pages/Login";
import Index from "./components/pages/index";
import Style from "./components/pages/MenStyle";
import Final_cart from "./components/cart/final_cart";
import ITEMPAGE from "./components/product_display/ItemPage";
import GirlStyle from "./components/pages/GirlsStyle.";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/serve" element={<Index />} />
          <Route exact path="/serve/him/" element={<Style/>} />
          <Route exact path="/serve/signup" element={<SignupPage />} />
          <Route exact path="/serve/login" element={<LoginPage />} />
        
          <Route exact path="/serve/cart" element={<Final_cart />} />
          <Route exact path="/serve/display/:details" element={<ITEMPAGE />} />
          <Route exact path="/serve/her/" element={<GirlStyle/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
