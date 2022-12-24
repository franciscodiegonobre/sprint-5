export {};

document?.getElementById("nextJoke")?.addEventListener("click", fetchJoke);

const api_url: string = "https://icanhazdadjoke.com"

//headers needed to get a response from the API
const headerApi: {} = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
}

//function to get the joke from the API
function fetchJoke() {
fetch(api_url, headerApi)
    .then((res) => res.json())
    .then(response => {
        console.log(response)
}).catch(error => console.error("Something went wrong ->", error))
}

