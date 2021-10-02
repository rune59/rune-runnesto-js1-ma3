// Question 2
// Make a call to the Rawg API.


const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

const API_KEY = "6a293b5c159f4bdf88f739120bd3aa6d";

const url = API_URL + API_KEY;


async function callRawg() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results); 
        const data = results;
        let html = "";
        resultsContainer.innerHTML = "";
        let numberOfTags = 0; 
        for (let i = 0; i < data.length; i++) {
            if (i < 8) {
                let name = data[i].name;
                let rating = data[i].rating; 
                console.log(data[i].name);
                console.log(data[i].rating);
                let tags = data[i].tags.length; 
                for (let j = 0; j < tags.length; j++){
                    numberOfTags++;
                }
                // console.log(numberOfTags);
                html +=`<div>
                            <p></p>
                            <h5>Name: ${name}</h5>
                            <p>Rating: ${rating}</p>
                            <p>Number of tags: ${numberOfTags}</p>
                            <p></p>
                        </div>`;
            }
        }
        return html;
    } catch (error) {
        console.log("An error occurred");
        console.log(error);
    } finally {
        console.log("This will run whether there is an error or not");
    }
}

const newHtml = callRawg();
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = newHtml;


