import { useEffect, useState } from "react";
const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getPos = (position) => {
    setLocation((prev) => ({
      ...prev,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    }));
  };

  const posFail = (err) => {
    console.log(`Unable to fetch location ERROR:${err.code}=${err.message}`);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(getPos, posFail, {
        enableAccuracy: true,
      });
    } else {
      console.log("Browser doesn't support Geolocation API");
    }
  }, []);

  return location;
};

export default useCurrentLocation;
