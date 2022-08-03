import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserTableItem({ user }) {
    const { name, email, registered, picture, login } = user;
    // console.log(user);
    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <Row class="d-flex align-items-center">
                            <Col md={2}>
                                <Image style={{ width: 100 }}
                                    src=
                                    {picture.large}
                                    roundedCircle
                                />
                            </Col>
                            <Col>
                                <h6>{name.last}, {name.first}</h6>
                                <p>{email}</p>
                            </Col>
                        </Row>
                    </td>
                    <td>{registered.date}</td>
                    <td>{login.username}</td>
                </tr>
            </tbody>
        </>
    );
}

export default UserTableItem;