import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function FilterBy({ handleFilterByGender }) {
    return (
        <>
            <Form>
                {['radio'].map((type) => (
                    <div key={`reverse-${type}`}>
                        <Row md="auto">
                            <Col>
                                <Form.Text>Filter By: </Form.Text>
                            </Col>
                            <Col>
                                <Form.Check
                                    onClick={(e) => handleFilterByGender(e.target.value)} aria-label="all" value="all"
                                    reverse
                                    label="All"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-1`}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    onClick={(e) => handleFilterByGender(e.target.value)} aria-label="male" value="male"
                                    reverse
                                    label="Male"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-2`}
                                /></Col>
                            <Col>

                                <Form.Check
                                    onClick={(e) => handleFilterByGender(e.target.value)} aria-label="Female" value="female"
                                    reverse
                                    label="Female"
                                    name="group1"
                                    type={type}
                                    id={`reverse-${type}-3`}
                                />
                            </Col>
                        </Row>
                    </div>
                ))}
            </Form>
        </>
    );
}

export default FilterBy;