import { useState, useEffect } from "react";
import axios from "axios";

const BookingListing = ({ refresh }) => {
  const [bookings, setBookings] = useState([]);

//   fetching the bookings from db
  useEffect(() => {
    axios
      .get("https://machine-test-booking-server.onrender.com/bookings")
      .then((res) => setBookings(res.data));
  }, [refresh]); 
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      {bookings.map((booking, index) => (
        <ul key={index} className="mb-2">
          <li className="p-2 border-b border-gray-200">
            <span className="font-semibold">{booking.name}</span>, {booking.email}, {booking.service}, {booking.date}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BookingListing;
