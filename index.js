"use strict";
var _a;
exports.__esModule = true;
(_a = document === null || document === void 0 ? void 0 : document.getElementById("nextJoke")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", fetchJoke);
var api_url = "https://icanhazdadjoke.com";
var headerApi = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
function fetchJoke() {
    fetch(api_url, headerApi)
        .then(function (res) { return res.json(); })
        .then(function (response) {
        console.log(response);
    })["catch"](function (error) { return console.error("Something went wrong ->", error); });
}
