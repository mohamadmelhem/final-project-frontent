// import logo from './logo.svg';
import './App.css';
// import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Bangalo from './pages/bangalo';
import DashboardAdmin from "./pages/dashboardAdmin";
import DashboardUser from "./pages/dashboardUser";
import LoginPage from './pages/login';
import ContactUs from './pages/contactUs';
import TouristResort from './pages/touristResort';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Register from './pages/Register/Register';
import SingleResort from './pages/SingleResort';
import Inbox from './pages/inbox/inbox';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route index path="/login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="dashboard/inbox" element={<Inbox />} />
          <Route path='/' element={<Layout />}>


            <Route path="/" element={<Home />} />
            {/* <Route path="contact" element={<ContactUs />} /> */}
            <Route exact path={'/bangalo/:id'} element={<Bangalo />} />

            <Route path="tourist" element={<TouristResort />} />
            <Route path="/Single-tourist/:id" element={<SingleResort />} />
            <Route path="register" element={<Register />} />
            <Route path="user" element={<DashboardUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
