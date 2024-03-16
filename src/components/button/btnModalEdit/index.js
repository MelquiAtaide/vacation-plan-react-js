import React, { useState, useEffect } from "react";
import "./btnModalEdit.css";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { FaEdit } from "react-icons/fa";

function BtnModalEdit({ eventId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEventData();
  }, [eventId]);

  const fetchEventData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/event/${eventId}`);
      const eventData = response.data;

      setTitle(eventData.title);
      setDescription(eventData.description);
      setDate(eventData.date);
      setLocation(eventData.location);
      setParticipant(eventData.participant);
    } catch (error) {
      setError("An error occurred while loading the event data.");
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/event/edit/${eventId}`, {
        title,
        description,
        date,
        location,
        participant,
      });
      window.location.reload();
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred while processing the requisition.!");
      } else {
        setError("An error occurred while processing the requisition.");
      }
    }
  };

  return (
    <>
      <button className="btn-primary-edit" onClick={handleShow}>
        <FaEdit size={25} className="btn-primary-edit" onClick={handleShow} />
      </button>

      <Modal className="modal-edit" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="participant">
              <Form.Label>Participant</Form.Label>
              <Form.Control
                type="text"
                value={participant}
                onChange={(e) => setParticipant(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <div className="btn-edit-container">
            <button type="submit" className="btn-primary-save" onClick={handleEdit}>
              Save Changes
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BtnModalEdit;
