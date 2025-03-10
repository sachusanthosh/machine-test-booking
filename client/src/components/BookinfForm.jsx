import { useState } from "react";
import axios from "axios";

const BookinfForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Car Wash");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("http://localhost:5000/bookings", {
        name,
        email,
        service,
        date,
      });
      if (responce.status === 201) {
        setName("");
        setEmail("");
        setService("Car Wash");
        setDate("");
        alert("Booking Successfull");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="enter your name"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="enter your email"
        required
      />
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="">Car Wash</option>
        <option value="">AC Repair</option>
      </select>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        required
      />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookinfForm;
