import { useState, useEffect } from "react";
import axios from "axios";

const BookingListing = ({ refresh }) => {
  const [bookings, setBookings] = useState([]);

//   fetching the bookings from db
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setBookings(res.data));
  }, [refresh]); 
  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map((booking, index) => (
        <ul key={index}>
          <li>
            {booking.name}, {booking.email}, {booking.service}, {booking.date}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BookingListing;