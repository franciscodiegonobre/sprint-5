"use strict";
var _a;
exports.__esModule = true;
(_a = document === null || document === void 0 ? void 0 : document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", fetchJoke);
var joketext = document.getElementById("joketext");
var api_url = "https://icanhazdadjoke.com";
//headers needed to get a response from the API
var headerApi = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
//function to get the joke from the API and insert it as text in html
function fetchJoke() {
    fetch(api_url, headerApi)
        .then(function (res) { return res.json(); })
        .then(function (response) {
        joketext.textContent = "\"".concat(response.joke, "\"");
        console.log(response.joke);
    })["catch"](function (error) { return console.error("Something went wrong ->", error); });
}
/* const maintext = document.getElementById("maintext") */
/* function fetchJoke() {
    fetch(api_url, headerApi)
        .then((res) => res.json())
        .then(response => {
            let paragraph = document.createElement("p")
            paragraph.innerHTML = response.joke
            maintext?.appendChild(paragraph)
            console.log(response.joke)
    }).catch(error => console.error("Something went wrong ->", error))
    } */ 
