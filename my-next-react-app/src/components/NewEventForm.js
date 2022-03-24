import "./NewEventForm.css";
import React, { useState, useRef } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  const handleSubmit = e => {
    e.preventDefault();

    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);

    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        ></input>
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={e => setDate(e.target.value)}
          value={date}
        ></input>
      </label>
      <label>
        <span>Event location: </span>
        <select onChange={e => setLocation(e.target.value)}>
          <option value="manchester">Manchecter</option>
          <option value="iondon">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submite</button>
    </form>
  );
}
