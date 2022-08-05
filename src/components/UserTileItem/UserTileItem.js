import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UsersTileItem({ user }) {
    const { name, email, registered, picture, login } = user;
    return (
        <>
            <Col md={3} className="user-tiles-item">
                <Row class="d-flex align-items-center">
                    <Col>
                        <Image style={{ width: 100 }}
                            src=
                            {picture.large}
                            roundedCircle
                        />
                    </Col>
                    <Col>
                        <h6>{name.last}, {name.first}</h6>
                        <p>{email}</p>
                        <p>icon {registered.date}</p>
                        <p>icon {login.username}</p>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default UsersTileItem;