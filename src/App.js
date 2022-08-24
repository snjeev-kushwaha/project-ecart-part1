import "./App.css";
import Sidebar1 from "./Sidebar/Sidebar1";
import Navbar from "../src/Components/Navbar";
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
import Login from "./loginForm/Login";
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar1>
        <Routes>
          <Route path="/shopadd" element={<Shopadd />} />
          <Route path="/categoryadd" element={<Categoryadd />} />
          <Route path="/subcategoryadd" element={<Subcategoryadd />} />
          <Route path="/offeradd" element={<Offeradd />} />
          <Route path="/useradd" element={<UserManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/offertab" element={<Offertab />} />
          <Route path="/categorytab" element={<Productcategorytab />} />
          <Route path="/subcategorytab" element={<Subcategorytab />} />
          <Route path="/shoptab" element={<ShopTab />} />
          <Route path="/usertab" element={<Usertab />} />
        </Routes>
      </Sidebar1>
    </div>
  );
}

export default App;
