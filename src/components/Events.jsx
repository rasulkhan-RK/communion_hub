const Event = ({ event, onEditEvent }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-gray-500">
        {event.date} | {event.location}
      </p>
      <p className="mt-2">{event.description}</p>
      <button
        className="mt-4 text-blue-600 hover:text-blue-800"
        onClick={() => onEditEvent(event)}
      >
        Edit Event
      </button>
    </div>
  );
};

export default Event;
