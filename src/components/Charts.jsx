/* eslint-disable react/prop-types */

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { back } from "../assets/images";
import { motion } from "framer-motion";
const Charts = ({ charts, handleRender }) => {
  let prec = charts.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp.toLowerCase(),
      values: parseInt(x.precipitation),
    };
  });
  let wind = charts.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp.toLowerCase(),
      values: parseInt(x.windSpeed),
    };
  });
  let humidity = charts.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp.toLowerCase(),
      values: parseInt(x.humidity),
    };
  });
  let gust = charts.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp.toLowerCase(),
      values: parseInt(x.gust),
    };
  });
  let dew = charts.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp.toLowerCase(),
      values: parseInt(x.dewPoint),
    };
  });
  let temp = charts.slice(0, 24).map((x) => {
    return {
      hours: x.hourStamp.toLowerCase(),
      values: parseInt(x.currentTemp),
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="fixed inset-0 z-[999] overflow-y-scroll bg-body dark:bg-bodyD"
    >
      <div className="sm:w-[90vw] md:w-[80vw] lg:grid lg:grid-cols-2 lg:grid-rows-[1fr, 5fr] lg:w-[70vw] xl:max-w-[50vw] mx-auto">
        <div
          onClick={handleRender}
          className="lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3 sticky top-0 z-[998] cursor-pointer flex items-center justify-start p-3 bg-body dark:bg-bodyD"
        >
          <img
            className="w-5 h-5 rotate-180 dark:invert"
            src={back}
            alt="go back"
          />
          <h2 className="text-lg font-medium ml-7 font-pathway text-mainHeading dark:text-mainHeadingD">
            Charts
          </h2>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium font-pathway text-sectionHeading dark:text-sectionHeadingD">
            CHANCE OF PRECIPITATION (%)
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={prec}>
              <XAxis
                fontSize={11}
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
                tickMargin={8}
                axisLine={false}
                fontSize={11}
                tickLine={false}
                fontFamily={"inter"}
                tickCount={3}
              />
              <Area
                type="monotone"
                dataKey="values"
                stroke="hsl(212, 100%, 40%)"
                fill="hsl(212, 100%, 50%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium font-pathway text-sectionHeading dark:text-sectionHeadingD">
            WIND SPEED (KM/H)
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={wind}>
              <XAxis
                fontSize={11}
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
                tickMargin={8}
                axisLine={false}
                fontSize={11}
                tickLine={false}
                fontFamily={"inter"}
              />
              <Bar dataKey="values" fill="hsl(88, 61%, 60%)" barSize={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium font-pathway text-sectionHeading dark:text-sectionHeadingD">
            HUMIDITY (%)
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={humidity}>
              <XAxis
                fontSize={11}
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
                tickMargin={8}
                axisLine={false}
                fontSize={11}
                tickCount={3}
                tickLine={false}
                fontFamily={"inter"}
              />
              <Area
                type="monotone"
                dataKey="values"
                stroke="hsl(256, 100%, 50%)"
                fill="hsl(256, 100%, 60%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium font-pathway text-sectionHeading dark:text-sectionHeadingD">
            GUST (KM/H)
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={gust}>
              <XAxis
                fontSize={11}
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
                tickMargin={8}
                axisLine={false}
                fontSize={11}
                tickLine={false}
                fontFamily={"inter"}
              />
              <Bar dataKey="values" fill="hsl(51, 100%, 69%)" barSize={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium font-pathway text-sectionHeading dark:text-sectionHeadingD">
            DEW POINT (°)
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={dew}>
              <XAxis
                fontSize={11}
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
                tickMargin={8}
                axisLine={false}
                fontSize={11}
                tickLine={false}
                fontFamily={"inter"}
              />
              <Area
                type="monotone"
                dataKey="values"
                stroke="hsl(193, 28%, 57%)"
                fill="hsl(193, 28%, 77%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-sm font-medium font-pathway text-sectionHeading dark:text-sectionHeadingD">
            TEMPERATURE (°)
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={temp}>
              <XAxis
                fontSize={11}
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
                tickMargin={8}
                axisLine={false}
                fontSize={11}
                tickLine={false}
                fontFamily={"inter"}
              />
              <Area
                type="monotone"
                dataKey="values"
                stroke="hsl(25, 100%, 64%)"
                fill="hsl(25, 100%, 74%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default Charts;
