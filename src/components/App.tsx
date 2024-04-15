import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NAV } from "../constants/nav";
import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants/theme";
import { Global } from "../styled";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Global />
        <Header />
        <Routes>
          {NAV.map((nav) => (
            <Route key={nav.name} path={nav.path} element={<nav.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
