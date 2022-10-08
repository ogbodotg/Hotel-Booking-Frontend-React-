import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelList from "./pages/list/HotelList";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
