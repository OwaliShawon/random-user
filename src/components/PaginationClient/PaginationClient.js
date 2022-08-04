import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

function PaginationClient({ users, currentPage = 1, handlePageChange }) {
    let pages = [];
    for (let page = 1; page <= Math.ceil(users.length / 10); page++) {
        pages.push(
            <PageItem onClick={() => handlePageChange(page)} key={page} active={page === currentPage}>
                {page}
            </PageItem>,
        );
    }

    if (pages.length === 0) return null;

    return (
        <Pagination className='d-flex justify-content-end'>
            <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            />
            <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {pages}
            <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pages.length}
            />
            <Pagination.Last
                onClick={() => handlePageChange(pages.length)}
                disabled={currentPage === pages.length}
            />
        </Pagination>
    );
}

export default PaginationClient;