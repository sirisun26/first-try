// import Logo from "../src/assets/logo-rei.svg";
// import CoverImage from "./assets/landing/landing-cover.png";
// import Landing from "./components/Layout/Landing/Landing";

// import { routePaths } from "./index.const";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Report from "./pages/Report";
import Instructions from "./pages/Instructions";
function App() {


  return (
    // <div className="App">
    //   <Landing
    //     logo={Logo}
    //     logoAlt="REI"
    //     subtitle="CX Maturity"
    //     title="Assess your project's CX maturity level"
    //     copy="Each year, we engage with project managers to gain valuable insights 
    //         into project performance, specifically focusing on customer experience (CX). 
    //         Our project maturity assessment process ensures that every REI project is on the 
    //         right track. Let's elevate project success together!"
    //     btnText="Take the CX maturity assessment"
    //     btnLink={routePaths.questions}
    //     image={CoverImage}
    //     alt="CX Maturity Assessemnt"
    //     badge="CX"
    //     timeComplete="15 minutes"
    //     dueDate="5/23/25"
    //   />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/instructions" element={<Instructions/>} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
