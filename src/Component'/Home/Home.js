import React from 'react';
import { Button, Container} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import NavigationBar from '../NavigationBar/NavigationBar';

const Home = () => {
    const history = useHistory();
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <div className='d-flex justify-content-center mt-5'>
                <Button onClick = {()=> history.push("/addInfo")}>Add Information</Button>
            </div>
            <div className='d-flex justify-content-center mt-3 mb-5'>
                <Button>Search Information</Button>
            </div>
        </Container>
    );
};

export default Home;