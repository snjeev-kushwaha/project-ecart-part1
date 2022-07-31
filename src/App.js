import './App.css';
import Sidebar1 from './Sidebar/Sidebar1';
import Navbar from '../src/Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Shopadd from '../src/Shop/shopadd';
import Shopview from '../src/Shop/shopview';
import Categoryadd from '../src/Product/Category/categoryadd';
import Categoryview from '../src/Product/Category/categoryview';
import Subcategoryadd from '../src/Product/Subcategory/subcategoryadd';
import Subcategoryview from '../src/Product/Subcategory/subcategoryview';
import Offeradd from '../src/Offer/Offersadd';
import Offerview from '../src/Offer/Offerview';
import UserManagement from '../src/Usermanagement/UserAdd';
import UserView from '../src/Usermanagement/UserView';
import Logout from '../src/Components/Logout';
import Dashboard from '../src/Components/Dashboard';
function App() {
  return (
    <div >
  
         <Navbar />
       
        <Sidebar1 />
      <Routes>
        <Route path="/shopadd" element={<Shopadd />} />
        <Route path="/shopview" element={<Shopview />} />
        <Route path="/categoryadd" element={<Categoryadd />} />
        <Route path="/categoryview" element={<Categoryview />} />
        <Route path="/subcategoryadd" element={<Subcategoryadd />} />
        <Route path="/subcategoryview" element={<Subcategoryview />} />
        <Route path="/offeradd" element={<Offeradd />} />
        <Route path="/offerview" element={<Offerview />} />
        <Route path="/useradd" element={<UserManagement />} />
        <Route path="/userview" element={<UserView/>} />
        <Route path='/logout' element={<Logout />} />
        <Route path='dashboard' element = {<Dashboard />} />
      </Routes>
  
      </div>
  );
}

export default App;
