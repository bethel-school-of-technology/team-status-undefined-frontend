import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card } from "react-bootstrap"
import UserContext from '../context/UserContext';
import '../styles/BarberList.css'

function Search() {
    let { searchUser } = useContext(UserContext)
    let [users, setUser] = useState([])
    let params = useParams();
    console.log(params.filter)
    searchUser(params.filter)

    useEffect(() => {

        async function fetch() {
            await searchUser(params.filter).then(response => {
                setUser(response)
            })
        }
        fetch();

    }, [params])



    function UserList() {

        if (users === null || !users) return
        return users.map((u) => {
            return (
                // <Col xs={6} md={4} lg={3}>
                //         <a href={`/Profile/${u.BarberId}`}>
                //         <img id="pic" src={u.ProfilePic} height="200" alt=""  / >
                //         <p>Name: {u.FirstName} {u.LastName} </p>
                //         <p>City: {u.City}</p>
                //         <p>State: {u.State}</p>
                //         </a>
                // </Col>




                

                <Col xs={12} md={4} lg={3}>
                    <Card id='barberCard' >
                        <div className="cardEffect">

                            <a href={`/Profile/${u.BarberId}`}>
                                <img id="pic" src={u.ProfilePic} height="200" alt="" />
                                <div className="cardText" >
                                    <div className='p1'><p >{u.FirstName} {u.LastName} </p></div>
                                    <p>{u.City}, {u.State}</p>
                                </div>

                                <div className="overlay">
                                    <div class="text">LET'S GO!</div>
                                </div>
                            </a>


                        </div>
                    </Card>
                </Col>





            )
        }

        )
    }

    return (
        <>

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
        
            {/* <h1>Barbers</h1> */}
            <Container fluid>


            
                <Row>
                    {UserList()}
                </Row>

            </Container>
        </>
    )

}


export default Search;