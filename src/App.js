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
import { useState } from 'react';
import { useEffectOnce } from './util/useEffectOnce';

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gender, setGender] = useState('all');
  const [search, setSearch] = useState("");
  const [tileView, setTileView] = useState(false);

  let userPerPage = 10;
  let filterUsers = [];

  // call data from API
  useEffectOnce(async () => {
    await fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((json) => setUsers(json.results));
  });


  // filtered by gender
  if (gender === "all") {
    filterUsers = users;
  } else if (gender === "male") {
    filterUsers = users.filter((user) => user.gender === "male");
  } else if (gender === "female") {
    filterUsers = users.filter((user) => user.gender === "female");
  }

  // search result
  if (search) {
    filterUsers = filterUsers.filter((user) =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.name.last.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.login.username.toLowerCase().includes(search.toLowerCase())
    );
  }

  // show users per page
  const start = (currentPage - 1) * userPerPage;
  const end = currentPage * userPerPage;
  const currentPageUsers = filterUsers.slice(start, end);


  return (
    <>
      <Container>
        <h1 style={{ margin: "20px 0px 20px 0px" }}>User List</h1>
        <Row>
          <Col>
            <SearchBar onSearch={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}></SearchBar>
          </Col>
          <Col>
            <FilterBy handleFilterByGender={(gender) => setGender(gender)}></FilterBy>
          </Col>
          <Col xs={{ order: 'last' }} md={2} className='d-flex justify-content-end'>
            <TileViewButton
              handleTileView={() => setTileView(!tileView)}>
            </TileViewButton>
          </Col>
        </Row>
        {tileView ?
          <Row>
            <Col>
              <UsersTile users={currentPageUsers}></UsersTile>
            </Col>
          </Row>
          :
          <Row>
            <Col>
              <UsersTable users={currentPageUsers}></UsersTable>
            </Col>
          </Row>
        }
        <Row>
          <PaginationClient
            users={filterUsers}
            userPerPage={userPerPage}
            currentPage={currentPage}
            handlePageChange={(page) => setCurrentPage(page)}>
          </PaginationClient>
        </Row>
      </Container>
    </>
  );
}

export default App;
