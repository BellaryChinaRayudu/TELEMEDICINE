import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LobbyScreen from "./Pages/Lobby/Lobby.jsx";
import { SocketProvider } from "./Context/SocketProvider";
import RoomPage from "./Pages/Room.jsx";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";

function App() {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/lobby" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </SocketProvider>
    </BrowserRouter>
  );
}

export default App;
