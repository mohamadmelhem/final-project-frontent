// import logo from './logo.svg';
import './App.css';
// import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Bangalo from './pages/bangalo';
import DashboardAdmin from "./pages/dashboardAdmin";
import LoginPage from './pages/login';
import ContactUs from './pages/contactUs';
import TouristResort from './pages/touristResort';
import Register from './pages/Register/Register';
import SingleResort from './pages/SingleResort';
import Inbox from './pages/inbox/inbox';
import Layout from './components/layout';
import User from './pages/user';
import UserBangalos from './pages/userBangalos';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import NotFound from './pages/notfound/NotFound';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route index path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardAdmin />} >
            <Route path="/dashboard/inbox" element={<Inbox />} />
            
          </Route>
          <Route path='/' element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path={'/bangalo/:id'} element={<Bangalo />} />
            <Route exact path="/tourist" element={<TouristResort />} />
            <Route exact path="/Single-tourist/:id" element={<SingleResort />} />

            {authCtx.token && <Route exact path="/user" element={<User />} />}
            {authCtx.token && <Route exact path="/user/bangalos/:id" element={<UserBangalos />} />}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
