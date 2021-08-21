export interface PersonalData {
  lastUpdate: string;
  description: string;
  languages: string[];
  school: School;
  dates: Dates;
  contacts: Contacts;
  personal: Personal;
  employees: Employee[];
  complementary: Complementary[];
  nodeLists: NodeLists;
}

export interface School {
  institute: string;
  course: string;
  date: string;
  logo: string;
}

export interface Dates {
  developingSince: number;
  frontendSince: number;
}

export interface Contacts {
  phone: string;
  email: string;
  web: string;
  github: string;
  codesandbox: string;
  address: string;
  linkedin: string;
}

export interface Personal {
  logo: string;
  name: string;
  subtitle: string;
  birthDate: string;
}

export interface Employee {
  position: string;
  provider: string;
  location: string;
  description: string;
  date: string;
  awards?: string[];
}

export interface Complementary {
  institute: string;
  course: string;
  date: string;
  logo: string;
}

export interface NodeLists {
  experience: Experience;
  stillLearning: StillLearning;
  softwares: Softwares;
}

export interface Experience {
  title: string;
  items: string[];
}

export interface StillLearning {
  title: string;
  items: string[];
}

export interface Softwares {
  title: string;
  items: string[];
}

const personalData: PersonalData = {
  lastUpdate: "29 de Março de 2021",
  description:
    "Desenvolvedor desde 2008, trabalhando especificamente com plataformas próprias de e-commerce desde 2016, e 100% focado em B2B desde 2018. Apesar da paixão por front-end, já atuei com todas as frentes de desenvolvimento. Executei trabalhos dentro de empresas como a Infracommerce e Netshoes, e cuidei de projetos de clientes de grande porte, como Unilever, Mondelez, Ray-Ban, 3M, Montblanc, Globo, Havaianas, Três Corações, Thomson Reuters, Revista dos Tribunais, Instituto GPA, entre outros.",
  languages: [
    "Português nativo/fluente",
    "Inglês intermediário/técnico",
    "Espanhol básico",
  ],
  school: {
    institute: "Universidade Presbiteriana Mackenzie",
    course: "Publicidade e Propaganda (Criação)",
    date: "Jan/2012 - Dez/2015",
    logo: "mackenzie.png",
  },
  dates: {
    developingSince: 2008,
    frontendSince: 2015,
  },
  contacts: {
    phone: "(11) 98877-9888",
    email: "eu@henriquekuwai.com.br",
    web: "henriquekuwai.com.br",
    github: "https://github.com/rikezenho",
    codesandbox: "Rikezenho",
    address: "Saúde, Z/S - São Paulo, SP",
    linkedin: "http://br.linkedin.com/in/henriquekuwai",
  },
  personal: {
    logo: "logo.png",
    name: "Henrique Hideki Kuwai",
    subtitle: "Solteiro, brasileiro",
    birthDate: "1993-06-20",
  },
  employees: [
    {
      position: "Specialist Engineer - Front-end",
      provider: "Creditas",
      location: "Berrini, São Paulo",
      description:
        "Contribuo com 2 squads como especialista, focando principalmente na evolução do front-end React de um app de financiamento automotivo, mas também atuando em demandas de outras tecnologias.",
      date: "Abr/21 - Current",
    },
    {
      position: "Arquiteto de software",
      provider: "Infracommerce",
      location: "Vila Olímpia, São Paulo",
      description:
        "Orientei times e desenvolvedores, tentando exercitar o cuidado em cada etapa da implantação de uma feature ou projeto, sempre tentando fomentar o debate para a definição das soluções técnicas mais adequadas. Realizei pesquisas de soluções e bibliotecas dependendo da necessidade, bem como a criação de POCs para aprovar ideias, além de reforçar boas práticas de código e fluxos de trabalho, tentando disseminar o que pude de conhecimento, tanto em hard quanto soft skills. Tenho grande preocupação com o developer experience, e portanto, criei muitas documentações e ferramentas pensando nesse fim.",
      date: "Nov/20 - Mar/21",
    },
    {
      position: "Líder técnico",
      provider: "Infracommerce",
      location: "Vila Olímpia, São Paulo",
      description:
        "Fui um dos pilares da construção de uma nova plataforma de e-commerce B2B para a empresa, reformulando todo o front-end do site final. Também atuei orientando times multidisciplinares, garantindo a qualidade de código nas equipes que pude acompanhar. Participei da definição de processos internos, criei ferramentas para facilitar estes processos e também realizei diversas melhorias, correções e implementação de novas tecnologias no core da plataforma.",
      date: "Nov/18 - Nov/20",
    },
    {
      position: "Desenvolvedor front-end",
      provider: "Netshoes",
      location: "Liberdade, São Paulo",
      description:
        "Participei da criação de novas features para a plataforma e também para o back-office, integrei novas lojas e participei de forma ativa na disseminação de conhecimento técnico.",
      date: "Abr/18 - Out/18",
    },
    {
      position: "Líder técnico front-end",
      provider: "Infracommerce",
      location: "Vila Olímpia, São Paulo",
      description:
        "Liderei o desenvolvimento de novas lojas. Atuei coordenando, dando suporte para as equipes e orientando a implantação das lojas desde o escopo, quebra das atividades, até o go live do projeto. Também desenvolvi ferramentas para facilitar o dia a dia da TI da empresa.",
      date: "Nov/17 - Abr/18",
    },
    {
      position: "Desenvolvedor front-end",
      provider: "Infracommerce",
      location: "Vila Olímpia, São Paulo",
      description:
        "Atuei como desenvolvedor em diversos e-commerces de médio e grande porte, tanto na implementação de novas features, quanto melhorias e correções de bugs.",
      date: "Jul/16 - Nov/17",
      awards: ["Prêmio de revelação TI 2016"],
    },
    {
      position: "Desenvolvedor full Stack",
      provider: "Agevole",
      location: "Santo Amaro, São Paulo",
      description:
        "Criei e mantive sites institucionais, portais, hotsites promocionais, todos com CMS próprio. Também criei sites em WordPress e ferramentas para melhorar processos, além de auxiliar a equipe em questões de web e digital.",
      date: "Jan/14 - Mar/16",
    },
  ],
  complementary: [
    {
      institute: "Udemy (online)",
      course: "Desenvolvimento AWS 2020 com foco em Serverless",
      date: "Abr/2021",
      logo: "udemy.png",
    },
    {
      institute: "Udemy (online)",
      course: "Entendendo TypeScript",
      date: "Mar/2021",
      logo: "udemy.png",
    },
    {
      institute: "Udemy (online)",
      course: "Docker: Ferramenta essencial para desenvolvedores",
      date: "Nov/2018",
      logo: "udemy.png",
    },
    {
      institute: "Udemy (online)",
      course: "React + Redux (by Leonardo Moura Leitão)",
      date: "Set/2018",
      logo: "udemy.png",
    },
    {
      institute: "Udemy (online)",
      course: "Learn and Understand NodeJS (by Tony Alicea)",
      date: "Jun/2018",
      logo: "udemy.png",
    },
    {
      institute: "Alura (online)",
      course: "Vue.js parte 2: construindo Single Page Applications",
      date: "Dez/2017",
      logo: "alura.png",
    },
  ],
  nodeLists: {
    experience: {
      title: "Tenho experiência ou já trabalhei com...",
      items: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "Docker",
        "Docker Compose",
        "Chrome Extensions",
        "JavaScript",
        "TDD",
        "E2E Tests",
        "ES6+",
        "React",
        "Redux",
        "Material UI",
        "Vuetify",
        "Vue.js",
        "jQuery",
        "Git",
        "SVN",
        "CI/CD",
        "Gitlab CI",
        "Webpack",
        "Express",
        "Node.js",
        "MongoDB",
        "Mustache.js",
        "Apache Webserver",
        "Apache Velocity",
        "PHP",
        "MySQL",
        "WordPress",
        "Scrum",
        "Kanban",
        "Design responsivo",
        "Design de interfaces",
        "SEO",
        "Google Analytics",
        "GTM",
      ],
    },
    stillLearning: {
      title: "Aperfeiçoando...",
      items: [
        "GraphQL",
        "ELK Stack",
        "Elixir",
        "TypeScript",
        "Golang",
        "Kafka",
        "RabbitMQ",
        "gRPC",
      ],
    },
    softwares: {
      title: "Softwares com aptidão",
      items: [
        "SO Windows",
        "Linux based SOs",
        "VS Code",
        "Adobe Photoshop",
        "Pacote Office",
        "Google Docs/Sheets/Presentations",
      ],
    },
  },
};

export { personalData };
