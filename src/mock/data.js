import { nanoid } from 'nanoid';

// HEAD DATA
export const navbarData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'profile.jpg',
  title: '',
  name: 'Tyler Lenick',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  techs: [
    {
      id: nanoid(),
      name: 'react',
      url: 'https://reactjs.org/',
    },
    {
      id: nanoid(),
      name: 'node-js',
      url: 'https://nodejs.org/en/',
    },
    {
      id: nanoid(),
      name: 'vuejs',
      url: 'https://vuejs.org/',
    },
    {
      id: nanoid(),
      name: 'laravel',
      url: 'https://laravel.com/',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'purina.jpg',
    title: 'Purina Catchow myPerks',
    info: 'Brand loyalty site that allows consumers to receive points based on Purina product purchases. After receiving points, consumers can spend them for additional rewards.',
    info2: '',
    url: 'https://myperks.catchow.com/',
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tyler-lenick-069960ba/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tylerlenick',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/tylenick',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
