import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UsersTable() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>Registration Date</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Row class="d-flex align-items-center">
                            <Col md={2}>
                                <Image style={{ width: 100 }}
                                    src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                                    roundedCircle
                                />
                            </Col>
                            <Col>
                                <h6>last name, first name</h6>
                                <p>email</p>
                            </Col>
                        </Row>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <td>
                        <Row class="d-flex align-items-center">
                            <Col md={2}>
                                <Image style={{ width: 100 }}
                                    src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                                    roundedCircle
                                />
                            </Col>
                            <Col>
                                <h6>last name, first name</h6>
                                <p>email</p>
                            </Col>
                        </Row>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default UsersTable;