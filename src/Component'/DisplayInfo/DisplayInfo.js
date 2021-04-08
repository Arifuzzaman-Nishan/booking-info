import React, { useState } from 'react';
import { Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const DisplayInfo = ({ allInfo: { _id, name, id, email, mobile, district } }) => {

    const [update, setUpdate] = useState(false);


    const handleDelete = (id) => {

    }

    const handleLoadData = (id) => {
        // fetch(`http://localhost:5000/loadData/${id}`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        setUpdate(true);
    }

    return (
        <>
            {
                update ?
                    <>
                        <tbody>
                            <tr>
                                <td>
                                    <input className="form-control" value={name} type="text" />
                                </td>
                                <td>
                                    <input className="form-control"  value={email} type="text" />
                                </td>
                                <td>
                                    <input className="form-control"  value={id} type="text" />
                                </td>
                                <td>
                                    <input className="form-control"  value={mobile} type="text" />
                                </td>
                                <td>
                                    <input className="form-control"  value={district} type="text" />
                                </td>
                                <td>
                                    <input className="btn btn-danger" value="update" type="submit"/>
                                </td>
                            </tr>
                        </tbody>
                    </>
                    :
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{id}</td>
                            <td>{mobile}</td>
                            <td>{district}</td>
                            <td style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon onClick={() => handleLoadData(_id)} className="text text-success mr-4" icon={faEdit} />
                                <FontAwesomeIcon onClick={() => handleDelete(_id)} className="text text-danger" icon={faTrashAlt} />
                            </td>
                        </tr>
                    </tbody>
            }
        </>
    );
};

export default DisplayInfo;