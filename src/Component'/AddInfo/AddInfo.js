import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import NavigationBar from '../NavigationBar/NavigationBar';

const AddInfo = () => {
    const { reset,register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addInformation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    reset();
                    alert("Data successfully inserted");
                }
            })
    }

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Card className="mt-5 mx-auto p-4" style={{ width: "20rem" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Enter your Name" {...register("name", { required: true })} />
                        <div>
                            {errors.name && <span className="text text-danger">*This field is required</span>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Enter your ID" {...register("id", { required: true })} />
                        <div>
                            {errors.id && <span className="text text-danger">*This field is required</span>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Enter your Email" {...register("email", { required: true })} />
                        <div>
                            {errors.email && <span className="text text-danger">*This field is required</span>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="tel" className="form-control" placeholder="Enter your mobile number" {...register("mobile", { required: true })} />
                        <div>
                            {errors.mobile && <span className="text text-danger">*This field is required</span>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Enter your District" {...register("district", { required: true })} />
                        <div>
                            {errors.district && <span className="text text-danger">*This field is required</span>}
                        </div>
                    </div>
                    <input className="form-control btn btn-danger" type="submit" />
                </form>
            </Card>
        </Container>
    );
};

export default AddInfo;