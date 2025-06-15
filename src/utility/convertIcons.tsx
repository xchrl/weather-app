import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudRain,
  FaSnowflake,
} from "react-icons/fa";
import { BsCloudFog, BsCloudLightningRainFill } from "react-icons/bs";

export default function convertIcons(icon: string) {
  let reactIcon;
  switch (icon) {
    case "01":
      reactIcon = <FaSun />;
      break;
    case "02":
      reactIcon = <FaCloudSun />;
      break;
    case "03":
    case "04":
      reactIcon = <FaCloud />;
      break;
    case "09":
      reactIcon = <FaCloudShowersHeavy />;
      break;
    case "10":
      reactIcon = <FaCloudRain />;
      break;
    case "11":
      reactIcon = <BsCloudLightningRainFill />;
      break;
    case "13":
      reactIcon = <FaSnowflake />;
      break;
    case "14":
    case "50":
      reactIcon = <BsCloudFog />;
      break;
  }

  return reactIcon;
}
