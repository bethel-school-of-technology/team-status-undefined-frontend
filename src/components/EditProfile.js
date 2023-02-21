// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import MessageContext from '../contexts/MessageContext';
import '../styles/EditProfile.css'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';
import Profile from './Profile';

const EditProfile = () => {
    // let params = useParams()
    // let [ message, setMessage ] = useState({
    //     id: params._id,
    //     comment: "",
    // });


    // let { getMessage, editMessage } = useContext(MessageContext);
    // let navigate = useNavigate();
    // let {id, comment} = message

    // useEffect(() => {
    //     if (id === undefined) return
    //     async function fetch() {
    //         await getMessage(id)
    //             .then((message) => setMessage(message))
    //     }
    //     fetch()
    // }, [id])


    // function handleChange(event) {
    //     setMessage((prevValue) => {
    //         return { ...prevValue, [event.target.name]: event.target.value }
    //     });
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     editMessage(message).then(() => {
    //         navigate('/message');
    //     }).catch(error => {
    //         console.log(error);
    //         navigate('/message');
    //     });
    // }

    return (
        // <form onSubmit={handleSubmit}>
        <section>
            <div className="returnToProfile">
                <Link to="/Profile" >
                    <Button id='profileButton' onClick={<Profile />}  > GO TO PROFILE</Button>
                </Link>

                <Link to="/Profile" >
                    <Button id='deleteAccount' onClick={<Profile />}  > DELETE ACCOUNT</Button>
                </Link>
            </div>

            <div className="EditTitle"><h1>Customize your profile page</h1></div>
            
            <Card className='Card'>
            <div className="EditTitle"><h4>Change profile Image</h4></div>
            </Card>
            <Card className='Card'>
            <div className="EditTitle"><h4>Edit Name</h4></div>
            </Card>
            <Card className='Card'>
            <div className="EditTitle"><h4>Edit Description</h4></div>
            </Card>
            <Card className='Card'>
            <div className="EditTitle"><h4>Edit Contact Information</h4></div>
            </Card>


        </section>

               
        //     <input class="editMessageInput" placeholder="Edit" type="text" name="comment" value={comment} onChange={handleChange} />
        //     <br></br><br></br>
        //     <button class="editPageButton">Edit</button>
        // </form>
    )
};

export default EditProfile;