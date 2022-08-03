import Table from 'react-bootstrap/Table';
import UserTableItem from '../UserTableItem/UserTableItem';

function UsersTable({users}) {
    // console.log(users);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>Registration Date</th>
                    <th>Username</th>
                </tr>
            </thead>
            {
                users.map((user) => <UserTableItem user={user}></UserTableItem>)
            }
        </Table>
    );
}

export default UsersTable;