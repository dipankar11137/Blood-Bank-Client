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
import BloodExchange from './Components/Pages/Blood Exchange/BloodExchange';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import DonateBlood from './Components/Pages/Dashboard/Donate Blood/DonateBlood';
import ManageBloods from './Components/Pages/Dashboard/Manage Blood/ManageBloods';
import ManageDonateBloods from './Components/Pages/Dashboard/Manage Donate Blood/ManageDonateBloods';
import ManageBuys from './Components/Pages/Dashboard/ManageBuy/ManageBuys';
import Members from './Components/Pages/Dashboard/Member/Members';
import MyBookings from "./Components/Pages/Dashboard/My Booking/MyBookings";
import Payment from './Components/Pages/Dashboard/My Booking/Payment/Payment';
import BookBlood from './Components/Pages/Home/Book Blood/BookBlood';
import FreeBook from './Components/Pages/Home/Book Blood/FreeBook';
import OurMembers from './Components/Pages/OurMembers/OurMembers';
AOS.init();

function App() {
  return (
    <div className="bg-gradient-to-r from-red-100 to-green-100">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        <Route
          path="/book/:id"
          element={
            <RequireAuth>
              <BookBlood />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/freeBook/:id"
          element={
            <RequireAuth>
              <FreeBook />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
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
          <Route index element={<OurMembers />} />
          <Route
            path="bloodExchange"
            element={
              <RequireAuth>
                <BloodExchange />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manageMember"
            element={
              <RequireAuth>
                <Members />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="myBooking"
            element={
              <RequireAuth>
                <MyBookings />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="donateBlood"
            element={
              <RequireAuth>
                <DonateBlood />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manageDonateBlood"
            element={
              <RequireAuth>
                <ManageDonateBloods />
              </RequireAuth>
            }
          ></Route>
          <Route path="manageBlood" element={<ManageBloods />} />
          <Route path="manageBuy" element={<ManageBuys />} />
        </Route>
        {/* Dashboard End */}
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
