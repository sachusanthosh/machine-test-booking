import { useState } from "react";
import axios from "axios";

const BookingForm = ({ onBookingSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Car Wash");
  const [date, setDate] = useState("");

  // posting bookings to db
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://machine-test-booking-server.onrender.com/bookings", {
        name,
        email,
        service,
        date,
      });
      if (response.status === 201) {
        setName("");
        setEmail("");
        setService("Car Wash");
        setDate("");
        alert("Booking Successful");
        onBookingSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="Car Wash">Car Wash</option>
        <option value="AC Repair">AC Repair</option>
      </select>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Book
      </button>
    </form>
  );
};

export default BookingForm;
