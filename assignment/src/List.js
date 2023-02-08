import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

const List = () => {
    const [user, setUser] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts"

    const fetchData = () => {
        axios.get(url).then((resp) => {
            console.log(resp)
            setUser(resp.data)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <ListGroup>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <ListGroup.Item >
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr key={userObj.id}>
                                    <td>{userObj.id}</td>
                                    <td>{userObj.title}</td>
                                    <td>{userObj.body}</td>
                                    <td>
                                        <Link to="/">
                                            Go to Grid View
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </ListGroup.Item>
                ))}
                <ListGroup.Item>Cras justo odio</ListGroup.Item>

            </ListGroup>
        </div>
    )
}

export default List
