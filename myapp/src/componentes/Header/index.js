import React,{useContext} from 'react';
import gatito from "../../images/logo.png";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header =()=>{
    return(
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={gatito} alt="logo" width="60" height="55"/>
                </div>
            </Link>
            <ul>
            </ul>
        </header>
    )
}