import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/pages/Signup";
import LoginPage from "./components/pages/Login";
import Index from "./components/pages/index";
import Menstyle from "./components/pages/MenStyle";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/serve" element={<Index />} />
          <Route path="/serve/for%20him/" element={<Menstyle/>} />
          <Route path="/serve/signup" element={<SignupPage />} />
          <Route path="/serve/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
