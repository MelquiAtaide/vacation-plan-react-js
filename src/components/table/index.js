import React from "react";
import { useState, useEffect } from 'react';
// Style
import './tableContent.css';
// Libraries
import axios from 'axios';
import { format } from 'date-fns';

import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function TableContent() {
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
        <div className="home">
            <Table className="table table-borderless" striped bordered hover >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Participant</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr>
                            <td>{event.title}</td>
                            <td>{event.description}</td>
                            <td>{format(new Date(event.date), 'dd/MM/yyyy')}</td>
                            <td>{event.location}</td>
                            <td>{event.participant}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TableContent;