import React, { useEffect, useState } from "react";


const MapRoad = () => {
  // State to store current location
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get the current location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set a default location (e.g., Lagos coordinates)
          setCurrentLocation({ lat: 6.5244, lng: 3.3792 }); // Example: Lagos, Nigeria
        }
      );
    }
  }, []);

  if (!currentLocation) {
    return <div>Loading...</div>; // Show loading while fetching location
  }

  // Google Maps URL with custom marker for current location
  const iframeSrc = `https://maps.google.com/maps?width=100%&height=263&hl=en&q=${currentLocation.lat},${currentLocation.lng}&t=&z=14&ie=UTF8&iwloc=B&output=embed&markers=icon:http://maps.google.com/mapfiles/ms/icons/green-dot.png%7C${currentLocation.lat},${currentLocation.lng}`;

  return (
    <div>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="263"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={iframeSrc}
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </div>
  );
};

export default MapRoad;
