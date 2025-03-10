import { useState } from "react";
import BookingForm from "./components/BookingForm";
import BookingListing from "./components/BookingListing";

function App() {
  const [refresh, setRefresh] = useState(false);

  // for showing new booking simultaneusly
  const handleBookingSuccess = () => {
    setRefresh(!refresh); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Service Booking</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <BookingForm onBookingSuccess={handleBookingSuccess} />
      </div>
      <div className="max-w-2xl mx-auto mt-6">
        <BookingListing refresh={refresh} />
      </div>
    </div>
  );
}

export default App;