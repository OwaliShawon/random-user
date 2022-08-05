import Row from 'react-bootstrap/Row';
import "./UserTile.css";
import UsersTileItem from '../UserTileItem/UserTileItem';

function UsersTile({ users }) {
    return (
        <Row>
            {
                users.map((user) => <UsersTileItem user={user}></UsersTileItem>)
            }
        </Row>
    );
}

export default UsersTile;