import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'y2000.dev', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: "y2000's website.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'y2000',
  subtitle: "I'm a Data Engineer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/OTA2000',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/yshr1200',
    },
    {
      id: nanoid(),
      name: 'hot-tab',
      url: 'https://sauna-ikitai.com/saunners/7812',
    },
    {
      id: nanoid(),
      name: 'file',
      url: 'https://note.com/y2000',
    },
    {
      id: nanoid(),
      name: 'edit',
      url: 'https://zenn.dev/y2000',
    },
    {
      id: nanoid(),
      name: 'lastfm',
      url: 'https://www.last.fm/user/OTA2000',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/y2000/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
