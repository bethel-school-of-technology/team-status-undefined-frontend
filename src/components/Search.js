import React, { useEffect, useContext, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom'
import { Card, Container, Row, Col, Figure } from "react-bootstrap"
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
        return users.map((u) =>
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={u.ProfilePic}
        />
        <Figure.Caption>
          {u.FirstName}{u.LastName}
          {u.City}{u.State}
        </Figure.Caption>
      </Figure>

        )
    }

    return (
        <>
            <h1>Barbers</h1>
            <Container fluid>
                <Row>
                    {UserList()}
                </Row>
                <Outlet />
            </Container>
        </>
    )

}


export default Search;