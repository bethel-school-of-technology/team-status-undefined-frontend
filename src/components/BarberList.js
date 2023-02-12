import React, { useEffect, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import  UserContext from '../context/UserContext';
import {Card, Row, Col, Stack, CardGroup} from "react-bootstrap"

const BarberList = () => {
   

  return (
    <UserContext.Consumer>
        
        {
            
            ({ user }) => {
                
                return <div>
                    <h1>BARBERS</h1>
                    <div>
                    
                    <Stack direction="horizontal" gap={3}>
                    
                        {user.map((u) => {
                            return (
                                
                                    <Card bg="info" text="light" style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={u.ProfilePic} alt=""/>
                                            <Card.Body>
                                            <Card.Title>{u.FirstName} {u.LastName}</Card.Title>
                                            <Card.Subtitle className="mb-2 ">{u.Description}</Card.Subtitle>
                                            <Link to={`/Profile/${u.BarberId}`}className="btn btn-warning mx-3">View</Link>
                                            </Card.Body>
                                    </Card>
                                
                                    )
                        })}
                        
                        </Stack>
                        
                    </div>
                </div>
            }
        }
        
        </UserContext.Consumer>
  )
}

export default BarberList;