import './TileViewButton.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function TileViewButton() {
    return (
        <>
            <Row>
                <Col>
                    <InputGroup size='sm'>
                        <InputGroup.Text>Tile View</InputGroup.Text>
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup size='sm'>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </InputGroup>
                </Col>
            </Row>
        </>
    );
}

export default TileViewButton;