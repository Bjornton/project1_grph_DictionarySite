const definition = document.createElement('p');
const body = document.querySelector('body');
const button = document.querySelector('button');
const randomWordBox = document.getElementById('random-word');
const randomWordDefinition = document.getElementById('definition-box');
const randomPic = document.getElementById('word-pic');
const img404 = document.getElementById('imgError');

const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => {
            return response.json();
        })
        .then(response => {
            randomWordBox.textContent = response;
            randomDefinition(randomWordBox);
            var randoWord = response;
            var picUrl = "https://api.giphy.com/v1/gifs/search?q=" + randoWord + "&limit=1&api_key=xSkUGCs7S67gImimEp1a2QcdCkxxPGKj";
            function createPic() {
                console.log(picUrl);
                fetch(picUrl)
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        console.log(response);
                        randomPic.src = response.data[0].images.downsized.url;
                    })
            }
            createPic();
            // separator
            randomDefinition(randomWordBox)
        })
        .catch(err => {
            console.log(err);
        })
}

button.addEventListener('click', function () {
    randomWord();
})


const randomDefinition = (word) => {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=4c0282a9-8b9b-4d66-9985-0bc2c346b67e`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response[0].shortdef);
            randomWordDefinition.textContent = response[0].shortdef;
        })
        .catch(err => {
            console.log(err);
        })
}

randomDefinition();

var apiKey = "https://api.giphy.com/v1/gifs/search?q=school&limit=1&api_key=xSkUGCs7S67gImimEp1a2QcdCkxxPGKj"
function getapi() {
    fetch(apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getapi();