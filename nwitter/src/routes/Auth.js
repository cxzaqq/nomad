import React, { useState } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
  } from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        let data;
        try{
            if(newAccount){
                data = await createUserWithEmailAndPassword(
                    auth, email, password
                )
            }else{
                data = await signInWithEmailAndPassword(
                    auth, email, password
                )
            }
        }catch(error){
            setError(error.message);
        } 
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        const { target:{name} } = event;
        let provider;
        if(name === "google"){
            provider = new GoogleAuthProvider();
        }
        await signInWithPopup(getAuth(), provider);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="email" type="text" placeholder="Email" value={email} required />
                <input onChange={onChange} name="password" type="password" placeholder="Passowrd" value={password} required />
                <input type="submit" value={newAccount? "Create Account" : "Sign In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Log In" : "Create Account"}</span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with google</button>
            </div>
        </div>
    )
}

export default Auth;