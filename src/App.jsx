import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Intro from "./Pages/Intro";
import Home from "./Pages/Home";




function App() {
 

  return (
    <>
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<Intro />} />
             <Route path="/home" element={<Home />} />

              {/* <Route path="/project/:title" element={<DetailProjek />} />
            <Route path="/delete" element={<Delete />} /> */}
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App
