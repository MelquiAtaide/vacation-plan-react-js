import React from "react";
import { useState } from 'react';
import './formBarMobile.css';
import photo from '../../assets/imgs/user_2.png';
import logo from '../../assets/imgs/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoClose } from "react-icons/io5";
import FormEventCreate from "../formEventCreate";

function FormBarMobile({ formIsVisible, setFormIsVisible}) {
    const toggleMenuMobile = () => {
        setFormIsVisible(false);
    }
    return (
        <div className="container-mobile" style={{ display: formIsVisible ? 'block' : 'none' }} >
            <div className="container-mobile-content">
                <div className="container-icon-close" onClick={toggleMenuMobile}>
                    <IoClose size={45}/>
                </div>
                <div className="container-user-name-mobile">
                    <p>Melquisedeque</p>
                    <img src={photo} alt="user-photo" className="user-photo"/>
                </div>
                <div className="container-form-mobile">
                    <FormEventCreate />
                </div>
            </div>
        </div>
    );
}

export default FormBarMobile;