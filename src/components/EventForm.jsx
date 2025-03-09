// src/components/EventForm.js
import React, { useState, useEffect } from "react";

const EventForm = ({ onAddEvent, onSaveEvent, editedEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  // If there's an edited event, pre-fill the form
  useEffect(() => {
    if (editedEvent) {
      setTitle(editedEvent.title);
      setDate(editedEvent.date);
      setCategory(editedEvent.category);
      setLocation(editedEvent.location);
      setDescription(editedEvent.description);
    }
  }, [editedEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, date, category, location, description };
    if (editedEvent) {
      onSaveEvent({ ...editedEvent, ...newEvent }); // Save the updated event
    } else {
      onAddEvent(newEvent); // Add new event
    }
    // Clear the form
    setTitle("");
    setDate("");
    setCategory("");
    setLocation("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Event Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition"
      >
        {editedEvent ? "Save Changes" : "Add Event"}
      </button>
    </form>
  );
};

export default EventForm;
