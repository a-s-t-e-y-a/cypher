
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import SignupPage from './components/pages/Signup';
import LoginPage from './components/pages/Login';
import Index from "./components/pages/index";
function App() {
  return (
    <>
     
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Index/>} />
               <Route path="/signup" element={<SignupPage/>} />
               <Route path="/login" element={<LoginPage/>} />
             </Routes>
         </BrowserRouter>
    
      
    </>
  )

  }
export default App;
