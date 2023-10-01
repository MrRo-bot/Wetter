//DEGREES TO CARDINAL CONVERTER
export const degConv = (deg) => {
  while (deg < 0) deg += 360;
  while (deg >= 360) deg -= 360;
  let val = Math.round((deg - 11.25) / 22.5);
  let cardinal = [
    "North",
    "North-northeast",
    "North-east",
    "East-northeast",
    "East",
    "East-southeast",
    "South-east",
    "South-southeast",
    "South",
    "South-southwest",
    "South-west",
    "West-southwest",
    "West",
    "West-northwest",
    "North-west",
    "North-northwest",
  ];
  return cardinal[Math.abs(val)];
};

//Rounding figures
export const valRound = (value) => Math.round(value);

//KELVIN CONVERSION
export const tempConv = {
  c: (value) => Math.round(value - 273.15),
  f: (value) => Math.round((value * 9) / 5 - 459.67),
};

//METER DISTANCE AND SPEED CONVERSION
export const lenAndSpdConv = {
  mi: (value) => Math.round(value / 1609.344),
  km: (value) => Math.round(value / 1000),
  mph: (value) => Math.round(value * 2.237),
  kmh: (value) => Math.round(value * 3.6),
};

//PRECIPITATION SCALE TO PERCENTAGE
export const precConv = (value) => Math.round(value * 100);

//EPOCH TIME TO READABLE FORMAT
export const unixConv = {
  weekdays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  timeStamp: (value) => {
    const epoch = new Date(value * 1000);
    let year = epoch.getFullYear();
    let month = unixConv.months[epoch.getMonth()];
    let day = unixConv.weekdays[epoch.getDay()];
    let date = epoch.getDate();
    let hour = epoch.getHours();
    let hour2 = epoch.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    let clockTime = epoch.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return { year, month, day, date, hour, hour2, clockTime };
  },
};

//AQI DESCRIPTION
export const aqiDesc = (value) => {
  switch (true) {
    case value >= 0 && value <= 50:
      return {
        level: "Good",
        desc: "Air quality is satisfactory.",
        color: "green",
      };
    case value >= 51 && value <= 100:
      return {
        level: "Moderate",
        desc: "Air quality is acceptable.",
        color: "yellow",
      };
    case value >= 101 && value <= 150:
      return {
        level: "Sensitive",
        desc: "Unhealthy for sensitive people.",
        color: "orange",
      };
    case value >= 151 && value <= 200:
      return {
        level: "Unhealthy",
        desc: "Serious health effects for sensitive people.",
        color: "red",
      };
    case value >= 201 && value <= 300:
      return {
        level: "Very Unhealthy",
        desc: "Health alert: The risk of health effects is increased.",
        color: "purple",
      };
    case value > 300:
      return {
        level: "Hazardous",
        desc: "Health warning: everyone is more likely to be affected.",
        color: "red",
      };
    default:
      return "Data not found";
  }
};

//WEATHER INTERPRETATION CODES (OPEN METEO)
export const weatherCodeConv = (code) => {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Dense drizzle";
    case 56:
      return "Freezing light drizzle";
    case 57:
      return "Freezing dense drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy rain";
    case 66:
      return "Freezing light rain";
    case 67:
      return "Freezing heavy rain";
    case 71:
      return "Slight snow fall";
    case 73:
      return "Moderate snow fall";
    case 75:
      return "Heavy snow fall";
    case 77:
      return "Snow grains";
    case 80:
      return "Slight rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Violent rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Slight thunderstorm with hail";
    case 99:
      return "Heavy thunderstorm with hail";
    default:
      return "Data not found";
  }
};

//WEATHER ICON FINDER
export const weatherIconFind = (code) => {
  switch (code) {
    case 0:
      return [1, 2];
    case 1:
      return 3;
    case 2:
      return [4, 5];
    case 3:
      return 9;
    case 45:
    case 48:
      return 7;
    case 51:
    case 53:
    case 55:
      return 8;
    case 56:
    case 57:
      return 15;
    case 61:
      return 6;
    case 63:
      return 10;
    case 65:
      return 11;
    case 66:
    case 67:
      return 15;
    case 71:
    case 73:
    case 75:
    case 77:
      return 16;
    case 80:
      return 10;
    case 81:
      return 11;
    case 82:
      return 12;
    case 85:
    case 86:
      return 15;
    case 95:
      return 12;
    case 96:
      return 13;
    case 99:
      return 14;
    default:
      return "Data not found";
  }
};

//FINDING CLOSEST ARRAY INDEX TO CURRENT TIME
export const closest = (needle, haystack) => {
  return haystack.reduce((a, b) => {
    let aDiff = Math.abs(a - needle);
    let bDiff = Math.abs(b - needle);

    if (aDiff == bDiff) {
      return a > b ? a : b;
    } else {
      return bDiff < aDiff ? b : a;
    }
  });
};

//WINDMILL ROTATION SPEED
export const wingSpeed = (value) => {
  switch (true) {
    case value >= 0 && value < 10:
      return 50;
    case value >= 10 && value < 20:
      return 30;
    case value >= 20 && value < 30:
      return 10;
    case value >= 30 && value < 40:
      return 5;
    case value >= 40 && value < 50:
      return 3;
    case value >= 40 && value < 200:
      return 1;
    case value >= 200 && value < 400:
      return 0.5;
    case value >= 400:
      return 0.1;
    default:
      return "not valid";
  }
};

export const alertIcon = (value) => {
  switch (true) {
    case 55:
    case 57:
    case 65:
    case 67:
    case 75:
    case 82:
    case 86:
    case 95:
    case 99:
      return "⚠️";
  }
};
