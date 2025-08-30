import React from 'react';
import "./navbar.css";


function NavBar() {
    try {
        return (
           <>
                <nav className='navbar'>
                    <img src="../../public/logoImg.png" alt="logo" className="logo" />
                    <div className="details">
                        <a href="" className='navdetailsitems' >MENU</a>
                        <a href="" className='navdetailsitems'>LOCATION</a>
                        <a href="" className='navdetailsitems'>ABOUT</a>
                        <a href="" className='navdetailsitems'>CONTACT</a>
                        
                    </div>
                    <button className='loginBtn'>Login</button>
                </nav>
           </>
        )
    } catch (error) {
        throw new Error(error)
    }


}

export default NavBar