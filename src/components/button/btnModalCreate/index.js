import React from "react";
import './btnModalCreate.css';
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function BtnModalCreate() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [participant, setParticipant] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os valores do formulário, como enviar para um servidor
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Date:', date);
        console.log('Location:', location);
        console.log('Participant:', participant);
      };

    return (
        <>
            <button className="btn-primary-save" onClick={handleShow}>Create</button>

            <Modal className="modal-create" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="title">Title</Form.Label>
                            <Form.Control
                                type="text" 
                                id="title"
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required
                                placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="description">Description</Form.Label>
                            <Form.Control 
                                as="textarea" rows={3}
                                id="description"
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                required
                                placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="date">Date</Form.Label>
                            <Form.Control 
                                type="date"
                                id="date"
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                required
                                placeholder="Enter date" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="location">Location</Form.Label>
                            <Form.Control
                                type="text" 
                                id="location"
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                                required
                                placeholder="Enter location" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="participant">Participant</Form.Label>
                            <Form.Control
                                type="text" 
                                id="participant"
                                value={participant} 
                                onChange={(e) => setParticipant(e.target.value)} 
                                required
                                placeholder="Enter participant" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <div className="btn-save-container">
                        <button className="btn-primary-save" onClick={handleClose}>
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BtnModalCreate;