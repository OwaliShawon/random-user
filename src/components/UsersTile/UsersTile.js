import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./UserTile.css";

function UsersTile() {
    return (
        <Row>
            <Col md={3} className="user-tiles-item">
                <Row class="d-flex align-items-center">
                    <Col>
                        <Image style={{ width: 100 }}
                            src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                            roundedCircle
                        />
                    </Col>
                    <Col>
                        <h6>last name, first name</h6>
                        <p>email</p>
                        <p>icon Registration</p>
                        <p>icon username</p>
                    </Col>
                </Row>
            </Col>
            <Col md={3} className="user-tiles-item">
                <Row class="d-flex align-items-center">
                    <Col>
                        <Image style={{ width: 100 }}
                            src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                            roundedCircle
                        />
                    </Col>
                    <Col>
                        <h6>last name, first name</h6>
                        <p>email</p>
                        <p>icon Registration</p>
                        <p>icon username</p>
                    </Col>
                </Row>
            </Col>
            <Col md={3} className="user-tiles-item">
                <Row class="d-flex align-items-center">
                    <Col>
                        <Image style={{ width: 100 }}
                            src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                            roundedCircle
                        />
                    </Col>
                    <Col>
                        <h6>last name, first name</h6>
                        <p>email</p>
                        <p>icon Registration</p>
                        <p>icon username</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default UsersTile;