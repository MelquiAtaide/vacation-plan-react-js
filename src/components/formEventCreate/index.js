import React, { useState } from "react";
import "./formEventCreate.css";
import { Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function FormEventCreate() {

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const [participant, setParticipant] = useState("");
  const [participantError, setParticipantError] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/event", {
        title,
        description,
        date,
        location,
        participant,
      });
      window.location.reload();
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        if (data.errors) {
          setError("Errors occurred in the form.");
          if (data.errors.title) {
            setTitleError(data.errors.title[0]);
          }
          if (data.errors.description) {
            setDescriptionError(data.errors.description[0]);
          }
          if (data.errors.date) {
            setDateError(data.errors.date[0]);
          }
          if (data.errors.location) {
            setLocationError(data.errors.location[0]);
          }
          if (data.errors.participant) {
            setParticipantError(data.errors.participant[0]);
          }
        }
      } else {
        setError("An error occurred while processing the requisition!!");
      }
    }
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            isInvalid={!!titleError}
          />
          <Form.Control.Feedback type="invalid">
            {titleError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            isInvalid={!!descriptionError}
          />
          <Form.Control.Feedback type="invalid">
            {descriptionError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            isInvalid={!!dateError}
          />
          <Form.Control.Feedback type="invalid">
            {dateError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            isInvalid={!!locationError}
          />
          <Form.Control.Feedback type="invalid">
            {locationError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="participant">
          <Form.Label>Participant</Form.Label>
          <Form.Control
            type="text"
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
            required
            isInvalid={!!participantError}
          />
          <Form.Control.Feedback type="invalid">
            {participantError}
          </Form.Control.Feedback>
        </Form.Group>
        <button type="submit" className="btn-primary-save" onClick={handleSubmit}>
          Save
        </button>
      </Form>
    </>
  );
}

export default FormEventCreate;
