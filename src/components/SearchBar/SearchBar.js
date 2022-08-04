import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [search, setSearch] = useState("");
    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
    };
    return (
        <>
            <InputGroup className="mb-3" size='sm'>
                <Form.Control
                    placeholder="Search...."
                    aria-label="Username"
                    described="basic-addon1"
                    value={search}
                    onChange={(e) => onInputChange(e.target.value)}
                />
            </InputGroup>
        </>
    );
}

export default SearchBar;