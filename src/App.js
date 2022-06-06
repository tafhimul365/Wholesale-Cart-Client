import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blog/Blogs';
import Portfolio from './Pages/Blog/Portfolio';
import Csreview from './Pages/Home/Csreview';
import ProductDisplay from '../src/Pages/Shared/ProductDisplay';
import Contact from './Pages/Contact/Contact';
import Notfound from './Pages/Shared/Notfound';
import ProductDetails from './Pages/MainProduct/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductDisplay />} />
        <Route path='/products/:productId' element={<RequireAuth><ProductDetails /></RequireAuth>}></Route>

        <Route path="infoUpdate" element={<RequireAuth><Contact /></RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>

        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="reviews" element={<Csreview></Csreview>}></Route>

        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
