 
import { BrowserRouter,Routes,Route } from "react-router-dom";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Cart from "./components/Cart";
function App(){


  return(
    <>
       <BrowserRouter>
         <Routes>
             <Route exact path="/"   element={<LoginForm />}/>
             <Route  path="/registerForm"   element={<RegisterForm  />}/>
             <Route  path="/home"   element={<Home />}/>
             <Route  path="/cart"   element={<Cart />}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}


export default App;