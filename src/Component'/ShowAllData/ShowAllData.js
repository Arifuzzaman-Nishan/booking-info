import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import DisplayInfo from '../DisplayInfo/DisplayInfo';
import NavigationBar from '../NavigationBar/NavigationBar';


const ShowAllData = () => {

    const [allInfos, setAllInfos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showAllInfo')
            .then(res => res.json())
            .then(data => setAllInfos(data))
    }, [])


    return (
        <Container>
            <NavigationBar></NavigationBar>
                <Table striped hover className="mt-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Mobile</th>
                            <th>District</th>
                        </tr>
                    </thead>

                    {
                        allInfos.map(allInfo => <DisplayInfo allInfo={allInfo} key={allInfo._id}></DisplayInfo>)
                    }
                </Table>
        </Container >
    );
};

export default ShowAllData;