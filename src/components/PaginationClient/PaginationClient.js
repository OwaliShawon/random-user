import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'
import { useState } from 'react';

function PaginationClient() {
    const [pageNumber, setPageNumber] = useState(1)
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <PageItem>{11}</PageItem>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            {/* <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}

export default PaginationClient;