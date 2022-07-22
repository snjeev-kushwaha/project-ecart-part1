import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
import Shopadd from '../Shop/shopadd';
import Shopview from '../Shop/shopview';
import Categoryadd from '../Product/Category/categoryadd';
import Categoryview from '../Product/Category/categoryview';
import Subcategoryadd from '../Product/Subcategory/subcategoryadd';
import Subcategoryview from '../Product/Subcategory/subcategoryview';
import Offeradd from '../Offer/Offersadd';
import Offerview from '../Offer/Offerview';
import UserManagement from '../Usermanagement/User';
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
       <ul>
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
       </ul>
       <li>Offer</li>
       <ul>
        <li><Link to="/offeradd">offeradd</Link></li>
        <li><Link to="/offerview">offerview</Link></li>
       </ul>
       <li>Usermanagement</li>
       <ul>
        <li><Link to="/user">user</Link></li>
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
        <Route path="/user" element={<UserManagement />} />
      </Routes>
      </div>

      </div>
        </>
    )
}
export default Sidebar;