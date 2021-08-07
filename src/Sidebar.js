import React from 'react'
import './Sidebar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__logo">

               <div className="sidebar__hid">
                   <MenuIcon className="sidebar__icon menu" />
                   <p>Lorem</p>
                   <ShoppingCartIcon  className="sidebar__icon cart"/>
                </div> 
                <p className="sidebar__ip">Ipsum</p>
            </div>
            <div className="sidebar__categories">
                <div className="sidebar__object overline">About</div>
                <div className="sidebar__object">Services</div>
                <div className="sidebar__object">Cuisine</div>
                <div className="sidebar__object">Gallery</div>
                <div className="sidebar__object">Contact</div>
                <div className="sidebar__object">Book</div>
            </div>
            <div className="sidebar__button">
                <button className="sidebar__btn">Cart</button>
            </div>
        </div>
    )
}

export default Sidebar
