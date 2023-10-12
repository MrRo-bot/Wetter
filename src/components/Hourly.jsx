/* eslint-disable react/prop-types */
import { useState } from "react";
import { Hours } from "../components/index";
import { expand, windAlternate } from "../assets/images";
import FramerAnimations from "../utils/FramerAnimations";

const Hourly = ({ hourly }) => {
  const [hoursPopup, setHoursPopup] = useState(false);

  const handleRender = () => {
    setHoursPopup((prev) => !prev);
  };

  if (hoursPopup) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return hoursPopup ? (
    <Hours hours={hourly} handleRender={() => handleRender()} />
  ) : (
    <FramerAnimations>
      <section
        onClick={handleRender}
        className="cursor-pointer shadow-md dark:shadow-stone-800 dark:bg-sectionD bg-section px-2 xs:px-4 py-5 m-3 xs:mx-5 sm:p-8 md:p-12 sm:my-8 sm:mx-12 md:mx-24 rounded-2xl lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]"
      >
        <div className="relative">
          <h2 className="text-sm font-medium sm:text-lg font-pathway text-sectionHeading dark:text-sectionHeadingD">
            HOURLY
          </h2>
          <div className="absolute w-5 h-5 right-0 top-[50%] translate-y-[-50%]">
            <img
              src={expand}
              className="cursor-pointer absolute w-2 h-2 right-0 top-[50%] translate-y-[-50%] dark:invert"
              alt="click to expand"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-6 overflow-x-scroll sm:gap-6">
          {hourly.slice(0, 24).map((x) => (
            <div
              key={x.id}
              className="flex flex-col items-center sm:gap-4 rounded py-2 min-w-[3.2rem] sm:min-w-[3.5rem] first:bg-greyBackHourly first:dark:bg-greyBackHourlyD"
            >
              <span className="text-sm font-normal sm:text-base font-inter text-mainHeading dark:text-mainHeadingD">
                {x.currentTemp}
              </span>
              <span className="my-1 text-xs font-light sm:my-0 sm:text-sm font-inter text-chanceOfPrecipitation">
                {x.precipitation}
              </span>
              <img
                className="w-4 my-1 sm:my-0 sm:w-6"
                src={`/${
                  typeof x.weatherIcon != "object"
                    ? x.weatherIcon
                    : x.isDay
                    ? x.weatherIcon[0]
                    : x.weatherIcon[1]
                }.svg`}
                alt="⚠️"
              />
              <span className="my-1 sm:my-0 text-[0.6rem] sm:text-[0.7rem] font-light sm:font-medium font-pathway text-greyText dark:text-greyTextD">
                {x.windSpeed}
              </span>
              <img
                style={{ transform: `rotate(${x.windDirection}deg)` }}
                className="w-4 my-1 sm:my-0 dark:invert"
                src={windAlternate}
                alt="wind direction"
              />
              <span className="text-[0.6rem] sm:text-[0.7rem] font-light sm:font-medium font-pathway text-greyText dark:text-greyTextD">
                {x.hourStamp.toLowerCase() ?? "⚠️"}
              </span>
            </div>
          ))}
        </div>
      </section>
    </FramerAnimations>
  );
};

export default Hourly;
