import React, {useContext} from 'react';
import {Button,Table} from 'react-bootstrap'
import './Home.css'
import {UserContext} from "../UserContext/UserContext";
import {Link} from "react-router-dom";

const Home = () => {

    const [users,setUsers] = useContext(UserContext);
    console.log(users);

    return (
        <div className="home-container">
            <Link to="/create">
                <Button className="create-button" variant="primary">
                    Create User
                </Button>
            </Link>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th> Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
            users.map(user =>
                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.salary}</td>
                <td>
                    <Link to={"/read/"+user.id}>
                        <Button className="action__btn" variant="success">
                            Read
                        </Button>
                    </Link>

                    <Link to={"/edit/"+user.id}>
                        <Button className="action__btn" variant="info">
                            Edit
                        </Button>
                    </Link>

                    <Link to={"/delete/"+user.id}>
                        <Button className="action__btn" variant="danger">
                            Delete
                        </Button>
                    </Link>
                </td>
            </tr>)
                }

                </tbody>
            </Table>

        </div>
    );
};

export default Home;
