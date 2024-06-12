import aircraft from "../../assets/images/webp/choose-us/aircraft.webp";
import drone from "../../assets/images/webp/choose-us/drone.webp";
import boats from "../../assets/images/webp/choose-us/boats.webp";

export const chooseCards = [
  {
    image: aircraft,
    title: "Experience",
    description:
      "With years of industry experience, we understand the unique challenges of each project.",
    reverse: false,
  },
  {
    image: boats,
    title: "Quality",
    description:
      "We prioritize quality in every aspect of our service, from equipment to data analysis.",
    reverse: true,
  },
  {
    image: drone,
    title: "Reliability",
    description:
      "Count on us for dependable, timely, and professional drone solutions.",
    reverse: false,
  },
];

export const links = [
  {
    heading: "Quick Links",
    items: [
      { text: "Home", to: "/home" },
      { text: "About us", to: "/about" },
      { text: "Services", to: "/services" },
      { text: "Blog", to: "/blog" },
    ],
  },
  {
    heading: "About Us",
    items: [
      { text: "Why We are Best", to: "/why-we-are-best" },
      { text: "What We Do", to: "/what-we-do" },
    ],
  },
  {
    heading: "Register",
    items: [
      { text: "Contact Us", to: "/contact" },
      { text: "Privacy and Policy", to: "/privacy-policy" },
      { text: "Terms and Condition", to: "/terms-condition" },
    ],
  },
];
