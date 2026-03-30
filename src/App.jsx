import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import StudentBarplot from "./studentBarplot/StudentBarplot.jsx";
import EconomistBarplot from "./economistBarplot/EconomistBarplot.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/barplot" element={<StudentBarplot />} />
      <Route path="/economist-barplot" element={<EconomistBarplot />} />
    </Routes>
  );
}
