import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center mt-5'>
                <Button>Add Information</Button>
            </div>
            <div className='d-flex justify-content-center mt-3 mb-5'>
                <Button>Search Information</Button>
            </div>
        </Container>
    );
};

export default Home;