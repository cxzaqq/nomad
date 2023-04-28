import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        let data;
        try {
            if (newAccount) {
                data = await createUserWithEmailAndPassword(
                    auth, email, password
                )
            } else {
                data = await signInWithEmailAndPassword(
                    auth, email, password
                )
            }
        } catch (error) {
            setError(error.message);
        }
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input onChange={onChange} name="email" type="text" placeholder="Email" value={email} className="authInput" required />
                <input onChange={onChange} name="password" type="password" placeholder="Passowrd" value={password} className="authInput" required />
                <input type="submit" value={newAccount ? "Create Account" : "Sign In"} className="authInput authSubmit" />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">{newAccount ? "Log In" : "Create Account"}</span>
        </>
    )
}

export default AuthForm;