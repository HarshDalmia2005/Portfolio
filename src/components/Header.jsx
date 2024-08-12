import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { git, insta, linkedin } from '../utils/icons';
import { forwardRef } from 'react';

function Header({ handleClick1, handleClick2, handleClick3, handleClick4, refer }) {
    return (
        <Navbar expand="lg" className=" text-white" ref={refer}>
            <Container>
                <Navbar.Brand href="#home" className='font-bold text-white'>{'</> Portfolio'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " variant="light">
                    <Nav className="me-auto d-flex align-items-center font-bold">
                        <Nav.Link href="#home" className='text-white hover:bg-yellow-400 hover:text-blue-800 rounded-xl'>Home</Nav.Link>
                        <Nav.Link onClick={handleClick1} className='text-white hover:bg-yellow-400 hover:text-blue-800 rounded-xl'>Education</Nav.Link>
                        <Nav.Link onClick={handleClick2} className='text-white hover:bg-yellow-400 hover:text-blue-800 rounded-xl'>Skills</Nav.Link>
                        <Nav.Link onClick={handleClick3} className='text-white hover:bg-yellow-400 hover:text-blue-800 rounded-xl'>Projects</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center">
                        <div className='socials d-flex gap-3 text-white/80'>
                            <a href="https://github.com/HarshDalmia2005" className='hover:text-white'>{git}</a>
                            <a href="https://www.instagram.com/harsh_dalmia2005?igsh=MXZycHhkM3pkYWhjMQ==" className='hover:text-white'>{insta}</a>
                            <a href="http://www.linkedin.com/in/harsh-dalmia2005" className='hover:text-white'>{linkedin}</a>
                        </div>
                        <button onClick={handleClick4} className='font-bold bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-3xl ml-4'>
                            Contact
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default forwardRef(Header);
