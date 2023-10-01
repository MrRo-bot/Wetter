import "./App.css";
import React from "react";
import {
  Header,
  Brief,
  Detail,
  Hourly,
  Daily,
  Chart,
  AirQuality,
  Wind,
  Footer,
  Loading,
  Spinner,
} from "./components/index";

import useProcessedData from "./hooks/useProcessedData";

function Home() {
  const [data, location] = useProcessedData();

  return !location.latitude ? (
    <Loading />
  ) : !data ? (
    <Spinner />
  ) : (
    <div className="bg-body dark:bg-bodyD">
      <>
        <Header></Header>
        <main>
          <Brief
            brief={data.BRIEF}
            sunPos={data.DAILY[0]}
            img={data.IMAGE}
            city={data.AQI.city}
            daysData={data.DAILY}
          />
          <Detail detail={data.DETAIL} />
          <Hourly hourly={data.HOURLY} />
          <Daily daily={data.DAILY} />
          <Chart hourlyChart={data.HOURLY} />
          <AirQuality aqi={data.AQI} />
          <Wind wind={data.WIND} />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default Home;
