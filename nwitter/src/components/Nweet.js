import React, { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { dbService } from "../fbase";
import { ref, deleteObject, getStorage } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            await deleteDoc(NweetTextRef);
            if (nweetObj.attachmentUrl) {
                await deleteObject(ref(getStorage(), nweetObj.attachmentUrl));
            }
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
        const { target: { value } } = event;
        setNewNweet(value);
    }
    return (
        <div className="nweet">
            {editing ?
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input onChange={onChnage} className="formInput" type="text" placeholder="Edit your nweet" value={newNweet} autoFocus required />
                        <input type="submit" value="Update Nweet" className="formBtn" />
                    </form>
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
                    </span>
                </> :
                (
                    <>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                        {isOwner && (
                            <div class="nweet__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    )
};

export default Nweet;