import React, { useEffect, useState } from "react";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";

const Profile = ({refreshUser, userObj}) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const navigate = useNavigate();
    const onLogOutClick = () => {
        signOut(getAuth());
        navigate("/");
    };
    const getMyNweets = async() => {
        const q = query(
            collection(getFirestore(), "nweets"),
            where("creatorId", "==", userObj.uid),
            orderBy("createdAt")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
    };
    const onChange = (event) => {
        const {target: {value}} = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await updateProfile(userObj, {displayName: newDisplayName});
        }
        refreshUser();
    }
    useEffect(() => {
        getMyNweets();
    }, []);
    return (
        <>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;