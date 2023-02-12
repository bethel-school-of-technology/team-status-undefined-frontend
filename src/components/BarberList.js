import React  from 'react';
import  UserContext from '../context/UserContext';
import { Row, Col, Stack, Container} from "react-bootstrap"
import '../styles/BarberList.css'


function BarberList () {
   

  return (
    <UserContext.Consumer>
        {
            ({ user }) => {
                return <>
                    <div>
                <Stack  gap={3}>
                   <Container>
                    <h1>BARBERS</h1>
                     <Row>
                       {user.map((u) => {
                            return (
                                    <Col xs={6} md={4} lg={3}>
                                            <a href={`/Profile/${u.BarberId}`}>
                                            <img id="pic" src={u.ProfilePic} height="200" alt=""  / >
                                            <p>Name: {u.FirstName} {u.LastName} </p>
                                            <p>City: {u.City}</p>
                                            <p>State: {u.State}</p>
                                            </a>
                                    </Col>
                                    )
                        })}
                     </Row>
                   </Container>
                </Stack>
                        
                    </div>
                </>
            }
        }
    </UserContext.Consumer>
  )
}

export default BarberList;