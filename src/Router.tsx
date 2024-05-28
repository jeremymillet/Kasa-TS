import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Error from "./pages/Error/index";
import About from "./pages/About/index";
import Market from "./pages/Market/index";
import Logement from './data/logements.json'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error />} />
        <Route path="/market/:id" element={<Market logements={Logement} />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;