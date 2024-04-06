import { Route, Routes } from "react-router-dom";

import Login from "./Pages/Common/Login";
import Checklogin from "./Pages/Common/Checklogin";
import { pathUser } from "./Untils/path";
import Home from "./Pages/User/Home";
import TourList from "./Pages/User/TourList";
import DetailTour from "./Pages/User/DetailTour";
import UserAccount from "./Pages/User/UserAccount";
import Signup from "./Pages/Common/Signup";
import Payment1 from "./Pages/User/Payment1";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path={pathUser.USER} element={<Checklogin />}>
          <Route path={pathUser.TOURLIST} element={<TourList />} />
          <Route path={pathUser.HOME} element={<Home />} />
          <Route path={pathUser.TOURDETAIL} element={<DetailTour />} />
          <Route path={pathUser.INFORMATION} element={<UserAccount />} />
        </Route>
        <Route path={pathUser.PAYMENT} element={<Payment1 />} />
      </Routes>
    </div>
  );
}

export default App;
