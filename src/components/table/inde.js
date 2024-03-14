import React from "react";
import './tableContent.css';

import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function TableContent() {
    return (
        <div className="home">
            <Table className="table table-borderless" striped bordered hover >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Participant</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Praia</td>
                        <td>Praia de Patacho</td>
                        <td>16/03/2024</td>
                        <td>Patacho-Porto de Pedras/AL</td>
                        <td>Melquisedeque</td>
                        <td>
                            <div>
                                <Button as="a" variant="primary">Edit</Button>
                                <Button as="a" variant="danger" className="btn-options">Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cinema</td>
                        <td>Kinoplex</td>
                        <td>15/03/2024</td>
                        <td>Mcz shopping-Jatiúca-Maceió/AL</td>
                        <td>Melquisedeque</td>
                        <td>
                            <div>
                                <Button as="a" variant="primary">Edit</Button>
                                <Button as="a" variant="danger" className="btn-options">Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cinema</td>
                        <td>Kinoplex</td>
                        <td>15/03/2024</td>
                        <td>Mcz shopping-Jatiúca-Maceió/AL</td>
                        <td>Melquisedeque</td>
                        <td>
                            <div>
                                <Button as="a" variant="primary">Edit</Button>
                                <Button as="a" variant="danger" className="btn-options">Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Cinema</td>
                        <td>Kinoplex</td>
                        <td>15/03/2024</td>
                        <td>Mcz shopping-Jatiúca-Maceió/AL</td>
                        <td>Melquisedeque</td>
                        <td>
                            <div>
                                <Button as="a" variant="primary">Edit</Button>
                                <Button as="a" variant="danger" className="btn-options">Delete</Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TableContent;