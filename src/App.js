import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterBy from './components/FilterBy/FilterBy';
import TileViewButton from './components/TileViewButton/TileViewButton';
import UsersTable from './components/UsersTable/UsersTable';
import UsersTile from './components/UsersTile/UsersTile';
import PaginationClient from './components/PaginationClient/PaginationClient';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useEffectOnce } from './util/useEffectOnce';

function App() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // if (users.length !== 0) {
  //   setPageSize(users.length / 10);
  // }
  // console.log(pageNumber);

  // call data from API
  useEffectOnce(async () => {
    await fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((json) => setUsers(json.results));
  });

  return (
    <>
      <Container>
        <h1 style={{ margin: "20px 0px 20px 0px" }}>User List</h1>
        <Row>
          <Col>
            <SearchBar></SearchBar>
          </Col>
          <Col>
            <FilterBy></FilterBy>
          </Col>
          <Col xs={{ order: 'last' }} md={2} className='d-flex justify-content-end'>
            <TileViewButton></TileViewButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <UsersTable users={users}></UsersTable>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <UsersTile></UsersTile>
          </Col>
        </Row> */}
        <Row>
          <PaginationClient></PaginationClient>
        </Row>
      </Container>
    </>
  );
}

export default App;
