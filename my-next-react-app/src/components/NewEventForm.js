import "./NewEventForm.css";
import React, { useState } from "react";

export default function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // const handleChange = e => {
  //   setTitle(e.target.value);
  // };
  return (
    <form className="new-event-form">
      <lable>
        <span>Event Title:</span>
        <input type="text" onChange={e => setTitle(e.target.value)}></input>
      </lable>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={e => setDate(e.target.value)}></input>
      </label>
      <button>Submite</button>
      <p>
        title - {title}, date - {date}
      </p>
    </form>
  );
}
