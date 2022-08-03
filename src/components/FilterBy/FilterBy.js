import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FilterBy() {
    return (
        <>
            <Row xs="auto">
                <Col>
                    <InputGroup size='sm'>
                        <InputGroup.Text>Filter By: </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size='sm'>
                        <InputGroup.Radio aria-label="Radio button for following text input" />
                        <InputGroup.Text>All</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size='sm'>
                        <InputGroup.Radio aria-label="Radio button for following text input" />
                        <InputGroup.Text>Male</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size='sm'>
                        <InputGroup.Radio aria-label="Radio button for following text input" />
                        <InputGroup.Text>Female</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
        </>
    );
}

export default FilterBy;