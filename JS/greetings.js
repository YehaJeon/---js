const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const inputDive = document.querySelector('#inputDive');
const greetingDive = document.querySelector('#greetingDive');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    inputDive.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    painGreetings(username);
}

function painGreetings(username) {
    //  const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = "' " + username + '님' + "  반가워요! ' ";
    greetingDive.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    inputDive.classList.remove(HIDDEN_CLASSNAME);
    inputDive.addEventListener('submit', onLoginSubmit);
} else {
    painGreetings(savedUsername);
}
