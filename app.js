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

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);

