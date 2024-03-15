import React, { useState, useEffect } from "react";
import "./btnEventDelete.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { MdDelete } from "react-icons/md";

function BtnEventDelete({ eventId }) {
    const handleDelete = async () => {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/event/delete/${eventId}`);
          window.location.reload();
        } catch (error) {
          console.error("Error deleting event:", error);
        }
      };
    return (
        <>
            <button className="btn-delete" onClick={handleDelete}>
                <MdDelete size={25} />
            </button>
        </>
    );
}

export default BtnEventDelete;
