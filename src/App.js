import Sidebar1 from "./Sidebar/Sidebar1";
import Navbars from "../src/Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shopadd from "./Shop/shopadd";
import Categoryadd from "./Product/Category/categoryadd";
import Subcategoryadd from "../src/Product/Subcategory/subcategoryadd";
import Offeradd from "../src/Offer/Offersadd";
import UserManagement from "../src/Usermanagement/UserAdd";
import Dashboard from "../src/Components/Dashboard";
import Offertab from "../src/Tabs/Offertab";
import Productcategorytab from "../src/Tabs/Productcategorytab";
import Subcategorytab from "../src/Tabs/Subcategorytab";
import ShopTab from "../src/Tabs/Shoptab";
import Usertab from "./Tabs/Usertab";
import Protected from "./Components/Protected";
import Login1 from "./loginForm/Login1";
import Admin from "./Components/Admin";
import Register from "./loginForm/Register";

function App() {
  return (
    <div>
      <Navbars />
      <Sidebar1>
        <Routes>
          <Route path="/" element={<Protected Component={Admin} />} />
          {/* <Route path="/" element={<Protected Component={Dashboard} />} /> */}
          <Route
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          />
          <Route path="/login" element={<Login1 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopadd" element={<Protected Component={Shopadd} />} />
          <Route
            path="/categoryadd"
            element={<Protected Component={Categoryadd} />}
          />
          <Route
            path="/subcategoryadd"
            element={<Protected Component={Subcategoryadd} />}
          />
          <Route
            path="/offeradd"
            element={<Protected Component={Offeradd} />}
          />
          <Route
            path="/useradd"
            element={<Protected Component={UserManagement} />}
          />
          <Route
            path="/offertab"
            element={<Protected Component={Offertab} />}
          />
          <Route
            path="/categorytab"
            element={<Protected Component={Productcategorytab} />}
          />
          <Route
            path="/subcategorytab"
            element={<Protected Component={Subcategorytab} />}
          />
          <Route path="/shoptab" element={<Protected Component={ShopTab} />} />
          <Route path="/usertab" element={<Protected Component={Usertab} />} />
        </Routes>
      </Sidebar1>
    </div>
  );
}

export default App;
