export {};

document?.getElementById("nextJoke")?.addEventListener("click", fetchJoke);
document?.getElementById("funnyJoke")?.addEventListener("click", (evt) => rateJoke("funnyJoke"));
document?.getElementById("okJoke")?.addEventListener("click", (evt) => rateJoke("okJoke"));
document?.getElementById("badJoke")?.addEventListener("click", (evt) => rateJoke("badJoke"));

const joketext = document.getElementById("joketext")
const api_url: string = "https://icanhazdadjoke.com"
type jokeObject = {
    joke: string,
    score: (undefined | number),
    date: (undefined | string)
};
let reportAcudits: jokeObject[] = []

//headers needed to get a response from the API
const headerApi: {} = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
}

//function to get the joke from the API and insert it as text in html. It also passes the fetched joke
//to createReport function
function fetchJoke() {
fetch(api_url, headerApi)
    .then((res) => res.json())
    .then(response => {
        joketext!.textContent = `"${response.joke}"`
        console.log(response.joke)
        createReport(response.joke)
}).catch(error => console.error("Something went wrong ->", error))
}

//function to create a joke object with the current joke and insert it in the reportAcudits array
function createReport(joke: string) {
    let jokeObj = {
            joke: joke,
            score: undefined,
            date: undefined
    }

    reportAcudits.push(jokeObj)
}

//function to assign the score and the date to the last joke object, which is the one the user is 
//currently seeing, if the user decides to vote
function rateJoke(rate: string) {
    if (reportAcudits.length < 1) {
        alert("Click the button first in order to rate a joke");
        throw Error("Nothing to be rated yet")
    }
    
    if (rate === "funnyJoke") {
        reportAcudits[reportAcudits.length - 1].score = 3 
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString() 
    }

    if (rate === "okJoke") {
        reportAcudits[reportAcudits.length - 1].score = 2 
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString() 
    }

    if (rate === "badJoke") {
        reportAcudits[reportAcudits.length - 1].score = 1 
        reportAcudits[reportAcudits.length - 1].date = new Date().toISOString() 
    }
    console.log(reportAcudits)
}

