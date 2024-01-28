import gdsj from "../Images/GCSJ_logo.webp";
import FL from "../Images/figmaLifestyle_Logo(BG_white).jpeg";
import SC_24 from "../Images/SolutionChallenge_2024.webp";
import Pandas from "../Images/Pandas_9D3I4Kp.webp";

const events = [
  {
    img: gdsj,
    title: "Google Cloud Study Jam",
    description: null,
    startDate: new Date("2023-08-31"),
    endDate: new Date("2023-08-31T18:00:00"),
    location: "G.H. Raisoni College of Engineering, Nagpur",
    learnMoreLink: null,
  },
  {
    img: FL,
    title: "Figma Lifestyle",
    description: null,
    startDate: new Date("2023-10-21"),
    endDate: new Date("2023-10-21T18:00:00"),
    location: "G.H. Raisoni College of Engineering, Nagpur",
    learnMoreLink: "/events/figma-lifestyle",
  },
  {
    img: SC_24,
    title: "Solution Challenge 2024",
    description: null,
    startDate: new Date("2023-12-01"),
    endDate: new Date("2024-01-20T18:00:00"),
    location: "G.H. Raisoni College of Engineering, Nagpur",
    learnMoreLink: "/events/solution-challenge",
    registerLink: null,
  },
  {
    img: Pandas,
    title: "Intoduction to Web3 and Blockchain",
    description: null,
    startDate: new Date("2024-01-29"),
    endDate: new Date("2024-01-29T12:30:00"),
    location: "G.H. Raisoni College of Engineering, Nagpur",
    learnMoreLink: "https://gdsc.community.dev/events/details/developer-student-clubs-gh-raisoni-college-of-engineering-nagpur-presents-intoduction-to-web3-and-blockchain/",
    registerLink: null,
  },
];

export default events;
