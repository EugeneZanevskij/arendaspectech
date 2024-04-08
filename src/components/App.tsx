import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NAV } from "../constants/nav";
import { Navbar } from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {NAV.map((nav) => (
          <Route key={nav.name} path={nav.path} element={<nav.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
