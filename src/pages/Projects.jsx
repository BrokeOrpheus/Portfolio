import Card from 'react-bootstrap/Card';
import './scss/projects.scss';

import appleClone from '../images/Apple-Clone.png';
import newsweekClone from '../images/Newsweek-Clone.png';
import airbnbClone from '../images/Airbnb-Clone.png';
import shoppingCart from '../images/Shopping Cart.png';
import toDoList from '../images/To-do List.png';
import mathGame from '../images/Math Game.png';
import movieFinder from '../images/Movie Finder.png';
import currencyConverter from '../images/Currency Converter.png';

export default function Projects () {
  return (
    <div id='project-page'>

      <Intro />

      <div className='container'>
        <div className='row text-center'>

          <Project title='Currency Converter' img={currencyConverter} url='https://starlit-mermaid-f71daf.netlify.app/' />
          <Project title='Movie Finder' img={movieFinder} url='https://sensational-creponne-75cc60.netlify.app/' />

          <Project title='Math Game' img={mathGame} url='https://melodious-frangipane-7a1d87.netlify.app/' />
          <Project title='To-do List' img={toDoList} url='https://cerulean-dragon-a53ae8.netlify.app/' />
          <Project title='Shopping Cart' img={shoppingCart} url='https://loquacious-chimera-93cb3d.netlify.app/' />

          <Project title='Newsweek Clone' img={newsweekClone} url='https://moonlit-cupcake-d9fe03.netlify.app/' />
          <Project title='Airbnb' img={airbnbClone} url='https://courageous-monstera-ab423d.netlify.app/' />
          <Project title='Apple Clone' img={appleClone} url='https://hilarious-llama-441e1d.netlify.app/' />
        </div>
      </div>
    </div>
  )
}

function Intro () {
  return (
    <div id='project-intro' className='background'>
      <div className='container text-center filler'>
        <Card className='mx-auto'>
          <Card.Header><h1>My Projects</h1></Card.Header>
          <Card.Body><h5>A coding journey</h5></Card.Body>
        </Card>
      </div>
    </div>
  )
}

function Project ({title, img, url}) {
  return(
    <Card className='col-4 text-center my-5 mx-auto'>
      <Card.Header>{title}</Card.Header>
      <a href={url} target='_blank' rel='noreferrer'>
        <Card.Img src={img} variant='bottom' />
      </a>
    </Card>
  )
}