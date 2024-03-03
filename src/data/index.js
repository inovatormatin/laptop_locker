import {
  Bag,
  DeviceTablet,
  GameController,
  Handshake,
  Laptop,
  Presentation,
  Printer,
  Star,
  StarHalf,
  UserGear,
  Webcam,
} from "phosphor-react";
import printer from "./printer.png";
import camera from "./camera.png";
import console from "./console.png";
import ipad from "./ipad.png";
import laptop from "./laptop.png";
import desktop from "./desktop.png";
import { Stack } from "@mui/material";

export const reviews = [
  {
    key: 0,
    by: "Arman",
    comment:
      "Prompt Service, Reliable and trustworthy. Any problem you face be it hardware, software on laptop or desktop, don’t think twice, just call Gadgeto and experience their prompt and super reliable service. I was initially afraid about it but after experiencing their service, I am happy and satisfied by their knowledge, skills and customer service. Keep up the good work.",
  },
  {
    key: 1,
    by: "Dewendra Dubey",
    comment:
      "I am happy with the service provided by Gadgeto. I was in search for repair and service, I found them near my area. The response was very quick and the engineer (Mr Ranu Singh Rajput) who came for service was very good in their job and complete the work in given time, I am satisfied with their service.",
  },
  {
    key: 2,
    by: "Kavya Agarwal",
    comment:
      "It was nice experience, Goshant did his job well and guided positively about the resolving of the issue.",
  },
  {
    key: 3,
    by: "Ashish Singh",
    comment:
      "Laptop home service is good. Service executive( jitender kumar) is expert. He has fixed system problem and change few parts in good manner.",
  },
];

export const list = [
  {
    index: 0,
    icon: <Printer size={70} />,
    title: "Printer",
    img: printer,
  },
  {
    index: 1,
    icon: <DeviceTablet size={70} />,
    title: "Apple iPad, Tablets",
    img: ipad,
  },
  {
    index: 2,
    icon: <Laptop size={70} />,
    title: "Laptop & Desktop",
    img: desktop,
  },
  {
    index: 3,
    icon: <GameController size={70} />,
    title: "Game Console",
    img: console,
  },
  {
    index: 4,
    icon: <Webcam size={70} />,
    title: "Camera Installation",
    img: camera,
  },
  {
    index: 5,
    icon: <Presentation size={70} />,
    title: "Laptop Screens",
    img: laptop,
  },
];

export const bestAt = [
  {
    key: 0,
    heading: "Friendly 7Days in a Week customer service.",
    colored: false,
    details:
      "Our Cuppor Centers are open 7 days in a week. Only Gov Registered Holidays eg. holi, Diwali.",
  },
  {
    key: 1,
    heading: "No time windows, book when you want.",
    colored: true,
    details: "Book Online Appointment Any Time From Anywhere in Delhi-NCR.",
  },
  {
    key: 2,
    heading: "Affordable, upfront pricing.",
    colored: true,
    details: "No Extra Charges. Only pay for the Original Parts.",
  },
  {
    key: 3,
    heading: "Vaccinated and sanitized delivery executive.",
    colored: false,
    details:
      "All our executives are vaccinated and sanitize themself and tools before and after use. They always wear a mask.",
  },
];

let iconSize = 50;
export const specialCard = [
  {
    index: 0,
    title: "Customers Served",
    icon: <Handshake size={iconSize} />,
    count: "32,481+",
    bgColor: "grey",
    color: "white",
  },
  {
    index: 1,
    title: "Devices Repaired",
    icon: <Laptop size={iconSize} />,
    count: "89,458",
    bgColor: "#434368",
    color: "white",
  },
  {
    index: 2,
    title: "Years of Experience",
    icon: <Bag size={iconSize} />,
    count: "10+",
    bgColor: "#ff5757",
    color: "white",
  },
  {
    index: 3,
    title: "Technicians",
    icon: <UserGear size={iconSize} />,
    count: "10",
    bgColor: "#1d1d36",
    color: "white",
  },
  {
    index: 4,
    title: "Customer Ratings",
    icon: (
      <Stack direction="row" flexWrap="wrap">
        <Star size={30} weight="fill" /> <Star size={30} weight="fill" />{" "}
        <Star size={30} weight="fill" /> <Star size={30} weight="fill" />{" "}
        <StarHalf size={30} weight="fill" />
      </Stack>
    ),
    count: "4.8",
    bgColor: "#c68300",
    color: "white",
  },
];
