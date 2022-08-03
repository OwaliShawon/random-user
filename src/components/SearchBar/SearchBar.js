import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
    return (
        <>
            <InputGroup className="mb-3" size='sm'>
                <Form.Control
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    );
}

export default SearchBar;