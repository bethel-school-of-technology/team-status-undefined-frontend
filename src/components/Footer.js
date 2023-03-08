import {React} from 'react'
import '../styles/Footer.css';
import Advice from '../ThirdParty/Advice';
import Bored from '../ThirdParty/Bored';

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

                <a className="navbar-brand align-items-center" href="/">
                    <img src={process.env.PUBLIC_URL + '/Images/upperlip8.png'} height="200" alt="Upper Lip Holstery" /></a>
                
            </div>
            <div className="text-center pb-0">
                <br></br>
                <p className='everything'>QUOTE OF THE DAY</p>
            </div>
         <Advice />
         <Bored />
            <footer id="footer" class="text-center mt-5">
                <div className="logoBottom">
                    <a className="navbar-brand align-items-center" href="/">
                        <img src={process.env.PUBLIC_URL + '/Images/upperlip10.png'} height="100" alt="Upper Lip Holstery" /></a>
                    
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