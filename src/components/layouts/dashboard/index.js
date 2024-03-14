import React from "react";
import './dashboard.css';
import Home from "../../../screens/home/inde";

function Dashboard() {
    return (
        <div className="container-dashboard">
            <header>
                <div className="items">
                    <h1>Vacation Plan</h1>
                </div>
                <div className="user-name">
                    <p>Melquisedeque</p>
                </div>
            </header>
            <div className="container">
                <div className="container-table">
                    <Home/>
                </div>
                <div className="container-content">

                </div>
            </div>
        </div>
    );
}

export default Dashboard;