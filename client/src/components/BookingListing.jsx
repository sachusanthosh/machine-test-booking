import { useState, useEffect } from "react";
import axios from "axios";

const BookingListing = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map((booking, index) => (
        <div>
          <ul>
            <li key={index}>
              {booking.name}, {booking.email}, {booking.service}, {booking.date}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookingListing;
