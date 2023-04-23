import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
        signOut(getAuth());
        navigate("/");
    };
    return (
        <>
        <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;