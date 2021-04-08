import React, { useState } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import NavigationBar from '../NavigationBar/NavigationBar';

const Search = () => {
    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();

    const [searchResult, setSearchResult] = useState({});
    const [hidden, setHidden] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = data => {
        fetch("https://dry-sands-10727.herokuapp.com/search?name=" + data.name)
            .then(res => res.json())
            .then(data => {
                setSearchResult(data);
                setHidden(true);
            })
            .catch(err => {
                setHidden(false);
                setError(true);
            })
        reset();
    }

    console.log(searchResult);
    const { name, email, id, mobile, district } = searchResult;

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Card className="mt-5 mx-auto p-4" style={{ width: "20rem" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Enter your searching name" {...register("name", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="d-flex justify-content-center">
                        <input className="btn btn-danger" type="submit" />
                    </div>
                </form>
            </Card>

            {
                hidden && <Table className="mt-5" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Mobile</th>
                            <th>District</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{id}</td>
                            <td>{mobile}</td>
                            <td>{district}</td>
                        </tr>
                    </tbody>
                </Table>
            }
            {
                error && <div className="mt-5">
                    <h1 className="text text-danger text-center">Couldn't found this name in database</h1>
                </div>
            }
        </Container>
    );
};

export default Search;