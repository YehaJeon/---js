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
const USERNAME_KEY =  "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    greeting.innerText = "Hello  " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) { 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
     greeting.innerText = "Hello  " + savedUsername;
     greeting.classList.remove(HIDDEN_CLASSNAME);
   

}





// const link = document.querySelector("a");


// function handleLinkClick(event) {
//     event.preventDefault();

// }

// link.addEventListener("click", handleLinkClick); 

