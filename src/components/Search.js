import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import {  Container, Row, Col } from "react-bootstrap"
import  UserContext from '../context/UserContext';

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
                    <Col xs={6} md={4} lg={3}>
                            <a href={`/Profile/${u.BarberId}`}>
                            <img id="pic" src={u.ProfilePic} height="200" alt=""  / >
                            <p>Name: {u.FirstName} {u.LastName} </p>
                            <p>City: {u.City}</p>
                            <p>State: {u.State}</p>
                            </a>
                    </Col>
                    )
        }

        )
    }

    return (
        <>
            <h1>Barbers</h1>
            <Container fluid>
                <Row>
                    {UserList()}
                </Row>
                
            </Container>
        </>
    )

}


export default Search;