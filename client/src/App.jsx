import { useState } from "react";
import BookingForm from "./components/BookinfForm";
import BookingListing from "./components/BookingListing";

function App() {
  const [refresh, setRefresh] = useState(false);

  // for showing new booking simultaneusly
  const handleBookingSuccess = () => {
    setRefresh(!refresh); 
  };

  return (
    <div>
      <h1>Service Booking</h1>
      <BookingForm onBookingSuccess={handleBookingSuccess} />
      <BookingListing refresh={refresh} />
    </div>
  );
}

export default App;