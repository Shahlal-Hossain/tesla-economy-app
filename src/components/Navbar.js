import React, { useState } from 'react';
import styled from 'styled-components';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [openMenu, setOpenMenu] =useState(false)


    return (
        <Nevigation>
            <Link to="/">
                <img src="/images/logo.svg" alt="" />
            </Link>
        
            <Menu>
                <Link to="/modelS"> Model S</Link>
                <Link to="/model3"> Model 3</Link>
                <Link to="/modelX"> Model X</Link>
                <Link to="/modelY"> Model Y</Link>
                <Link to="/solarRoof"> Solar Roof</Link>
                <Link to="/solarPanels"> Solar Panels</Link>
            </Menu>
            <RightMenu>
                <a href="/shop"> Shop</a>
                <a href="/account"> Account</a>
                <li onClick={() => setOpenMenu(true)} > Menu</li>

            </RightMenu>
            <Submenu showMenu={openMenu}>
                <Closemenu   onClick={() => setOpenMenu(false)} >  </Closemenu>
                <li><a href="/"> Existing Inventory</a></li>
                <li><a href="/"> Used Inventory </a></li>
                <li><a href="/"> Trade-In </a></li>
                <li><a href="/"> Test Drive</a></li>
                <li><a href="/"> Cybertruck </a></li>
                <li><a href="/"> Roadster</a></li>
                <li><a href="/"> Semi</a></li>
                <li><a href="/"> Charging </a></li>
                <li><a href="/"> Powerwall</a></li>
                <li><a href="/"> Commercial Energy</a></li>
                <li><a href="/"> Utilities</a></li>
                <li><a href="/"> Find Us</a></li>
                <li><a href="/"> Support</a></li>
                <li><a href="/"> Investor Relations</a></li>
            </Submenu>
        </Nevigation>
    );
};

export default Navbar;


const Nevigation =styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    padding: 0px 50px;
    top: 0;
    left: 0;
    right: 0;
`
const Menu =styled.div`
    display: flex;
    align-item: center
    justfy-content: space-between;
    a{
        text-decoration: none;
        font-weight: bold;
        padding: 3px 15px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #330000;
      };
      a:hover{
        border-radius: 15px;
        background-color: #d9d9d9;
      };
`
const RightMenu =styled.div`
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        font-weight: bold;
        padding: 3px 15px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #330000;
    };
    li{
        list-style: none;
        font-weight: bold;
        padding: 3px 15px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #330000;
        cursor: pointer;
    };
    li:hover{
        border-radius: 15px;
        background: rgba(222, 194, 157,0.4);
    }
    a:hover{
        border-radius: 15px;
        background-color: #d9d9d9;
      };  
`
const Submenu =styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #dee3e7;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    li{
        padding: 12px 0;
        a{
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            flex-wrap: nowrap;
            text-transform: uppercase;
            color: #330000;
            
        };
        a:hover{
            background: rgba(222, 194, 157,0.2);
            border-radius: 20px;
            height: 50px;
            width: 250px;
            margin: 3px;
            padding: 8px 25px;
            
        };
    };
    transform:${props => props.showMenu ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease-in;

`
const Closemenu =styled(CancelOutlinedIcon)`
cursor: pointer;
`