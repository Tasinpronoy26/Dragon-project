import React from 'react';
import logo from '../../../src/assets/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <Container className='text-center my-4'>

            <div><img src={logo} alt="" />
                <p className='my-2 text-secondary fs-6'>Journalism Without Fear or Favour</p>
                <div className='mb-4 text-secondary fs-4'> <span className='text-black'>{moment().format('dddd')}</span> {moment().format('MMMM D YYYY')}</div>
            </div>
            <div className='d-flex text-bg-light p-3 px-5 py-3 gap-3'>
                <Button type="button" class="btn btn-danger">Latest</Button>
                <Marquee className='text-black'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            <Navbar className='mt-3' expand="lg" variant="light">


                <Nav className='mx-auto'>
                    <Nav.Link className='ms-2'>Home</Nav.Link>
                    <Nav.Link className='ms-2'>Career</Nav.Link>
                    <Nav.Link className='ms-2'>About</Nav.Link>
                </Nav>
                <Nav className='gap-2'>
                    <Nav.Link className='ms-2'>Profile</Nav.Link>
                    <button type="button" class="btn btn-dark px-3">Log in</button>
                </Nav>



            </Navbar>



        </Container>
    );
};

export default Header;