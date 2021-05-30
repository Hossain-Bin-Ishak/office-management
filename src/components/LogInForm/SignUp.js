import React, { useContext, useRef, useState} from "react"
import {Form,Button,Card, Container} from "react-bootstrap"
import { Link } from "react-router-dom"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";


export default function SignUp() {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);;
     }else {
        firebase.app(); // if already initialized, use that one
     }
    const {emailRef,passwordRef,passwordConfirmRef} = useRef()

    
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo: '',
        password:"",
        error:"",
        success:false,
      })

    const handleChange=(e)=>{
        let isFormValid=true;

        // console.log(e.target.name,e.target.value);
        if (e.target.name==="email") {
            isFormValid =/\S+@\S+/.test(e.target.value)
            
        }
        if (e.target.name==="password") {
            const isPasswordValid = e.target.value.length>6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid= isPasswordValid && passwordHasNumber
        }
        if (isFormValid) {
            const newUserInfo = {...user}
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo)

        }
    }
    const fromLogIn=(e)=>{
        // console.log(user.name,user.password,user.email);
            if(user.name && user.password && user.email){
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const newUserInfo= {...user};
                        newUserInfo.error="";
                        newUserInfo.success=true;
                        setUser(newUserInfo)
                        setLoggedInUser(newUserInfo)

                    })
                    .catch((error) => {
                        const newUserInfo= {...user};
                        newUserInfo.error=error.message;
                        newUserInfo.success=false;
                        setUser(newUserInfo)
                      
                    });
                // console.log("good");

            }
            e.preventDefault()
        }
    return (
        
        <div>
        
        <p style={{color:"red"}}>{user.error}</p>
        {
            user.success &&<p style={{color:"green"}}>User Created successfully</p>
        }
        <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "85vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form  >
                    <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onBlur={handleChange} type="text" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onBlur={handleChange} type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onBlur={handleChange} type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                     <Form.Control type="password" ref={passwordConfirmRef} required />
                     </Form.Group>
                    <Button onClick={fromLogIn} className="w-100 mt-3" type="submit">
                    Sign Up
                    </Button>
                    </Form>               
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
               Already Have an account? <Link to="/login">Log In</Link>
            </div>
            </div>
            </Container>
        </div>
    )
}