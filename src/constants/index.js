import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefiteImg6,
  benefiteImg5,
  benefiteImg4,
  benefiteImg3,
  benefiteImg2,
  benefiteImg1,
  canteenmp4,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  bowlingball,
  cricketball,
  tennis,
  football,
  basketball,
  golfball,
  fireBall,
  rugbee,
  crickets,
  footballs,
  kabaddis,
  hockeys,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Booking",
    url: "/booking",
  },
  {
    id: "2",
    title: "canteen",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "sports",
    url: "/sports",
  },
  {
    id: "4",
    title: "New account",
    url: "/registration",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Comfortable seating area for players and spectators",
  "Easy ordering system (e.g. online, mobile app, or at the counter)",
  "Clean and sanitized food preparation and serving areas",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Cricket",
    text: "Step onto the Pitch and Unleash Your Inner Cricketer! Our cricket nets are designed to provide a safe and challenging practice environment, with sturdy frames and high-quality netting to contain even the most powerful shots.",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Football",
    text: "Kick Off Your Game on Our Top-Tier Pitch! Ideal for training, leagues, tournaments, and pick-up games. Get ready to score big on our world-class football pitch!",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Badminton",
    text: "Smash Your Way to Fun on Our Courts! Perfect for casual play, training, and tournaments.",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Hockey",
    text: "Stick Handle Your Way to Fun on Our Rink! So, lace up your skates, grab your stick, and get ready to experience the rush of hockey – the fastest game on ice!",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText1 = "Improves Mental Health : Outdoor games reduce stress and anxiety by releasing endorphins, improving mood and mental well-being."
export const collabText2 = " Enhances Cognitive Function : Outdoor games improve cognitive function, boosting memory, attention, and spatial awareness through problem-solving and critical thinking."
export const collabText3 = "Boosts Physical Fitness : Outdoor games provide regular exercise, improving cardiovascular health, building strength, and increasing flexibility."


export const collabContent = [
  {
    id: "0",
    // title: "Seamless Integration",
    text: collabText1,
  },
  {
    id: "1",
    // title: "Smart Automation",
    text: collabText2,
  },
  {
    id: "2",
    // title: "Top-notch Security",
    text: collabText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: bowlingball,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: football,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: tennis,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: cricketball,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: golfball,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: basketball,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: fireBall,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: rugbee,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Effortless Ground Booking",
    text: "Simplify your sports ground reservations with our intuitive platform, ensuring you spend less time booking and more time playing.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefiteImg1,
  },
  {
    id: "1",
    title: "Wide Range of Venues",
    text: "Access a variety of top-notch sports grounds in your area, tailored to meet the needs of different sports and activities.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefiteImg2,
    light: true,
  },
  {
    id: "2",
    title: "Real-Time Availability",
    text: "Check real-time availability and secure your preferred time slots instantly, avoiding the hassle of double bookings or last-minute changes.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefiteImg3,
  },
  {
    id: "3",
    title: "User-Friendly Interface",
    text: "Navigate through our platform with ease, thanks to a user-friendly interface designed to provide a seamless booking experience for all users.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefiteImg4,
    light: true,
  },
  {
    id: "4",
    title: "Secure Payment Options",
    text: "Enjoy peace of mind with secure, multiple payment options, ensuring your transactions are safe and convenient.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefiteImg5,
  },
  {
    id: "5",
    title: "Customer Support",
    text: "Rely on our dedicated customer support team for any assistance you need, making your booking experience smooth and stress-free.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefiteImg6,
  },
];


export const sportsDetails = [
  {
    id: 1,
    title: "Football",
    description: "Experience the thrill of football with our top-notch facilities and equipment.",
    imageUrl: footballs // Replace with actual image path
  },
  {
    id: 2,
    title: "Kabaddi",
    description: "Our Kabaddi court is built to professional standards, offering the perfect surface for intense gameplay.",
    imageUrl: kabaddis // Replace with actual image path
  },
  {
    id: 3,
    title: "Hockey",
    description: "Play hockey on our well-maintained courts, suitable for both recreational and competitive play.",
    imageUrl: hockeys // Replace with actual image path
  },
  {
    id: 4,
    title: "Cricket",
    description: "Step up to the crease and book your cricket turf today for a match-winning experience!",
    imageUrl: crickets // Replace with actual image path
  }
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },

 
];

