import React from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSide from '../Share/RightSide/RightSide';
import LeftSide from '../Share/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>

            <Header></Header>

            <Container>
                <Row>
                    <Col lg={3}><LeftSide></LeftSide></Col>
                    <Col lg={6}><h3>Main is coming</h3></Col>
                    <Col lg={3}><RightSide></RightSide></Col>
                </Row>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default Main;