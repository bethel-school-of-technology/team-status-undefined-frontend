import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card } from "react-bootstrap"
import UserContext from '../context/UserContext';
import '../styles/BarberList.css'


{/* Search Bar Function - Find barber by City*/ }
function Search() {

    let { searchBarber } = useContext(UserContext)
    let [barbers, setBarber] = useState([])
    let params = useParams();

    console.log(params.filter)

    searchBarber(params.filter)

    useEffect(() => {

        async function fetch() {
            await searchBarber(params.filter).then(response => {
                setBarber(response)
            })
        }
        fetch();
    }, [params])


    function UserList() {

        if (barbers === null || !barbers) return
        return barbers.map((u) => {
            return (
                <Col xs={12} md={4} lg={3}>
                    <Card id='barberCard' >
                        <div className="cardEffect" key={u.barberId}>

                            <a href={`/Profile/${u.barberId}`}>
                                <img id="pic" src={u.profilePic} height="200" alt="" />
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
                                <p>Start searching!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='title'><h1>Come to the professionals</h1></div>

            <Container fluid>
                <Row>
                    {UserList()}
                </Row>
            </Container>
        </>
    )
}

export default Search;