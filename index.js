"use strict";
var _a, _b, _c, _d;
exports.__esModule = true;
(_a = document === null || document === void 0 ? void 0 : document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", fetchJoke);
(_b = document === null || document === void 0 ? void 0 : document.getElementById("funnyJoke")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (evt) { return rateJoke("funnyJoke"); });
(_c = document === null || document === void 0 ? void 0 : document.getElementById("okJoke")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (evt) { return rateJoke("okJoke"); });
(_d = document === null || document === void 0 ? void 0 : document.getElementById("badJoke")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function (evt) { return rateJoke("badJoke"); });
//variables
var joketext = document.getElementById("joketext");
var api_url = "https://icanhazdadjoke.com";
var reportAcudits = [];
//headers needed to get a response from the jokes APIs
var headerApi = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
var options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': 'fdd42d7708mshee83b24086db7c2p13b3c7jsn267f1b80eeca',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
};
//functions to get random jokes from the APIs and insert them as text in html. It also passes the fetched joke
//to createReport function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function fetchJoke() {
    var randomNumber = getRandomInt(2);
    if (randomNumber === 0) {
        fetch(api_url, headerApi)
            .then(function (res) { return res.json(); })
            .then(function (response) {
            joketext.textContent = "\"".concat(response.joke, "\"");
            console.log(response.joke);
            createReport(response.joke);
        })["catch"](function (error) { return console.error("Something went wrong ->", error); });
    }
    if (randomNumber === 1) {
        fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            joketext.textContent = "\"".concat(response.value, "\"");
            console.log(response.value);
            createReport(response.value);
        })["catch"](function (err) { return console.error(err); });
    }
}
//function to create a joke object with the current joke and insert it in the reportAcudits array
function createReport(joke) {
    var jokeObj = {
        joke: joke,
        score: undefined,
        date: undefined
    };
    reportAcudits.push(jokeObj);
}
//function to assign the score and the date to the last joke object, which is the one the user is 
//currently seeing, if the user decides to vote
function rateJoke(rate) {
    if (reportAcudits.length < 1) {
        alert("Click the button first in order to rate a joke");
        throw Error("Nothing to be rated yet");
    }
    if (rate === "funnyJoke") {
        reportAcudits[reportAcudits.length - 1].score = 3;
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString();
    }
    if (rate === "okJoke") {
        reportAcudits[reportAcudits.length - 1].score = 2;
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString();
    }
    if (rate === "badJoke") {
        reportAcudits[reportAcudits.length - 1].score = 1;
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString();
    }
    console.log(reportAcudits);
}
//code related to the weather API request and text insertion in the HTML
var weatherText = document.getElementById("weather");
var weatherHeader = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fdd42d7708mshee83b24086db7c2p13b3c7jsn267f1b80eeca',
        'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
    }
};
fetch('https://aerisweather1.p.rapidapi.com/observations/barcelona,%20es', weatherHeader)
    .then(function (response) { return response.json(); })
    .then(function (response) { return weatherText.textContent = "Today: ".concat(response.response.ob.weather); })["catch"](function (err) { return console.error(err); });
