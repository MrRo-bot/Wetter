import { github, linkedin, discord } from "../assets/images";

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="block mb-2 text-xs text-center dark:text-greyTextD text-chanceOfPrecipitation font-pathway font-extralight">
        My socials 😘
      </div>
      <div className="flex items-center justify-center gap-2 mb-4 contrast-50 dark:invert">
        <a className="hover:scale-110" href="https://github.com/MrRo-bot">
          <img className="w-5 h-5 cursor pointer" src={github} alt="github" />
        </a>
        <a
          className="hover:scale-110"
          href="https://discordapp.com/users/434001308484239381"
        >
          <img className="w-5 h-5 cursor pointer" src={discord} alt="discord" />
        </a>
        <a
          className="hover:scale-110"
          href="https://www.linkedin.com/in/cm-ch/"
        >
          <img
            className="w-5 h-5 cursor pointer"
            src={linkedin}
            alt="linkedin"
          />
        </a>
      </div>
      <h2 className="text-xs text-center uppercase text-greyText dark:text-greyTextD">
        <a href="https://open-meteo.com/">Weather data by open-meteo.com</a>
      </h2>
      <h2 className="text-[0.5rem] text-center uppercase text-greyText dark:text-greyTextD">
        <a href="https://todayweather.co/">Inspired by Today Weather</a>
      </h2>
    </footer>
  );
};

export default Footer;
