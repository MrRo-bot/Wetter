/* eslint-disable react/prop-types */
import { useState } from "react";
import { Days } from "../components/index";
import { windAlternate, expand } from "../assets/images";
import FramerAnimations from "../utils/FramerAnimations";

const Daily = ({ daily }) => {
  const [daysPopup, setDaysPopup] = useState(false);

  const handleRender = () => {
    setDaysPopup((prev) => !prev);
  };

  if (daysPopup) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return daysPopup ? (
    <Days days={daily} handleRender={() => handleRender()} />
  ) : (
    <FramerAnimations>
      <section
        onClick={handleRender}
        className="cursor-pointer shadow-md dark:shadow-stone-800 dark:bg-sectionD bg-section px-2 xs:px-4 py-5 m-3 xs:mx-5 sm:p-8 md:p-12 sm:my-8 sm:mx-12 md:mx-24 rounded-2xl lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]"
      >
        <div className="relative">
          <h2 className="text-sm font-medium sm:text-lg font-pathway text-sectionHeading dark:text-sectionHeadingD">
            DAILY
          </h2>
          <div className="absolute w-5 h-5 right-0 top-[50%] translate-y-[-50%]">
            <img
              src={expand}
              className="cursor-pointer absolute w-2 h-2 right-0 top-[50%] translate-y-[-50%] dark:invert"
              alt="click to expand"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6 sm:justify-evenly">
          {daily.slice(0, 6).map((x) => (
            <div
              key={x.id}
              className="flex flex-col items-center w-20 gap-1 justify-evenly sm:gap-2 sm:w-24"
            >
              <span className="text-sm font-light sm:text-base font-inter text-greyText dark:text-mainHeadingD">
                {x.maxTemp}
              </span>
              <span className="text-sm font-light sm:text-base font-inter text-greyText dark:text-mainHeadingD">
                {x.minTemp}
              </span>

              <span className="text-xs font-light font-inter text-chanceOfPrecipitation">
                {x.precipitation}
              </span>
              <img
                className="w-6"
                src={`/${
                  typeof x.weatherIcon != "object"
                    ? x.weatherIcon
                    : x.isDay
                    ? x.weatherIcon[0]
                    : x.weatherIcon[1]
                }.svg`}
                alt="⚠️"
              />
              <span className="text-xs font-light font-pathway text-greyText dark:text-greyTextD">
                {x.windSpeed}
              </span>
              <img
                style={{ transform: `rotate(${x.windDirection}deg)` }}
                className="w-6 dark:invert"
                src={windAlternate}
                alt="wind direction"
              />
              <span className="text-xs font-light font-pathway text-greyText dark:text-greyTextD">
                {x.dateStamp.slice(0, 3)}
              </span>
            </div>
          ))}
        </div>
      </section>
    </FramerAnimations>
  );
};

export default Daily;
