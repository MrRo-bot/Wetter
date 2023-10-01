import { useEffect, useState } from "react";
import useApiCall from "./useApiCall";
import { unsplashKey } from "../utils/constants";

import {
  aqiDesc,
  unixConv,
  lenAndSpdConv,
  valRound,
  degConv,
  weatherCodeConv,
  weatherIconFind,
  closest,
} from "../utils/math";

const useProcess = () => {
  const [apiJson, location] = useApiCall();
  const [finalData, setFinalData] = useState();

  useEffect(() => {
    if (apiJson) {
      let currIndex = apiJson.weather.hourly.time.indexOf(
        closest(
          apiJson.weather.current_weather.time,
          apiJson.weather.hourly.time
        )
      );

      let weatherType = weatherCodeConv(apiJson.weather.daily.weathercode[0]);

      let aqiData = apiJson.aqi.data.current.pollution.aqius;

      let listOfHourlyData = [];

      for (let i = currIndex; i <= currIndex + 47; i++) {
        listOfHourlyData.push({
          id: i,
          currentTemp: valRound(apiJson.weather.hourly.temperature_2m[i]) + "°",
          precipitation:
            apiJson.weather.hourly.precipitation_probability[i] +
            apiJson.weather.hourly_units.precipitation_probability,
          code: apiJson.weather.hourly.weathercode[i],
          weatherIcon: weatherIconFind(apiJson.weather.hourly.weathercode[i]),
          weatherCode: apiJson.weather.hourly.weathercode[i],
          weatherMain: weatherCodeConv(apiJson.weather.hourly.weathercode[i]),
          windSpeed:
            valRound(apiJson.weather.hourly.windspeed_10m[i]) +
            " " +
            apiJson.weather.hourly_units.windspeed_10m,
          wind: degConv(apiJson.weather.hourly.winddirection_10m[i]),
          windDirection: apiJson.weather.hourly.winddirection_10m[i],
          hourStamp: unixConv.timeStamp(apiJson.weather.hourly.time[i]).hour2,

          //extra info in click popup
          feels_like: `${valRound(
            apiJson.weather.hourly.temperature_2m[i]
          )}° - Feels Like: ${valRound(
            apiJson.weather.hourly.apparent_temperature[i]
          )}°`,
          gust:
            valRound(apiJson.weather.hourly.windgusts_10m[i]) +
            apiJson.weather.hourly_units.windgusts_10m,
          clouds:
            apiJson.weather.hourly.cloudcover[i] +
            apiJson.weather.hourly_units.cloudcover,
          humidity:
            apiJson.weather.hourly.relativehumidity_2m[i] +
            apiJson.weather.hourly_units.relativehumidity_2m,
          dewPoint: valRound(apiJson.weather.hourly.dewpoint_2m[i]) + "°",
          isDay: apiJson.weather.hourly.is_day[i],
        });
      }

      let listOfDailyData = [];

      for (let i = 0; i <= 15; i++) {
        listOfDailyData.push({
          id: i,
          sunrise: unixConv.timeStamp(apiJson.weather.daily.sunrise[i])
            .clockTime,
          sunset: unixConv.timeStamp(apiJson.weather.daily.sunset[i]).clockTime,
          summary: `${weatherCodeConv(
            apiJson.weather.daily.weathercode[i]
          )}. Wind ${degConv(
            apiJson.weather.daily.winddirection_10m_dominant[i]
          ).toLowerCase()} at ${
            valRound(apiJson.weather.daily.windspeed_10m_max[i]) +
            " " +
            apiJson.weather.daily_units.windspeed_10m_max
          }${
            apiJson.weather.daily.precipitation_probability_max[i] === null ||
            apiJson.weather.daily.precipitation_probability_max[i] === 0
              ? ""
              : `. Chance of precipitation ${apiJson.weather.daily.precipitation_probability_max[i]}${apiJson.weather.daily_units.precipitation_probability_max}`
          }.${
            apiJson.weather.daily.precipitation_sum[i] > 0
              ? apiJson.weather.daily.precipitation_sum[i] +
                apiJson.weather.daily_units.precipitation_sum
              : ""
          }`,
          maxTemp: valRound(apiJson.weather.daily.temperature_2m_max[i]) + "°",
          minTemp: valRound(apiJson.weather.daily.temperature_2m_min[i]) + "°",
          precipitation:
            apiJson.weather.daily.precipitation_probability_max[i] === null
              ? "0%"
              : apiJson.weather.daily.precipitation_probability_max[i] +
                apiJson.weather.daily_units.precipitation_probability_max,
          code: apiJson.weather.daily.weathercode[i],
          weatherIcon: weatherIconFind(apiJson.weather.daily.weathercode[i]),
          weatherMain: weatherCodeConv(apiJson.weather.daily.weathercode[i]),
          windSpeed:
            valRound(apiJson.weather.daily.windspeed_10m_max[i]) +
            " " +
            apiJson.weather.daily_units.windspeed_10m_max,
          windDirection: apiJson.weather.daily.winddirection_10m_dominant[i],
          hourStamp: unixConv.timeStamp(apiJson.weather.daily.time[i]).hour2,

          dateStamp: `${
            unixConv.timeStamp(apiJson.weather.daily.time[i]).day
          }, ${unixConv.timeStamp(apiJson.weather.daily.time[i]).month} ${
            unixConv.timeStamp(apiJson.weather.daily.time[i]).date
          }`.toUpperCase(),
        });
      }

      let final = {
        BRIEF: {
          currentTemp:
            valRound(apiJson.weather.current_weather.temperature) +
            apiJson.weather.daily_units.temperature_2m_max,
          maxTemp: valRound(apiJson.weather.daily.temperature_2m_max[0]) + "°",
          minTemp: valRound(apiJson.weather.daily.temperature_2m_min[0]) + "°",
          dateStamp: `${unixConv
            .timeStamp(apiJson.weather.current_weather.time)
            .day.substring(0, 3)}, ${
            unixConv.timeStamp(apiJson.weather.current_weather.time).month
          } ${
            unixConv.timeStamp(apiJson.weather.current_weather.time).date
          }`.toUpperCase(),
          location: { lat: location.latitude, lon: location.longitude }, //for getting place/place img
          main: weatherCodeConv(apiJson.weather.daily.weathercode[0]),
          summary: `${
            apiJson.weather.current_weather.is_day ? "Today" : "Tonight"
          } - ${weatherCodeConv(
            apiJson.weather.daily.weathercode[0]
          )}. Wind ${degConv(
            apiJson.weather.daily.winddirection_10m_dominant[0]
          )} at ${
            valRound(apiJson.weather.daily.windspeed_10m_max[0]) +
            apiJson.weather.daily_units.windspeed_10m_max
          }. Chance of precipitation ${
            apiJson.weather.daily.precipitation_probability_max[0] +
            apiJson.weather.daily_units.precipitation_probability_max
          }. ${
            apiJson.weather.daily.precipitation_sum[0] +
            apiJson.weather.daily_units.precipitation_sum
          }.`,
        },
        DETAIL: {
          feels_like:
            valRound(apiJson.weather.hourly.apparent_temperature[currIndex]) +
            apiJson.weather.hourly_units.apparent_temperature,
          humidity:
            apiJson.weather.hourly.relativehumidity_2m[currIndex] +
            apiJson.weather.hourly_units.relativehumidity_2m,
          uvIndex:
            valRound(apiJson.weather.hourly.uv_index[currIndex]) +
            apiJson.weather.hourly_units.uv_index,
          visibility:
            lenAndSpdConv.km(apiJson.weather.hourly.visibility[currIndex]) +
            "km",
          dewPoint:
            valRound(apiJson.weather.hourly.dewpoint_2m[currIndex]) +
            apiJson.weather.hourly_units.dewpoint_2m,
          pressure: valRound(
            apiJson.weather.hourly.surface_pressure[currIndex]
          ),
        },
        HOURLY: listOfHourlyData,
        DAILY: listOfDailyData,
        AQI: {
          city: apiJson.aqi.data.city,
          index: aqiData,
          level: aqiDesc(aqiData).level,
          desc: aqiDesc(aqiData).desc,
          seekBar: aqiData <= 500 ? (aqiData / 5) * 0.985 : 98.5,
          color: aqiDesc(aqiData).color,
        },
        WIND: {
          windSpeed: valRound(apiJson.weather.current_weather.windspeed),
          unit: apiJson.weather.daily_units.windspeed_10m_max,
          windDirection: degConv(apiJson.weather.current_weather.winddirection),
        },
      };

      setFinalData(final);
      (async () => {
        if (weatherType) {
          try {
            let res = await fetch(
              `https://api.unsplash.com/search/photos?page=1&per_page=10&orientation=squarish&query=${weatherType}&client_id=${unsplashKey}`
            );
            if (!res.ok) {
              throw new Error("ERROR FETCHING IMAGE");
            } else {
              let imgData = await res.json();
              setFinalData((prev) => {
                let randomIndex = Math.floor(Math.random() * 10);
                return {
                  ...prev,
                  IMAGE: imgData.results[randomIndex].urls.regular,
                };
              });
            }
          } catch (error) {
            console.log(`${error.name}: ${error.message}`);
          }
        }
      })();
    }
  }, [apiJson]);

  return [finalData, location];
};
export default useProcess;
