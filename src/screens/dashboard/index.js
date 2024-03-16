import React from "react";
import { useState, useRef } from 'react';
// Style
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Images
import photo from '../../assets/imgs/user_2.png';
import logo from '../../assets/imgs/logo.png';
// Components
import { Alert, Card } from "react-bootstrap";
import CardContent from "../../components/cards";
import FormEventCreate from "../../components/formEventCreate";
import FormBarMobile from "../../components/formBarMobile";
// Icons
import { IoMenu } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
// Libs
import { useReactToPrint } from "react-to-print";

function Dashboard() {
    const [formIsVisible, setFormIsVisible] = useState(false);
    const toggleMenu = () => {
        setFormIsVisible(true);
    };

    return (
        <>
            <FormBarMobile 
                formIsVisible={formIsVisible}
                setFormIsVisible={setFormIsVisible}
            />
            <div className="container-dashboard">
                <header>
                    <div className="title-app">
                        <div className="logo-container">
                            <img src={logo} alt="logo-photo" className="logo-photo"/>
                            <h1>Vacation Plan</h1>
                        </div>
                        <div className="icons-bar-container">
                            <IoMenu className="icon-menu-form" size={45} onClick={toggleMenu}/>
                        </div>
                    </div>
                    <div className="user-name">
                        <p>Melquisedeque</p>
                        <img src={photo} alt="user-photo" className="user-photo"/>
                    </div>
                </header>
                <div className="container-main">
                    <div className="container-card">
                        <CardContent />
                    </div>
                    <div className="container-form-create">
                        <h5>Create New Event</h5>
                        <div className="btn-container-create">
                            <FormEventCreate />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;