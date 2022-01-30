const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY =  "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    painGreetings(username);
    
}

function painGreetings(username) {
    //  const username = localStorage.getItem(USERNAME_KEY);
     greeting.innerText = "' " + username +"님" + "  반가워요! ' " ;
     greeting.classList.remove(HIDDEN_CLASSNAME);
}



if (savedUsername === null) { 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    painGreetings(savedUsername);
};





