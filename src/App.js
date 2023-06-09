import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from './Components/Pages/Home/Home';
import Navbar from "./Components/Share/Navbar";
import NotFound from "./Components/Share/NotFound";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
import RequireAuth from './Components/Login/RequireAUth';
import AboutUs from './Components/Pages/About Us/AboutUs';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageBloods from './Components/Pages/Dashboard/Manage Blood/ManageBloods';
import Members from './Components/Pages/Dashboard/Member/Members';
AOS.init();

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        {/* <Route path="/member" element={<Members />}></Route> */}
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Members />} />
          <Route path="manageBlood" element={<ManageBloods />} />
          {/*<Route path="addJobs" element={<AddJobs />} />
          <Route path="manageBooking" element={<ManageBookings />} /> */}
        </Route>
        {/* Dashboard End */}
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
