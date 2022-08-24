import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Shopadd from '../Shop/shopadd';
import Shopview from '../Shop/shopview';
import Categoryadd from '../Product/Category/categoryadd';
import Categoryview from '../Product/Category/categoryview';
import Subcategoryadd from '../Product/Subcategory/subcategoryadd';
import Subcategoryview from '../Product/Subcategory/subcategoryview';
import Offeradd from '../Offer/Offersadd';
import Offerview from '../Offer/Offerview';
import UserManagement from '../../src/Usermanagement/UserAdd';
import UserView from '../../src/Usermanagement/UserView';
// import Navbar from '../Components/Navbar';
import Logout from '../Components/Logout';
import Dashboard from '../Components/Dashboard';
function Sidebar(){
    return(
        <>
        <div className='side'>
        <div className="sidebar">
       <li>Shop</li>
       <ul>
        <li><Link to="/shopadd">Shopadd</Link></li>
        <li><Link to="/shopview">Shopview</Link></li>
       </ul>
       <li>Product</li>
       
        <li>category</li>
        <ul>
            <li><Link to="/categoryadd">categoryadd</Link></li>
            <li><Link to="/categoryview">categoryview</Link></li>
        </ul>
        <li>subcategory</li>
        <ul>
            <li><Link to="/subcategoryadd">subcategoryadd</Link></li>
            <li><Link to="/subcategoryview">subcategoryview</Link></li>
        </ul>
   
       <li>Offer</li>
       <ul>
        <li><Link to="/offeradd">offeradd</Link></li>
        <li><Link to="/offerview">offerview</Link></li>
       </ul>
       <li>Usermanagement</li>
       <ul>
        <li><Link to="/useradd">UserAdd</Link></li>
        <li><Link to="userview">UsrView</Link></li>
       </ul>
       <li>Logout</li>
       <ul>
        <li><Link to="logout">Logout</Link></li>
       </ul>
       </div>
       <div className="routes">
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

      </div>
        </>
    )
}
export default Sidebar;