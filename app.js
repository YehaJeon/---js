// // const loginForm = document.querySelector("#login-form");
// // const loginForm = document.getElementById("login-form");

// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")


// function onLoginBtnClick() {
// //    const username = loginInput.value;
// //    if (username === ""){
// //        alert("Please write your name")
// //    }else if ( username.length > 15) {
// //        alert("your name is too young.")
// //    }
//     console.log(username);
// }


// loginButton.addEventListener("click", onLoginBtnClick);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);






const link = document.querySelector("a");


function handleLinkClick(event) {
    event.preventDefault();

}

link.addEventListener("click", handleLinkClick); 

