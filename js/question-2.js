// Question 2
// Make a call to the Rawg API.


const API_URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const API_KEY = "6a293b5c159f4bdf88f739120bd3aa6d";
const url = API_URL + API_KEY;

const resultsContainer = document.querySelector(".results");

async function getRawgVideos() {
    try {
        // fetch
        const response = await fetch(url);
        // console.log(response);
        const dataObject = await response.json();
        console.log(dataObject);
        const dataResults = dataObject.results; 
        console.log("dataResults.length:" + dataResults.length);
        console.log(dataResults);
        resultsContainer.innerHTML = "";

        for (let i = 0; i < dataResults.length; i++) {
            console.log(dataResults[i].name);
            console.log(dataResults[i].rating);
            let tagsResults = 0; 
            tagsResults = dataResults[i].tags;
            console.log("tagsResults:" + tagsResults);
            let numberOfTags = 0;
            for (let j = 0; j < tagsResults.length; j++){
                numberOfTags++;
            }
            console.log("Number of tags: " + numberOfTags);

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML +=
                `<div class="result">
                    Name: ${dataResults[i].name}
                    <p><p/>
                    Rating: ${dataResults[i].rating}
                    <p><p/>
                    Number of tags: ${numberOfTags}
                </div>`;
        }
      
    } catch (error) {
        console.log("An error occurred");
        console.log(error);
    } finally {
        console.log("This will run whether there is an error or not");
    }

}

getRawgVideos();
