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
  sociallinks: { [key: string]: string };
}

export type mockDataSchema = {
  template: string,
  blogs: boolean;
  poems: boolean;
  about?: string;
  intro?: intro;
  skills?: { [key: string]: string }[];
  experience?: { [key: string]: string }[];
  projects?: project[];
  education?: { [key: string]: string }[];
  achievement?: { [key: string]: string }[];
};

export const mockData: mockDataSchema = {
  template: 'slate',
  blogs: true,
  poems: true,
  intro: {
    username: "johnd",
    displayname: "John Doe",
    displayImage:
      "https://res.cloudinary.com/dkhymc3li/image/upload/v1735138383/96346957_vkuk3g.png",
    age: "",
    gender: "",
    professionaltitle: "Web Developer",
    description: `i live in the cli, probably programming. mostly making stuff for the
          web but sometimes indulging with some low level dev. other than that,
          i would most probably be doing some poetry or yapping in a blog.`,
    extraDetails: `currently learning Rust \n\n building [pholio↗](https://pholio.online)`,
    contactmail: "example@example.com",
    sociallinks: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
    },
  },

  skills: [
    {
      name: "TypeScript",
      imgLink: "https://www.svgrepo.com/show/439022/typescript.svg",
    },
    {
      name: "ReactJs",
      imgLink: "https://www.svgrepo.com/show/452092/react.svg",
    },
    {
      name: "MongoDB",
      imgLink: "https://www.svgrepo.com/show/373845/mongo.svg",
    },
    {
      name: "tailwindCSS",
      imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      name: "supabase",
      imgLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1735494077/ssawvwnzj8hwpk8bxnv9.png",
    },
    {
      name: "Postgresql",
      imgLink: "https://www.svgrepo.com/show/354200/postgresql.svg",
    },
    {
      name: "NextJs",
      imgLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1735388059/fn7eauiypwssdrb5hevv.png",
    },
  ],
  experience: [
    {
      organisation: "bhatura bakery",
      from: "2020",
      to: "2024",
      designation: "Product Manager",
    },
    {
      organisation: "bhatura bakery",
      from: "2020",
      to: "2024",
      designation: "Product Manager",
    },
  ],
  projects: [
    {
      title: "Pholio (under development)",
      description:
        "Pholio is a customizable portfolio website builder designed to help individuals showcase their skills, projects, and achievements in a professional and visually stunning way. With pre-built templates tailored for developers, designers, writers, and more, Pholio allows users to create unique portfolios effortlessly.",
      LiveLink: "https://pholio.online",
      GithubLink: "https://github.com/07CalC/Pholio",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734266489/i2rhyfkrlnihngwmemme.png",
      techUsed: [
        {
          name: "Next.js",
          imgLink:
            "https://res.cloudinary.com/dkhymc3li/image/upload/v1735388059/fn7eauiypwssdrb5hevv.png",
        },
        {
          name: "TypeScript",
          imgLink: "https://www.svgrepo.com/show/439022/typescript.svg",
        },
        {
          name: "tailwindCSS",
          imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg",
        },
        {
          name: "supabase",
          imgLink:
            "https://res.cloudinary.com/dkhymc3li/image/upload/v1735494077/ssawvwnzj8hwpk8bxnv9.png",
        },
        {
          name: "cloudinary",
          imgLink: "https://www.svgrepo.com/show/353566/cloudinary.svg",
        },
        {
          name: "Postgresql",
          imgLink: "https://www.svgrepo.com/show/354200/postgresql.svg",
        },
      ],
    },
    {
      title: "Batua",
      description:
        "Batua is a seamless personal finance web application designed to help users track their expenses and manage their budgets effortlessly. With an intuitive interface, real-time insights, and customizable categories, Batua helps users become smarter financial decision-makers.",
      LiveLink: "https://www.batua.site",
      GithubLink: "https://github.com/07CalC/batua",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734267156/fomwfubs4t4werunbjfz.png",
      techUsed: [
        {
          name: "ReactJs",
          imgLink: "https://www.svgrepo.com/show/452092/react.svg",
        },
        {
          name: "NodeJs",
          imgLink: "https://www.svgrepo.com/show/452075/node-js.svg",
        },
        {
          name: "MongoDB",
          imgLink: "https://www.svgrepo.com/show/373845/mongo.svg",
        },
        {
          name: "tailwindCSS",
          imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg",
        },
      ],
    },
    {
      title: "JeeLore",
      description:
        "JEE Lore is a comprehensive web application designed to help students prepare for JEE and NEET exams. It offers an interactive platform for solving doubts and practicing questions across various difficulty levels and topics. The app aims to provide a personalized learning experience, making exam preparation more effective and efficient.",
      LiveLink: "https://jeelore.site",
      GithubLink: "https://github.com/07CalC/jeelore",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734267902/f4qbgiwkqj91up6gztce.png",
      techUsed: [
        {
          name: "ReactJs",
          imgLink: "https://www.svgrepo.com/show/452092/react.svg",
        },
        {
          name: "NodeJs",
          imgLink: "https://www.svgrepo.com/show/452075/node-js.svg",
        },
        {
          name: "MongoDB",
          imgLink: "https://www.svgrepo.com/show/373845/mongo.svg",
        },
        {
          name: "tailwindCSS",
          imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg",
        },
        {
          name: "cloudinary",
          imgLink: "https://www.svgrepo.com/show/353566/cloudinary.svg",
        },
      ],
    },
    {
      title: "ORCR",
      description:
        "Discover a comprehensive platform designed for students to access the previous year’s opening and closing ranks of top colleges accepting JEE Advanced, JEE Mains, and BITSAT scores. Simplify your admission journey with precise and up-to-date rank data at your fingertips.",
      LiveLink: "https://orcr.jeelore.site",
      GithubLink: "https://github.com/07CalC/orcr",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734268091/ol7ncm8jaljkwujgz5dt.png",
      techUsed: [
        {
          name: "ReactJs",
          imgLink: "https://www.svgrepo.com/show/452092/react.svg",
        },
      ],
      GitlabLink: "",
    },
  ],

  education: [
    {
      institute: "ABC University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      from: "2020",
      to: "2024",
      cgpa: "8.8",
    },
    {
      institute: "ABC University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      from: "2020",
      to: "2024",
      cgpa: "8.8",
    },
  ],
};
