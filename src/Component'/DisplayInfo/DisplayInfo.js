import React, { useState } from 'react';
import { Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";



const DisplayInfo = ({ allInfo: { _id, name, id, email, mobile, district } }) => {


    const [update, setUpdate] = useState(false);

    const [updateValue, setUpdateValue] = useState({
        name: "",
        email: "",
        id: "",
        mobile: "",
        district: ""
    });


    // for delete
    const [hide, setHide] = useState(true);
    const handleDelete = (id) => {
        fetch(`https://dry-sands-10727.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setHide(false);
                }
            })
    }

    const handleLoadData = () => {
        setUpdate(true);
    }

    // set updated data
    const handleUpdate = (e) => {
        const newUpdateValue = { ...updateValue };

        newUpdateValue[e.target.name] = e.target.value;
        setUpdateValue(newUpdateValue);
    }

    // submit update data
    const handleSubmitUpdate = (_id, id, name, email, mobile, district) => {

        if (updateValue.name === '') {
            updateValue.name = name;
        }
        if (updateValue.email === '') {
            updateValue.email = email;
        }
        if (updateValue.id === '') {
            updateValue.id = id;
        }
        if (updateValue.mobile === '') {
            updateValue.mobile = mobile;
        }
        if (updateValue.district === '') {
            updateValue.district = district;
        }
        console.log(updateValue);

        fetch(`https://dry-sands-10727.herokuapp.com/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateValue)
        })
            .then(res => res.json())
            .then(data => {
                alert('successfully updated');
                window.location.reload();
            })

    }


    return (
        <>
            {
                update ?
                    <tbody>
                        <tr onBlur={handleUpdate}>
                            <td>
                                <input name='name' className="form-control" defaultValue={name} type="text" />
                            </td>
                            <td>
                                <input name='email' className="form-control" defaultValue={email} type="text" />
                            </td>
                            <td>
                                <input name='id' className="form-control" defaultValue={id} type="text" />
                            </td>
                            <td>
                                <input name='mobile' className="form-control" defaultValue={mobile} type="text" />
                            </td>
                            <td>
                                <input name='district' className="form-control" defaultValue={district} type="text" />
                            </td>
                            <td>
                                <input onClick={() => handleSubmitUpdate(_id, id, name, email, mobile, district)} className="btn btn-danger" value="update" type="submit" />
                            </td>
                        </tr>
                    </tbody>
                    :
                    hide && <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{id}</td>
                            <td>{mobile}</td>
                            <td>{district}</td>
                            <td style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon onClick={handleLoadData} className="text text-success mr-4" icon={faEdit} />
                                <FontAwesomeIcon onClick={() => handleDelete(_id)} className="text text-danger" icon={faTrashAlt} />
                            </td>
                        </tr>
                    </tbody>
            }
        </>
    );
};

export default DisplayInfo;