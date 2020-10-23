const socket = io();

socket.on("welcome_message", (message) => {
    console.log("Welcome");
})

document.getElementById("textarea1").addEventListener("keydown", (e) => {

    // preventing 
    const regEx = /(Enter|Control|Alt|Tab|Shift|CapsLock|Backspace|ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/g;
    if (e.key.match(regEx)) {
        console.log("got a match");
        return false;
    }

    socket.emit("senddata", e.key);
})

socket.on("return_data", (data) => {
    document.querySelector("#textarea1").value = data;
})