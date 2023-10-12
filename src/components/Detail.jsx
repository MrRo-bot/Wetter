/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  thermometer,
  humidity,
  visibility,
  pressure,
  uv,
  dewPoint,
} from "../assets/images";
import FramerAnimations from "../utils/FramerAnimations";

const Detail = ({ detail }) => {
  const detailObj = [
    {
      icon: thermometer,
      heading: "Feels Like",
      data: detail.feels_like,
    },
    {
      icon: humidity,
      heading: "Humidity",
      data: detail.humidity,
    },
    {
      icon: uv,
      heading: "UV Index",
      data: detail.uvIndex,
    },
    {
      icon: visibility,
      heading: "Visibility",
      data: detail.visibility,
    },
    {
      icon: pressure,
      heading: "Pressure",
      data: detail.pressure,
    },
    {
      icon: dewPoint,
      heading: "Dew Point",
      data: detail.dewPoint,
    },
  ];

  return (
    <FramerAnimations>
      <section className="shadow-md dark:shadow-stone-800 dark:bg-sectionD bg-section px-2 xs:px-4 py-5 m-3 xs:mx-5 sm:p-8 md:p-12 sm:my-8 sm:mx-12 md:mx-24 rounded-2xl lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]">
        <h2 className="text-sm font-medium sm:text-lg font-pathway text-sectionHeading dark:text-sectionHeadingD">
          DETAIL
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-6 lg:gap-4 xl:gap-6 2xl:gap-8">
          {detailObj.map((x) => (
            <FramerAnimations>
              <div
                key={x.icon}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded shadow-md dark:shadow-stone-800 lg:h-40 bg-greyBackground dark:bg-greyBackgroundD"
              >
                <img
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  src={x.icon}
                  alt={x.heading}
                />
                <h3 className="text-xs sm:font-light sm:text-base font-pathway text-greyText dark:text-greyTextD">
                  {x.heading}
                </h3>
                <span className="text-2xl font-thin sm:text-3xl font-inter text-text dark:text-textD">
                  {x.data ?? "⚠️"}
                </span>
              </div>
            </FramerAnimations>
          ))}
        </div>
      </section>
    </FramerAnimations>
  );
};

export default Detail;
