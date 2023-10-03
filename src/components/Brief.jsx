import { useEffect, useState } from "react";
import { extractColors } from "extract-colors";
import FramerAnimations from "../utils/FramerAnimations";
import { motion } from "framer-motion";
import { expand, sunrise, sunset, clock } from "../assets/images";
import { Days } from "../components/index";

const Brief = ({ brief, sunPos, img, city, daysData }) => {
  const [clrFrmImg, setClrFrmImg] = useState();
  const [daysPopup, setDaysPopup] = useState(false);

  useEffect(() => {
    const extColor = async () => {
      try {
        let col = await extractColors(img, {
          crossOrigin: true,
        });
        if (!col) {
          throw new Error("Something's off");
        }
        setClrFrmImg(col[0].hex);
      } catch (err) {
        console.log(err);
        setClrFrmImg("");
      }
    };
    extColor();
  }, [img]);

  const handleRender = () => {
    setDaysPopup((prev) => !prev);
  };

  daysPopup
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return daysPopup ? (
    <Days days={daysData} handleRender={() => handleRender()} />
  ) : (
    <FramerAnimations>
      <section className="mx-3 xs:mx-5 sm:my-8 sm:mx-12 md:mx-24 md:flex md:gap-2 md:flex-around lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw] lg:gap-6">
        <div
          className="relative max-w-full overflow-hidden rounded-2xl h-80 sm:h-96 md:w-1/2"
          id="heroImg"
          style={{
            background: `url(${img}) center center / cover no-repeat`,
          }}
        >
          <div
            style={{
              background: `linear-gradient(to top, ${clrFrmImg}, transparent)`,
            }}
            className="absolute bottom-0 flex items-end justify-around w-full h-16 p-2"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-end gap-1"
            >
              <img className="w-5 h-5 mb-[1px]" src={clock} alt="time" />
              <div className="text-sm font-light text-body font-inter">
                {new Date().toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-end gap-1"
            >
              <img className="w-5 h-5 mb-[2px]" src={sunrise} alt="sunrise" />
              <div className="text-sm font-light text-body font-inter">
                {sunPos.sunrise}
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-end gap-1"
            >
              <img className="w-5 h-5 mb-[2px]" src={sunset} alt="sunset" />
              <div className="text-sm font-light text-body font-inter">
                {sunPos.sunset}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative py-2 mt-2 sm:mt-8 md:w-1/2">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{ color: `${clrFrmImg || "gray"}` }}
            className="mr-4 text-6xl font-thin drop-shadow-lg sm:text-7xl md:text-6xl lg:text-7xl font-inter"
          >
            {brief.currentTemp}
          </motion.span>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute inline-block top-6"
          >
            <sup
              style={{ color: `${clrFrmImg || "gray"}` }}
              className="text-2xl drop-shadow-lg font-extralight sm:text-3xl md:text-2xl lg:text-3xl font-inter"
            >
              {brief.maxTemp}
            </sup>
            <span
              style={{ color: `${clrFrmImg || "gray"}` }}
              className="text-2xl drop-shadow-lg font-extralight sm:text-3xl md:text-2xl lg:text-3xl font-inter"
            >
              /{" "}
            </span>
            <sub
              style={{ color: `${clrFrmImg || "gray"}` }}
              className="text-2xl drop-shadow-lg font-extralight sm:text-3xl md:text-2xl lg:text-3xl font-inter"
            >
              {brief.minTemp}
            </sub>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="mt-3 text-[0.7rem] font-light sm:text-sm sm:mt-6 text-greyText dark:text-greyTextD font-pathway">
              {brief.dateStamp}
            </div>
            <div className="my-2 text-2xl font-medium leading-4 text-text dark:text-textD sm:text-3xl font-pathway">
              {city}
            </div>
            <div className="text-sm font-light text-text dark:text-textD sm:text-base font-pathway">
              {brief.main}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.7 }}
            onClick={handleRender}
            className="relative mt-3 text-xs font-normal cursor-pointer sm:text-sm sm:mt-6 text-greyText font-inter dark:text-greyTextD"
          >
            <div className="w-10/12 ">{brief.summary}</div>
            <div className="absolute w-5 h-5 right-0 top-[50%] translate-y-[-50%]">
              <img
                src={expand}
                className="absolute right-0 w-2 h-2 top-[50%] translate-y-[-50%] dark:invert"
                alt="click to expand"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </FramerAnimations>
  );
};

export default Brief;
