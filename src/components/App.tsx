import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { THEME } from "../constants/theme";
import { Global } from "../styled";
import { Footer } from "./Footer";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Equipment } from "../pages/Equipment";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Services } from "../pages/Services";
import { NotFound } from "../pages/NotFound";
import { SERVICES } from "../constants/services";
import { ServicePage } from "../pages/Services/ServicesPage";
import { ServicesItems } from "./ServicesItems";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Global />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesItems services={SERVICES} />} />
            {SERVICES.map((service) => (
              <Route key={service.id} path={service.relativePath}>
                {service.services ? (
                  <Route
                    index
                    element={<ServicesItems services={service.services} />}
                  />
                ) : (
                  <Route index element={<ServicePage service={service} />} />
                )}
                {service.services?.map((subService) => (
                  <Route
                    key={subService.id}
                    path={subService.relativePath}
                    element={<ServicePage service={subService} />}
                  />
                ))}
              </Route>
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
