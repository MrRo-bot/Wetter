import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { expand } from "../assets/images";
import { useState } from "react";
import { Charts } from "../components/index";
import FramerAnimations from "../utils/FramerAnimations";

const Chart = ({ hourlyChart }) => {
  const [chartsPopup, setChartsPopup] = useState(false);

  let data = hourlyChart.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp,
      precipitation: parseInt(x.precipitation),
    };
  });

  const handleRender = () => {
    setChartsPopup((prev) => !prev);
  };

  if (chartsPopup) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return chartsPopup ? (
    <Charts charts={hourlyChart} handleRender={() => handleRender()} />
  ) : (
    <FramerAnimations>
      <section
        onClick={handleRender}
        className="cursor-pointer relative shadow-md dark:shadow-stone-800 dark:bg-sectionD bg-section px-2 xs:px-4 py-5 sm:p-8 md:p-12 m-3 xs:mx-5 sm:my-8 sm:mx-12 md:mx-24 rounded-2xl lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]"
      >
        <div className="relative">
          <h2 className="text-sm font-medium sm:text-lg font-pathway text-sectionHeading dark:text-sectionHeadingD">
            CHART
          </h2>
          <div className="absolute w-5 h-5 right-0 top-[50%] translate-y-[-50%]">
            <img
              src={expand}
              className="cursor-pointer absolute w-2 h-2 right-0 top-[50%] translate-y-[-50%] dark:invert"
              alt="click to expand"
            />
          </div>
        </div>
        <div className="px-1 py-2 ">
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={data}>
              <XAxis
                fontSize={10}
                tickLine={false}
                fontFamily={"inter"}
                dataKey="hours"
                height={20}
                interval={"preserveStart"}
                minTickGap={20}
                tickMargin={10}
              ></XAxis>
              <YAxis
                width={27}
                tickMargin={10}
                axisLine={false}
                fontSize={10}
                tickCount={3}
                tickLine={false}
                fontFamily={"inter"}
              />
              <Area
                type="monotone"
                dataKey="precipitation"
                stroke="hsl(212, 100%, 50%)"
                fill="hsl(212, 100%, 40%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute tracking-tight text-[0.7rem] font-extralight font-pathway right-4 bottom-2 sm:right-10 md:right-14 lg:right-18 xl:right-22 text-greyText">
          Chance of precipitation
        </div>
      </section>
    </FramerAnimations>
  );
};

export default Chart;
