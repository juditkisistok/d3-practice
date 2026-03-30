import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import StudentBarplot from "./studentBarplot/StudentBarplot.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/barplot" element={<StudentBarplot />} />
    </Routes>
  );
}
