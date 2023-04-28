import React, { useEffect, useState } from "react";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";

const Profile = ({ refreshUser, userObj }) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const navigate = useNavigate();
    const onLogOutClick = () => {
        signOut(getAuth());
        navigate("/");
    };
    const getMyNweets = async () => {
        const q = query(
            collection(getFirestore(), "nweets"),
            where("creatorId", "==", userObj.uid),
            orderBy("createdAt")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data());
        });
    };
    const onChange = (event) => {
        const { target: { value } } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(userObj, { displayName: newDisplayName });
        }
        refreshUser();
    }
    useEffect(() => {
        getMyNweets();
    }, []);
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input
                    onChange={onChange}
                    type="text"
                    autoFocus
                    placeholder="Display name"
                    value={newDisplayName}
                    className="formInput"
                />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>
    )
}

export default Profile;