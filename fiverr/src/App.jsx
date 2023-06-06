import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import axios from 'axios';
import Navbare from './Component/Navbare/Navbare';
import Form from './pages/Formlog/Form';
import Login from "./pages/FormLogin/Login";
// import Frelancer from './pages/Pfreelencer/Frelancer';
// import Home from './pages/Home/Home';
// import Checkout from './Component/Service_Form/Checkout';
// import Chat from './Component/Chat/Chat';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
        <Navbare />
        <div style={{ overflowY: "auto" }}>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/Pfrelancer" element={<Frelancer />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Form />} />
            {/* <Route path="/checkout" element={<Checkout />} />
            <Route path="/chat" element={<Chat />} /> */}
            {/* Ajouter Outlet à la fin des routes pour afficher les routes enfants */}
            <Route element={<Outlet />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
