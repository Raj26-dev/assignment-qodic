import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Grid = () => {
    const [user, setUser] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts"
  
    const fetchData = () => {
      axios.get(url).then((resp)=> {
        console.log(resp)
        setUser(resp.data)
      })
    }
  
    useEffect(() => {
      fetchData();
    },[])

  return (
    <div>
      <Container>
        <Row >
        {user && user.length > 0 && user.map((userObj, index) => (
            <Col xs key={userObj.id} className="row-class">
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
                            <td><Link to="/list">
                            Go To List View
                            </Link></td>
                        </tr>
                   
                </tbody>
            </table>
              
            </Col>
          ))}
          {/* <Col xs>Second, but unordered</Col>
          <Col xs>Third, but first</Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default Grid
