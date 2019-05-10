import project1 from '../assets/project1.png';
import project2 from '../assets/project(2).png';
import project3 from '../assets/project(3).png';
import project4 from '../assets/project(4).png';

const PROJECTS = [
  {
    id: 1,
    title: 'Example React Application',
    description: 'A React App that I built, involving JS and core web dev concepts!',
    link: 'http://green-power.surge.sh/',
    image: project1
  },
  {
    id: 2,
    title: 'My API',
    description: 'A REST API that I built from scratch with GET and POST requests!',
    link: 'http://209.97.183.13',
    image: project2
  },
  {
    id: 3,
    title: 'A Crypto Coin Exchange Project',
    description: 'A React Application for CryptoCoin.',
    link: 'https://crypto-react-cash.herokuapp.com',
    image: project3
  },
  {
    id: 4,
    title: 'Hacker News App',
    description: 'News App built with React, latest stories',
    link: 'https://ajax27-news.herokuapp.com',
    image: project4
  }
];

export default PROJECTS;