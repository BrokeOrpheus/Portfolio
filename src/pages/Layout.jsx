import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import './scss/layout.scss';

export default function Layout () {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  )
}

function NavBar () {
  return (
    <Navbar fixed="top" variant='custom' className='justify-content-between'>
      <Nav>
        <Nav.Item>
          <Link to='/' className='link-style'>
            <h5>Home</h5>
          </Link>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <Link to='/projects' className='link-style'>
            <h5>Projects</h5>
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

function Footer () {
  return (
    <div id='footer' className='container-fluid'>
      <div className='row align-items-center'>
        <div className='col-6'>
          <span>Big thanks to Altcademy</span>
        </div>
        <div className='col-6 text-end'>
          <a href='https://github.com/BrokeOrpheus' target='_blank'><i className="fa-brands fa-github fa-fw me-2"></i></a>
          <a href='https://www.linkedin.com/in/kyle-register-096143210/' target='_blank'><i className="fa-brands fa-linkedin-in fa-fw"></i></a>
        </div>
      </div>
    </div>
  )
}