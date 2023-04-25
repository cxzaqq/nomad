import React, { useState } from "react";
import {doc, deleteDoc, updateDoc} from "firebase/firestore";
import { dbService } from "../fbase";

const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if(ok){
            await deleteDoc(NweetTextRef);
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(NweetTextRef, {
            text: newNweet,
        });
        setEditing(prev => !prev);
    }
    const onChnage = (event) => {
        const {target:{value}} = event;
        setNewNweet(value);
    }
    return (
    <div>
        {editing ? 
        <>
        <form onSubmit={onSubmit}>
            <input onChange={onChnage} type="text" placeholder="Edit your nweet" value={newNweet} required />
            <input type="submit" value="Update Nweet" />
        </form>
        <button onClick={toggleEditing}>Cancle</button>
        </> :
        <>
        <h4>{nweetObj.text}</h4>
        {isOwner && (
        <>
        <button onClick={onDeleteClick}>Delete Nweet</button>
        <button onClick={toggleEditing}>Edit Nweet</button>
        </>
        )}
        </>
        }
    </div>
    )
};

export default Nweet;