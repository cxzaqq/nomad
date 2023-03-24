const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;
let nickName;

function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}

function handelMessageSubmit(event){
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`You: ${value}`);
    });
    input.value = "";
}

function showRoom(newCount) {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room: ${roomName}(${newCount}) User: ${nickName}`;
    const msgForm = room.querySelector("form");
    msgForm.addEventListener("submit", handelMessageSubmit);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const nick = form.querySelector("#nickName");
    const room = form.querySelector("#roomName");
    roomName = room.value;
    nickName = nick.value;
    socket.emit("enter_room", nick.value, room.value, showRoom);
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user, newCount) => {
    const h3 = room.querySelector("h3");
    h3.innerText = `Room: ${roomName}(${newCount}) User: ${nickName}`;
    addMessage(`${user} arrived`);
});

socket.on("bye", (left, newCount) => {
    const h3 = room.querySelector("h3");
    h3.innerText = `Room: ${roomName}(${newCount}) User: ${nickName}`;
    addMessage(`${left} left`);
});

socket.on("new_message", addMessage);

socket.on("room_change", rooms => {
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = "";
    if(rooms.length === 0){
        return;
    }
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    });
});