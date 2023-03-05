import React from 'react';
import UserContext from '../context/UserContext';
import { Row, Col, Stack, Container, Card } from "react-bootstrap"

import '../styles/BarberList.css'


function BarberList() {


  return (
    <UserContext.Consumer>
      {
        ({ barber }) => {
          return <>
            <div>
              <Stack gap={3}>
                <Container>

                  {/*Header Image*/}
                  <section>
                    <div className='bgBarberListCover'>
                      <div className="container" style={{ minHeight: '400px' }}>
                        <div className="text-center justify-content-center align-self-center">

                          <div className="h1list" >
                            <h1>Find your barber... Only the Best...!</h1>
                          </div>

                          <div className="pstartsearch" >
                            {/* <p>Making your dream tream come true</p> */}
                            <p>Start searching!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className='title'><h1>Come to the professionals</h1></div>

                  {/*List of Barbers*/}
                  <Row>
                    {barber.map((u) => {
                      return (
                        <Col xs={12} md={4} lg={3}>
                          <Card id='barberCard' >
                            <div className="cardEffect" key={u.barberId}>

                              <a href={`/Profile/${u.barberId}`}>
                                <img id="pic" src={u.profilePic} height="100%" width="100%" alt="" />
                                <div className="cardText" >
                                  <div className='p1'><p >{u.firstName} {u.lastName} </p></div>
                                  <p>{u.city}, {u.state}</p>
                                </div>

                                <div className="overlay">
                                <div class="text">LET'S GO!</div>
                              </div>
                              </a>


                            </div>
                          </Card>
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