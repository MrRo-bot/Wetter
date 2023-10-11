import { useEffect, useState } from "react";
import useCurrentLocation from "./useCurrentLocation";
import { aqiKey } from "../utils/constants";

const useApiCall = () => {
  const location = useCurrentLocation();
  const [data, setData] = useState();

  useEffect(() => {
    const apiUrls = [
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m,windgusts_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timeformat=unixtime&timezone=auto&forecast_days=16&models=best_match`,
      `https://api.airvisual.com/v2/nearest_city?lat=${location.latitude}&lon=${location.longitude}&key=${aqiKey}`,
    ];
    let controller = new AbortController();
    let signal = controller.signal;

    if (location.latitude > 0 && location.longitude > 0) {
      getApiData(apiUrls, setData, signal);
    }

    return () => {
      controller.abort();
    };
  }, [location.latitude, location.longitude]);

  return [data, location];
};

const getApiData = async (apiUrls, setData, signal) => {
  try {
    const [weather, aqi] = await Promise.all(
      apiUrls.map(async (url) => {
        let resp = await fetch(url, { signal });

        if (!resp.ok) {
          throw new Error("Error in API CALL");
        }

        return resp.json();
      })
    );
    setData({ weather, aqi });
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export default useApiCall;
