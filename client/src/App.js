
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import SignupPage from './components/Userentry/pages/Signup';
import LoginPage from './components/Userentry/pages/Login';
import Index from "./components/pages";
function App() {
  return (
    <>
     <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<LoginPage/>} />
               <Route path="/signup" element={<SignupPage/>} />
               <Route path="/index" element={<Index/>} />
             </Routes>
         </BrowserRouter>
       </div>
      </div>
      
    </>
  )

  }
export default App;
