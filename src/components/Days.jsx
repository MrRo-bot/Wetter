/* eslint-disable react/prop-types */
import { back } from "../assets/images";
import { motion } from "framer-motion";
const Days = ({ days, handleRender }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="fixed inset-0 overflow-y-scroll bg-body dark:bg-bodyD z-[999]"
    >
      <div className="sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:max-w-[50vw] mx-auto">
        <div
          onClick={handleRender}
          className="sticky top-0 z-[998] flex items-center justify-start w-full p-3 cursor-pointer bg-body dark:bg-bodyD"
        >
          <img
            className="w-5 h-5 rotate-180 dark:invert"
            src={back}
            alt="go back"
          />
          <h2 className="text-lg font-medium ml-7 font-pathway text-mainHeading dark:text-mainHeadingD">
            Next 16 Days
          </h2>
        </div>

        <div className="flex flex-col gap-5 p-1">
          {days.map((x) => (
            <div
              key={x.id}
              className="grid gap-2 grid-rows-[2fr, 0.5fr] grid-cols-[1fr,_5fr]"
            >
              <div className="row-start-1 row-end-2 p-3 mx-auto rounded-full h-fit first:bg-greyBackHourly first:dark:bg-greyBackHourlyD">
                <img
                  className="w-4 h-4"
                  src={`/${
                    typeof x.weatherIcon != "object"
                      ? x.weatherIcon
                      : x.isDay
                      ? x.weatherIcon[0]
                      : x.weatherIcon[1]
                  }.svg`}
                  alt="⚠️"
                />
              </div>

              <div className="row-start-2 row-end-3 mx-auto text-xs font-light font-inter text-chanceOfPrecipitation">
                {x.precipitation}
              </div>

              <div className="row-start-1 row-end-2">
                <h3 className="font-pathway text-text dark:text-textD">
                  {x.dateStamp}
                </h3>
                <span className="text-sm font-normal font-inter text-text dark:text-textD">
                  {x.maxTemp}
                </span>
                <span className="text-sm font-normal font-inter text-text dark:text-textD">
                  {" "}
                  /{" "}
                </span>
                <span className="text-sm font-normal font-inter text-text dark:text-textD">
                  {x.minTemp}
                </span>
              </div>
              <div className="row-start-2 row-end-3 text-xs text-greyText font-inter dark:text-greyTextD">
                {x.summary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Days;
