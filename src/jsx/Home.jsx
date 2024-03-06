import { useState } from 'react';

import FunStuff from './FunStuff';
import {Showcase, Projects} from './Projects';

export default function Home () {
  return (
    <>
      <Navbar />
      <Intro />
      <hr />
      <Showcase />
      <hr />
      <Bio />
      <hr />
      <Projects />
      <hr />
      <FunStuff />
    </>
  );
}

function Navbar () {
  const [navHidden, setNavHidden] = useState(true);

  return(
    <nav className={navHidden ? 'hidden' : 'shown'}>
      <div>
        <a href='https://github.com/BrokeOrpheus' target='_blank'><i className="fa-brands fa-github fa-fw"></i></a>
        <a href='https://www.linkedin.com/in/kyle-register-096143210/' target='_blank'><i className='fa-brands fa-linkedin-in fa-fw'></i></a>
      </div>
      <button onClick={() => setNavHidden(!navHidden)}>Links</button>
    </nav>
  )
}

function Intro () {
  return (
    <section id='intro'>
      <h1>Welcome.</h1>
      <p>Enjoy my portfolio.</p>
    </section>
  )
}

function Bio () {
  return (
    <section id='bio'>
      <h1>Biography</h1>
      <p>Hey, it's Kyle. I'm a biology major turned web developer. I'm having fun building stuff and look forward to finding a job in this field.
      </p>
      <p>I have plenty of hobbies: skateboarding, gaming, music, crocheting, cooking, language learning; but no time to indulge in them. :( </p>
    </section>
  )
}