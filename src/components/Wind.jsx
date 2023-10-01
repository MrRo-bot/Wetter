import WindMill from "./WindMill";
import { wingSpeed } from "../utils/math";
import FramerAnimations from "../utils/FramerAnimations";

const Wind = ({ wind }) => {
  return (
    <FramerAnimations>
      <section className="shadow-md dark:shadow-stone-800 dark:bg-sectionD bg-section px-2 xs:px-4 py-5 m-3 xs:mx-5 sm:p-8 md:p-12 sm:my-8 sm:mx-12 md:mx-24 rounded-2xl lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]">
        <h2 className="text-sm font-medium sm:text-lg font-pathway text-sectionHeading dark:text-sectionHeadingD">
          WIND
        </h2>

        <div className="flex justify-between align-bottom sm:justify-around items-end mt-6 px-2 xs:px-4 min-h-[8rem] border-b-2 border-b-greyBackground dark:border-b-greyBackgroundD">
          <div className="relative ml-6">
            <div className="w-28 lg:w-36">
              <WindMill speed={wingSpeed(wind.windSpeed)} />
            </div>
          </div>
          <div>
            <FramerAnimations>
              <div className="text-3xl font-thin sm:text-4xl text-greyText dark:text-greyTextD font-inter">
                {wind.windSpeed + " " + wind.unit}
              </div>
            </FramerAnimations>
            <FramerAnimations>
              <div className="mt-1 text-xs font-medium sm:text-base text-greyText dark:text-greyTextD font-pathway">
                {wind.windDirection}
              </div>
            </FramerAnimations>
          </div>
        </div>
      </section>
    </FramerAnimations>
  );
};

export default Wind;
