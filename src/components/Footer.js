import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5rem',
                }}>

                <Link to="/" ><a className="navbar-brand align-items-center" href="#">
                    <img src={process.env.PUBLIC_URL + '/images/upperlip8.png'} height="200" alt="Upper Lip Holstery" /></a>
                </Link>
            </div>

            <div className="text-center pb-0">
                <br></br>
                <p className='everything'>Everything that you do, do it as for the Lord</p>
            </div>

            <footer id="footer" class="text-center mt-5">
                <div className="logoBottom">
                    <Link to="/" ><a className="navbar-brand align-items-center" href="#">
                        <img src={process.env.PUBLIC_URL + '/images/upperlip10.png'} height="100" alt="Upper Lip Holstery" /></a>
                    </Link>
                </div>

                <div className="text-center pb-3 text-light ">
                    <p className="p" >© 2023 Status Undefined  .  Web Development:</p>
                    <p className="p2" >Austin J Fogle . Joseph Ellis . Josiah Buell . Nanette Guzman . Timothy Roberts . Yissel L Nunez</p>
                </div>
            </footer>
        </>
    )
}

export default Footer