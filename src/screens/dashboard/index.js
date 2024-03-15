import React from "react";
import { useState } from 'react';
import './dashboard.css';
import photo from '../../assets/imgs/user_2.png';
import logo from '../../assets/imgs/logo.png';
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContent from "../../components/cards";
import FormEventCreate from "../../components/formEventCreate";

function Dashboard() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    return (
        <div className="container-dashboard">
            <header>
                <div className="title-app">
                    <div className="logo-container">
                        <img src={logo} alt="logo-photo" className="logo-photo"/>
                        <h1>Vacation Plan</h1>
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
                <div className="container-content">
                    <div className="btn-container-create">
                        <FormEventCreate />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;