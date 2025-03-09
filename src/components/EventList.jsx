import React from "react";
import Event from "../components/Events";

const EventList = ({ events, onEditEvent }) => {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Event key={event.id} event={event} onEditEvent={onEditEvent} />
      ))}
    </div>
  );
};

export default EventList;
