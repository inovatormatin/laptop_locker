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
    by: "Deepak Singh",
    comment:
      "I had a fantastic experience with Tech Guardians. My laptop was having multiple issues, and I was worried about downtime. The team was incredibly responsive and walked me through the entire process. They diagnosed the problems quickly, explained everything clearly, and had my laptop back to me in no time. The repair quality was excellent, and my laptop is now running better than ever. I highly recommend Tech Guardians to anyone in need of reliable and efficient laptop repairs!",
  },
  {
    key: 1,
    by: "Arun Goyal",
    comment:
      "Our company faced a significant issue with several computers and laptops, and we needed a swift solution. Tech Guardians exceeded our expectations. The team was professional, thorough, and provided excellent on-site support. They quickly identified and resolved the issues, minimizing our downtime. Their Annual Maintenance Contract (AMC) has been a game-changer, ensuring that our tech remains in top condition. The level of service and expertise is unmatched, and we couldn't be happier with the results. Highly recommended for any business looking for dependable tech support! ",
  },
  {
    key: 2,
    by: "Jitendra",
    comment:
      "I can't speak highly enough about the service I received from Tech Guardians. My desktop had a major hardware issue, and I was concerned about the cost and the time it would take to fix it. The technicians were not only knowledgeable but also very transparent about pricing and repair times. They kept me informed every step of the way and returned my computer in perfect working order. Their attention to detail and customer care are truly commendable. If you're looking for a trustworthy and skilled repair service, look no further than Tech Guardians! ",
  },
  {
    key: 3,
    by: "Mukesh ",
    comment:
      "From start to finish, Tech Guardians provided top-notch service. I had an urgent issue with my laptop right before a big presentation. I reached out to them, and they were incredibly accommodating, offering quick turnaround and clear communication. They identified and fixed the problem promptly and even provided useful tips on maintaining my laptop. Their professionalism and dedication to customer satisfaction are evident, and I am grateful for their outstanding support. I will definitely be returning to Tech Guardians for any future tech needs! ",
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
    title: "AMC Service",
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
    heading:
      "Consistent, Top-Notch Service – Here for You Every Day of the Week.",
    colored: false,
    details:
      "At our laptop repair centers, we offer consistent, top-notch service every day of the week. Our dedicated team is available to help with your laptop issues whenever you need, ensuring reliable and high-quality repairs.",
  },
  {
    key: 1,
    heading: "B2B Offerings and Tailored AMC Services",
    colored: true,
    details:
      "Our B2B offerings include specialized laptop and computer repair services tailored for corporate offices. We also provide customized Annual Maintenance Contracts (AMC) to ensure your business’s tech stays in top condition throughout the year.",
  },
  {
    key: 2,
    heading: "Budget-Friendly Repairs",
    colored: true,
    details:
      "Enjoy transparent and affordable pricing with no hidden fees. We provide clear, upfront costs for all our services, so you know exactly what to expect before any work begins",
  },
  {
    key: 3,
    heading: "Flexible Booking – Choose Any Time That Works for You.",
    colored: false,
    details:
      "With our flexible booking system, you can schedule your computer or laptop repair at any time that suits you. No need to adhere to specific time windows—just choose a slot that works for your schedule and let us handle the rest!",
  },
];

let iconSize = 50;
export const specialCard = [
  {
    index: 0,
    title: "Customers Served",
    icon: <Handshake size={iconSize} />,
    count: "2,081+",
    bgColor: "grey",
    color: "white",
  },
  {
    index: 1,
    title: "Devices Repaired",
    icon: <Laptop size={iconSize} />,
    count: "9,058",
    bgColor: "#434368",
    color: "white",
  },
  {
    index: 2,
    title: "Years of Experience",
    icon: <Bag size={iconSize} />,
    count: "5+",
    bgColor: "#ff5757",
    color: "white",
  },
  {
    index: 3,
    title: "Technicians",
    icon: <UserGear size={iconSize} />,
    count: "3",
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
    count: "4.5",
    bgColor: "#c68300",
    color: "white",
  },
];
