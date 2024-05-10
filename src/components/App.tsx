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
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Services } from "../pages/Services";
import { NotFound } from "../pages/NotFound";
import { SERVICES } from "../constants/services";
import { ServiceInfo } from "../components/ServiceInfo";
import { ServicesItems } from "./ServicesItems";
import { EquipmentsItems } from "./EquipmentItems";
import { EQUIPMENT } from "../constants/equipment";
import { EquipmentInfo } from "./EquipmentInfo";
import { Users } from "../pages/Users";
import { UserItems } from "./UserItems";
import { UserPage } from "../pages/UserPage";
import AdminServices from "../pages/Admin/Services";
import AdminEquipmentType from "../pages/Admin/EquipmentType";
import AdminEquipment from "../pages/Admin/Equipment";
import AdminStatus from "../pages/Admin/Status";
import AdminBooking from "../pages/Admin/Booking";
import BookingForm from "../pages/BookingForm";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Global />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipment" element={<Equipment />}>
            <Route index element={<EquipmentsItems equipments={EQUIPMENT} />} />
            {EQUIPMENT.map((equipment) => (
              <Route
                key={equipment.id}
                path={equipment.relativePath}
                element={<EquipmentInfo equipment={equipment} />}
              />
            ))}
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking-form" element={<BookingForm />} />
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
                  <Route index element={<ServiceInfo service={service} />} />
                )}
                {service.services?.map((subService) => (
                  <Route
                    key={subService.id}
                    path={subService.relativePath}
                    element={<ServiceInfo service={subService} />}
                  />
                ))}
              </Route>
            ))}
          </Route>
          <Route path="/users" element={<Users />}>
            <Route index element={<UserItems />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>
          <Route path="/admin">
            <Route path="services" element={<AdminServices />} />
            <Route path="equipment-type" element={<AdminEquipmentType />} />
            <Route path="equipment" element={<AdminEquipment />} />
            <Route path="status" element={<AdminStatus />} />
            <Route path="bookings" element={<AdminBooking />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
