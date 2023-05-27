import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './scss/home.scss';
import projects from '../images/Projects.png';

export default function Home () {
  return (
    <div id='home-page'>
      <Intro />

      <div id='content' className='container my-5'>
        <div id='bio' className='mb-5 row justify-content-center'>
          <Bio />
        </div>

        <ProjectLink />
      </div>
    </div>
    
  );
}

function Intro () {
  return (
    <div id='home-intro' className='background'>
      <div className='text-center filler'>
        <Card className='mx-auto border-secondary'>
          <Card.Header><h1>Welcome</h1></Card.Header>
          <Card.Body><h5>Enjoy my portfolio. Well, at least try to.</h5></Card.Body>
        </Card>
      </div>
    </div>
  )
}

function Bio () {
  return (
    <div id='bio' className='row justify-content-center'>
      <Card className='text-center p-0'>
        <Card.Header>Biography</Card.Header>
        <Card.Body>
          <p>Hey, it's Kyle. I'm a biology major turned web developer. I'm having fun building stuff and look forward to finding a job in this field. I have plenty of hobbies: skateboarding, gaming, music, crocheting, cooking, language learning; but no time to indulge in them. :( </p>
        </Card.Body>
      </Card>
    </div>
  )
}

function ProjectLink () {
  return(
    <div className='row justify-content-center'>
      <Card className='text-center col-6'>
        <Card.Header>Check out my projects page</Card.Header>
        <Link to='/projects'>
          <Card.Img variant='bottom' src={projects} />
        </Link>
      </Card>
  </div>
  )
  
}