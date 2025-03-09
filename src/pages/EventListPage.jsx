import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const EventListingPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Community Gathering",
      date: "2025-03-12",
      location: "Church Hall",
      description: "A community gathering event.",
      category: "Social",
    },
    {
      id: 2,
      title: "Charity Drive",
      date: "2025-03-15",
      location: "Downtown Park",
      description: "A charity event to support the homeless.",
      category: "Charity",
    },
  ]);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [editedEvent, setEditedEvent] = useState(null);

  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, id: events.length + 1 }]);
  };

  const handleEditEvent = (event) => {
    setEditedEvent(event);
  };

  const handleSaveEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setEditedEvent(null); // Close the edit form
  };

  const filteredEvents = categoryFilter
    ? events.filter((event) => event.category === categoryFilter)
    : events;

  return (
    <div className="p-6">
      <EventForm
        onAddEvent={handleAddEvent}
        onSaveEvent={handleSaveEvent}
        editedEvent={editedEvent}
      />
      <div className="my-4">
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>
      <EventList events={filteredEvents} onEditEvent={handleEditEvent} />
    </div>
  );
};

export default EventListingPage;
