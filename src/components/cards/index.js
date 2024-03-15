import React from "react";
import { useState, useEffect } from 'react';
// Style
import './cardContent.css';
// Libraries
import axios from 'axios';
import { format } from 'date-fns';
// icons
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BtnModalEdit from "../button/btnModalEdit";
import BtnEventDelete from "../button/btnEventDelete";

function CardContent() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/event");
            setEvents(response.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };
    return (
        <div className="cards-container">
            {events.map(event => (
                <div className="card-event">
                    <div className="header-card">
                        <div className="sub-header-card">
                            <BtnModalEdit eventId={event.id} />
                            <BtnEventDelete eventId={event.id} />
                        </div>
                    </div>
                    <div className="body-card">
                        <h5>{event.title}</h5>
                        <p>{event.description}</p>
                    </div>
                    <div className="footer-card">
                        <div className="footer-card-left">
                            <p><FaCalendarAlt size={13} /> {format(new Date(event.date), 'dd/MM/yyyy')}</p>
                            <p><FaMapMarkerAlt size={13} /> {event.location}</p>
                        </div>
                        <div className="footer-card-right">
                            <p><b>Participants:</b> {event.participant}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardContent;