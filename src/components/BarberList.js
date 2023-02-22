import React from 'react';
import  UserContext from '../context/UserContext';
import { Row, Col, Stack, Container} from "react-bootstrap"

import '../styles/BarberList.css'


function BarberList () {
  

  return (
    <UserContext.Consumer>
        {
            ({ barber }) => {
                return <>
                    <div>
                <Stack  gap={3}>
                   <Container>
                    <h1>BARBERS</h1>
                     <Row>
                       {barber.map((b) => {
                            return (
                                    <Col xs={6} md={4} lg={3}>
                                            <a href={`/Profile/${b.BarberId}`}>
                                            <img id="pic" src={b.ProfilePic} height="200" alt=""  / >
                                            <p>Name: {b.FirstName} {b.LastName} </p>
                                            <p>City: {b.City}</p>
                                            <p>State: {b.State}</p>
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