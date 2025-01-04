
interface project {
  title: string;
  description: string;
  LiveLink?: string;
  GithubLink?: string;
  GitlabLink?: string;
  FigmaLink?: string;
  imageLink?: string;
  techUsed?: { [key: string]: string }[];
}

interface intro {
  username: string;
  displayname: string;
  displayImage: string;
  age: string;
  gender: string;
  professionaltitle: string;
  description: string;
  extraDetails: string;
  contactmail: string;
  contactPhone: number;
  sociallinks: { [key: string]: string };
}

export type mockDataSchema = {
  blogs: boolean;
  poems: boolean;
  template: string;
  about?: string;
  intro?: intro;
  skills?: { [key: string]: string }[];
  experience?: { [key: string]: string }[];
  projects?: project[];
  education?: { [key: string]: string }[];
  achievement?: { [key: string]: string }[];
};

export const nithinData: mockDataSchema = {
  template: "slate",
  blogs: false,
  poems: false,
  intro: {
    username: "nithinvarma17",
    displayname: "Nithin Varma",
    displayImage:
      "https://res.cloudinary.com/dkhymc3li/image/upload/v1735927913/uyvowshewjsj7r5lxp8s.jpg",
    age: "",
    gender: "",
    professionaltitle: "Aspiring Entrepreneur",
    description: `BBA in Bussiness Analytics `,
    extraDetails: `Innovator \n\n 9381904726`,
    contactmail: "nv787265@gmail.com",
    contactPhone: 9381904726,
    sociallinks: {
      linkedin: "",
      github: "https://github.com/NithinVarma50",
      instagram: "",
      twitter: "",
    },
  },

  about: `I am Nithin Varma, a BBA student specializing in Business Analytics, with a passion for entrepreneurship and innovation. My focus lies in solving real-world problems through creative and technology-driven business ideas. I aim to make a meaningful impact on industries by combining analytical skills with entrepreneurial vision.`,

  skills: [
    {
      name: "Entrepreneurship",
      description: "Conceptualizing and pitching innovative business ideas.",
      imgLink: "https://www.svgrepo.com/show/170156/businessman.svg",
    },
    {
      name: "Sustainability Innovation",
      description:
        "Designing eco-friendly products and packaging, as seen in Green Terra.",
      imgLink: "https://www.svgrepo.com/show/293492/ecology-green.svg",
    },
    {
      name: "Gamification & Engagement",
      description:
        "Creating engaging platforms like Brain Candy that gamify learning.",
      imgLink: "https://www.svgrepo.com/show/340361/gamification.svg",
    },
    {
      name: "Cloud Computing",
      description:
        "Understanding cloud gaming mechanics and infrastructure as developed for Cloudix.",
      imgLink: "https://www.svgrepo.com/show/288372/cloud-computing-seo-and-web.svg",
    },
    {
      name: "AI & Predictive Analysis",
      description:
        "Designing AI-driven solutions for platforms like Astromatic AI.",
      imgLink: "https://www.svgrepo.com/show/447866/ai-mi-algorithm.svg",
    },
    {
      name: "Technology Integration",
      description:
        "Combining technology with user experiences in products like Feastify and Waveroo.",
      imgLink: "https://www.svgrepo.com/show/291508/technology-idea.svg",
    },
    {
      name: "Creative Product Design",
      description:
        "Developing unique solutions like Vastramukti for travel and fitness.",
      imgLink: "https://www.svgrepo.com/show/433698/product-sf.svg",
    },
    {
      name: "Game Development",
      description:
        " Innovating immersive gaming experiences, demonstrated in Evolvion.",
      imgLink: "https://www.svgrepo.com/show/503859/game.svg",
    },
    {
      name: "Data Analysis",
      description:
        "Proficient in data management, visualization, and analysis using tools like MS Excel.",
      imgLink: "https://www.svgrepo.com/show/499835/data-report.svg",
    },
    {
      name: "Presentation Skills",
      description:
        "Skilled in creating professional pitches, websites, and promotional materials.",
      imgLink: "https://www.svgrepo.com/show/513338/presentation.svg",
    },
  ],

  projects: [
    {
      title: "Cloudix (brainstorming)",
      description:
        "A cloud gaming platform offering smooth gameplay with dedicated servers for optimized performance.",
    },
    {
      title: "Green Terra (brainstorming)",
      description:
        "A plant-based food service that promotes sustainability through eco-friendly packaging and a plant-themed menu.",
    },
    {
      title: "Waveroo (brainstorming)",
      description:
        "A smart band and social media app integrating fitness tracking with proximity-based social networking.",
    },
    {
      title: "Brain Candy (brainstorming)",
      description:
        "An educational platform that gamifies learning to increase engagement and retention for students.",
    },
    {
      title: "Feastify (brainstorming)",
      description:
        "A cloud restaurant using cutting-edge technology to deliver personalized dining experiences.",
    },
    {
      title: "Astromatic AI (brainstorming)",
      description:
        "A platform providing advanced AI-driven predictive solutions to support businesses and industries.",
    },
    {
      title: "Minimate (brainstorming)",
      description:
        "Affordable portable software designed to offer practical and efficient computing solutions.",
    },
    { 
      title: "Vastramukti (brainstorming)",
      description:
        "A stylish and compact travel and fitness product catering to modern, active lifestyles.",
    },
    {
      title: "Evolvion (brainstorming)",
      description:
        "An immersive gaming experience blending creative storytelling with advanced gameplay mechanics.",
    },
  ],

  education: [
    {
      institute: "MU University",
      degree: "BBA",
      major: "Bussiness Analytics",
    },
  ],
  achievement: [
    {
      title:
        "Participated in a Shark Tank event, presenting a startup idea with:",
      description: `
A demo website.

Professionally designed promotional materials.

A detailed pitch for investors.
`,
    },
  ],
};
