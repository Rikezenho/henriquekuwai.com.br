import { PersonalData } from "../../types/data";

const personalData: PersonalData = {
  aboutTitle: "About me",
  description:
    "I'm developing things since 2008. I've worked in e-commerce market from 2016 to 2021, and currently, I'm working at a fintech from financial market. Despite my preference in front-end, I've already worked in every part of software development: from back-end, to databases. I've did jobs in enterprises like Creditas, Infracommerce and Netshoes, and I've participated in big projects for clients like Unilever, Mondelez, Ray-Ban, 3M, Montblanc, Globo, Havaianas, Thomson Reuters, and some others.",
  languagesTitle: "Languages",
  languages: [
    "Native portuguese",
    "Intermediate/technical english",
    "Basic spanish",
  ],
  schoolTitle: "Education",
  school: {
    institute: "Presbyterian University Mackenzie",
    course: "Bachelor's degree in Advertising",
    date: "Jan/2012 - Dec/2015",
  },
  contacts: {
    phone: "+55 (11) 98877-9888",
    email: "eu@henriquekuwai.com.br",
    web: "henriquekuwai.com.br",
    github: "https://github.com/rikezenho",
    codesandbox: "Rikezenho",
    address: "Saúde - São Paulo, SP",
    linkedin: "http://br.linkedin.com/in/henriquekuwai",
  },
  personal: {
    logo: "logo.png",
    name: "Henrique Hideki Kuwai",
    shortName: "Henrique Kuwai",
    subtitle: "Single, brazilian",
    birthDate: "1993-06-20",
  },
  employeesTitle: "Professional history",
  employees: [
    {
      provider: "Creditas",
      location: "Berrini, São Paulo",
      positions: [
        {
          position: "Specialist Engineer",
          description:
            "I'm leading the evolution (mainly in front-end) of an app focused in car financing B2B, and I also participate in other activities using technologies like Kotlin with Spring and Ruby on Rails. I work either in the product part focused in external clients, either in the part focused in internal clients.",
          date: "Apr/21 - Current",
        },
      ],
    },
    {
      provider: "Infracommerce",
      location: "Vila Olímpia, São Paulo",
      positions: [
        {
          position: "Software Architect",
          description:
            "I've oriented teams and developers, always enforcing the ownership in each part of the implementation of a feature; participating and encouraging discussions about technical solutions; searching for solutions and creating proofs of concept to argue my ideas; and always enforcing good practices in coding and workflows. I've also spread all my knowledge about the system with documentations and trainings.",
          date: "Nov/20 - Mar/21",
        },
        {
          position: "Tech Leader",
          description:
            "I was one of the leaders in a project for building a new e-commerce B2B platform, architecting whole front-end part. I've oriented multidisciplinary teams, always enforcing a good code quality. I've helped to de fine internal processes, created tools for developer experience and did many improvements, fixes and implementations of new technologies in the platform's core.",
          date: "Nov/18 - Nov/20",
        },
      ],
    },
    {
      provider: "Netshoes",
      location: "Liberdade, São Paulo",
      positions: [
        {
          position: "Front-end Developer",
          description:
            "I've participated in the development of some new features for the front platform and backoffice system, created new e-commerce stores and also actively participated on spreading technical knowledge with the front-end team.",
          date: "Apr/18 - Oct/18",
        },
      ],
    },
    {
      provider: "Infracommerce",
      location: "Vila Olímpia, São Paulo",
      positions: [
        {
          position: "Front-end Tech Leader",
          description:
            "I led the development of new e-commerce stores. I collaborated coordinating, giving support for the teams and guiding the implementation of new stores since the first scope, followed by the planning of the activities, and finally releasing the project in production. I've also created tools for better developer experience.",
          date: "Nov/17 - Apr/18",
        },
        {
          position: "Front-end Developer",
          description:
            "I worked as a developer in many medium and big e-commerces, implementing new features and adding improvements and bugfixes.",
          date: "Jul/16 - Nov/17",
          awards: ["New Employees Award, 2016"],
        },
      ],
    },
    {
      provider: "Agevole",
      location: "Santo Amaro, São Paulo",
      positions: [
        {
          position: "Fullstack Developer",
          description:
            "Created many institutional webpages, portals, promotional hotsites, always using a CMS in PHP + MySQL created by me, and also created some internal tools to simplify internal processes. Some other activities involved creating sites with WordPress, mentoring and helping my coworkers with digital and web insights, and participated from briefings with external clients.",
          date: "Jan/14 - Mar/16",
        },
      ],
    },
  ],
  complementaryTitle: "Complementary courses",
  complementary: [
    {
      institute: "Udemy (online)",
      course: "AWS 2020 Development, focusing in Serverless",
      date: "Apr/2021",
    },
    {
      institute: "Udemy (online)",
      course: "Understanding TypeScript",
      date: "Mar/2021",
    },
    {
      institute: "Udemy (online)",
      course: "Docker: Essential tool for developers",
      date: "Nov/2018",
    },
    {
      institute: "Udemy (online)",
      course: "React + Redux (by Leonardo Moura Leitão)",
      date: "Sep/2018",
    },
    {
      institute: "Udemy (online)",
      course: "Learn and Understand NodeJS (by Tony Alicea)",
      date: "Jun/2018",
    },
    {
      institute: "Alura (online)",
      course: "Vue.js part 2: building Single Page Applications",
      date: "Dec/2017",
    },
  ],
  nodeLists: [
    {
      title: "I know, and I've worked with...",
      items: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "Docker",
        "Docker Compose",
        "Chrome Extensions",
        "JavaScript",
        "TypeScript",
        "TDD",
        "E2E Tests",
        "ES6+",
        "Next.js",
        "React",
        "Redux",
        "Material UI",
        "Vuetify",
        "Vue.js",
        "Ember 2",
        "jQuery",
        "Git",
        "Git Flow",
        "CI/CD",
        "Gitlab CI",
        "CircleCI",
        "Webpack",
        "Express",
        "Node.js",
        "MongoDB",
        "Handlebars",
        "Apache Webserver",
        "PHP",
        "MySQL",
        "WordPress",
        "Scrum",
        "Kanban",
        "Responsive design",
        "Interface design",
        "SEO",
        "Google Analytics",
        "GTM",
      ],
    },
    {
      title: "Learning...",
      items: [
        "GraphQL",
        "Kotlin with Spring",
        "Ruby on Rails",
        "ELK Stack",
        "Elixir",
        "Golang",
        "Kafka",
        "RabbitMQ",
      ],
    },
    {
      title: "Softwares",
      items: [
        "Windows",
        "Linux based OSs",
        "VS Code",
        "Adobe Photoshop",
        "Office",
        "Google Docs/Sheets/Presentations",
      ],
    },
  ],
  linkedInTitle: "See more on my LinkedIn:",
  sourceCodeTitle: "This resume sourcecode:",
  lastUpdateTitle: "Last updated on",
  lastUpdate: "August 22, 2021",
};

export { personalData };
