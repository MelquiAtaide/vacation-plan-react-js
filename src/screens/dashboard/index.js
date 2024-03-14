import React from "react";
import './dashboard.css';
import photo from '../../assets/imgs/user_2.png';
import logo from '../../assets/imgs/logo.png';
import TableContent from "../../components/table/inde";
import BtnPrimarySave from "../../components/button/btnPrimarySave";

function Dashboard() {
    return (
        <div className="container-dashboard">
            <header>
                <div className="title-app">
                    <img src={logo} alt="logo-photo" className="logo-photo"/>
                    <h1>Vacation Plan</h1>
                </div>
                <div className="user-name">
                    <p>Melquisedeque</p>
                    <img src={photo} alt="user-photo" className="user-photo"/>
                </div>
            </header>
            <div className="container-main">
                <div className="container-table">
                    <TableContent />
                </div>
                <div className="container-content">
                    <div className="btn-container-create">
                        <BtnPrimarySave />
                    </div>
                    <div className="content-description">
                        <p>Description</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;