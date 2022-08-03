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

function App() {
    
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
            <UsersTable></UsersTable>
          </Col>
        </Row>
        <Row>
          <Col>
            <UsersTile></UsersTile>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
