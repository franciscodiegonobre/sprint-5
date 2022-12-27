"use strict";
var _a, _b, _c, _d;
exports.__esModule = true;
(_a = document === null || document === void 0 ? void 0 : document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", fetchJoke);
(_b = document === null || document === void 0 ? void 0 : document.getElementById("funnyJoke")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (evt) { return rateJoke("funnyJoke"); });
(_c = document === null || document === void 0 ? void 0 : document.getElementById("okJoke")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function (evt) { return rateJoke("okJoke"); });
(_d = document === null || document === void 0 ? void 0 : document.getElementById("badJoke")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function (evt) { return rateJoke("badJoke"); });
var joketext = document.getElementById("joketext");
var api_url = "https://icanhazdadjoke.com";
var reportAcudits = [];
//headers needed to get a response from the API
var headerApi = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
//function to get the joke from the API and insert it as text in html. It also passes the fetched joke
//to createReport function
function fetchJoke() {
    fetch(api_url, headerApi)
        .then(function (res) { return res.json(); })
        .then(function (response) {
        joketext.textContent = "\"".concat(response.joke, "\"");
        console.log(response.joke);
        createReport(response.joke);
    })["catch"](function (error) { return console.error("Something went wrong ->", error); });
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
