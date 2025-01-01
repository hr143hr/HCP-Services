import { BrowserRouter, Routes, Route } from "react-router";
import WebLayout from './Layout/WebLayout';
import Home from './Pages/Website/Home';
import About from './Pages/Website/About';
import Contact from './Pages/Website/Contact';
import Services from './Pages/Website/Services';
import NewAc from "./Pages/Website/NewAc";
import AcAccessories from "./Pages/Website/AcAccessories";
import Login from "./Components/Website/Login/Login";
import UserSignUp from "./Components/Website/SignUp/UserSignUp";
import Vendor from "./Components/Website/SignUp/Vendor";
import ServiceMan from "./Components/Website/SignUp/ServiceMan";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<Contact />} />
            <Route path="newac" element={<NewAc />} />
            <Route path="acaccessories" element={<AcAccessories />} />
          </Route>
        
          <Route path="/login" element={<Login />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/serviceman" element={<ServiceMan />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
