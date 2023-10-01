import FramerAnimations from "../utils/FramerAnimations";

const AirQuality = ({ aqi }) => {
  return (
    <FramerAnimations>
      <section className="shadow-md dark:shadow-stone-800 dark:bg-sectionD bg-section px-2 xs:px-4 py-5 m-3 xs:mx-5 sm:p-8 md:p-12 sm:my-8 sm:mx-12 md:mx-24 rounded-2xl lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]">
        <h2 className="text-sm font-medium sm:text-lg font-pathway text-sectionHeading dark:text-sectionHeadingD">
          AIR QUALITY
        </h2>
        <div className="flex gap-4 mt-4 align-center">
          <FramerAnimations>
            <span
              style={{ color: `var(--${aqi.color})` }}
              className="text-5xl font-thin sm:text-6xl font-inter"
            >
              {aqi.index}
            </span>
          </FramerAnimations>

          <div>
            <FramerAnimations>
              <div className="text-lg font-semibold font-pathway sm:text-xl text-mainHeading dark:text-mainHeadingD">
                {aqi.level}
              </div>
            </FramerAnimations>
            <FramerAnimations>
              <div className="text-sm font-normal sm:text-base text-greyText dark:text-greyTextD font-inter">
                {aqi.desc}
              </div>
            </FramerAnimations>
          </div>
        </div>

        <div className="relative grid mt-2 grid-cols-[repeat(4,_1fr)_2fr_repeat(2,_2fr)] grid-row-3 gap-y-1">
          <div className="text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            0
          </div>
          <div className="text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            50
          </div>
          <div className="text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            100
          </div>
          <div className="text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            150
          </div>
          <div className="text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            200
          </div>
          <div className="text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            300
          </div>
          <div className="text-right text-[0.5rem] sm:text-xs font-inter text-text dark:text-textD">
            500
          </div>
          <div className="h-1 col-start-1 col-end-8 rounded-md bg-aqiGradient">
            <div
              style={{
                left: `calc(${aqi.seekBar}% - ${5}px)`,
              }}
              className="absolute w-2.5 h-2.5 rounded-full bg-mainHeading dark:bg-mainHeadingD top-[13px] sm:top-[17px]"
            ></div>
          </div>
          <div className="col-start-1 col-end-2 text-xs sm:text-sm font-pathway text-greyText dark:text-greyTextD">
            Good
          </div>
          <div className="col-start-7 col-end-8 text-xs text-right sm:text-sm font-pathway text-greyText dark:text-greyTextD">
            Hazardous
          </div>
        </div>
      </section>
    </FramerAnimations>
  );
};

export default AirQuality;
