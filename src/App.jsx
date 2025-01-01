import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import WebLayout from './Layout/WebLayout';
import Home from './Pages/Website/Home';
import About from './Pages/Website/About';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
