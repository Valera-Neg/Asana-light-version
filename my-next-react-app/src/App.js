import "./App.css";

import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);

  const handleClick = id => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => {
        return id !== event.id;
      });
    });

    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const subtitle = "All the latest events in mario Kingdom";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index + 1} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))}

      {/* <Modal>
        <h2>10% Off Cupone Code!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Sit ea amet kasd vero vero sit elitr. Amet no at et aliquyam dolore
            et, et sit erat invidunt stet. Sed duo clita sanctus et accusam ea.
            Amet takimata tempor est ea magna duo ipsum et diam, est duo erat
            nonumy nonumy dolor takimata amet, duo amet kasd sit takimata ea,
            eirmod clita dolor elitr tempor consetetur eirmod amet. Sadipscing.
          </p>
        </Modal>
      )}
      <br />
      <button onClick={handleShowModal}>Show Modal</button>
    </div>
  );
}

export default App;
