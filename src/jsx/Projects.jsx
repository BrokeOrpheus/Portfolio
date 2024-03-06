import Card from 'react-bootstrap/Card';

import appleClone from '../images/Apple-Clone.png';
import newsweekClone from '../images/Newsweek-Clone.png';
import airbnbClone from '../images/Airbnb-Clone.png';
import shoppingCart from '../images/Shopping Cart.png';
import toDoList from '../images/To-do List.png';
import mathGame from '../images/Math Game.png';
import movieFinder from '../images/Movie Finder.png';
import currencyConverter from '../images/Currency Converter.png';
import htmlBasics from '../images/HTML Basics.png';
import cssBasics from '../images/CSS Basics.png';
import soroban from '../images/soroban-practice.png';


const projectArray = [
  {
    title: 'CSS Basics',
    img: cssBasics,
    url: 'https://euphonious-liger-20f40e.netlify.app/'
  },
  {
    title: 'HTML Basics',
    img: htmlBasics,
    url: 'https://charming-cucurucho-c00f4b.netlify.app/'
  },
  {
    title: 'Currency Converter',
    img: currencyConverter,
    url: 'https://starlit-mermaid-f71daf.netlify.app/'
  },
  {
    title: 'Movie Finder',
    img: movieFinder,
    url: 'https://sensational-creponne-75cc60.netlify.app/'
  },
  {
    title: 'Math Game',
    img: mathGame,
    url: 'https://melodious-frangipane-7a1d87.netlify.app/'
  },
  {
    title: 'To-do List',
    img: toDoList,
    url: 'https://cerulean-dragon-a53ae8.netlify.app/'
  },
  {
    title: 'Shopping Cart',
    img: shoppingCart,
    url: 'https://loquacious-chimera-93cb3d.netlify.app/'
  },
  {
    title: 'Newsweek Clone',
    img: newsweekClone,
    url: 'https://moonlit-cupcake-d9fe03.netlify.app/'
  },
  {
    title: 'Airbnb Clone',
    img: airbnbClone,
    url: 'https://courageous-monstera-ab423d.netlify.app/'
  },
  {
    title: 'Apple Clone',
    img: appleClone,
    url: 'https://hilarious-llama-441e1d.netlify.app/'
  }
];


function Project ({title, img, url}) {
  return(
    <Card>
      <Card.Header>{title}</Card.Header>
      <a href={url} target='_blank'>
        <Card.Img src={img} variant='bottom' />
      </a>
    </Card>
  )
}


export function Showcase() {
  return(
    <section id='showcase'>
      <h1>Showcase</h1>
      <Project title='Soroban Practice' img={soroban} url='https://sorobanpractice.netlify.app/' />
    </section>
  )
}


export function Projects () {
  return (
    <section>
      <h1>Project List</h1>
      <div id='projects'>
        {projectArray.map(project => {
          return (
            <Project key={project.title} title={project.title} img={project.img} url={project.url} />
          )
        })}
      </div>
    </section>
  )
}