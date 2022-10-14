//OUr project is awesome

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
        .then
        (response => {
            console.log(response[0].shortdef);
            randomWordDefinition.textContent = response[0].shortdef;
            var randoWord = response[0].shortdef[0];
            //code to search for pics 
            var picUrl = "https://api.unsplash.com/search/photos/?client_id=SwyjrNoPh-viPjqQBUSi9vocQlzR2z_yQAg86Oj_okU&page=1&query=" + randoWord;
            function createPic() {
                console.log(picUrl);
                fetch(picUrl)
                    .then(response => {
                        return response.json();
                    })
                    .then
                    (response => {
                        console.log(response);
                        if (response.total > 0){
                            randomPic.src = response.results[1].urls.small;
                            img404.textContent = "";
                        }
                        else if (response = 'undefined'){
                            randomPic.src="https://media4.giphy.com/media/26ni7e85ldigoAvK0/giphy.gif?cid=ecf05e47x7i2nque4ubelyty1mojvb1ois87xmes3wibue1o&rid=giphy.gif&ct=g";
                            img404.textContent = "Sorry, can't find an image :("
                        }
                        else {
                            randomPic.src="https://media4.giphy.com/media/26ni7e85ldigoAvK0/giphy.gif?cid=ecf05e47x7i2nque4ubelyty1mojvb1ois87xmes3wibue1o&rid=giphy.gif&ct=g";
                            img404.textContent = "Sorry, can't find an image :("
                        }
                    })

            }
            createPic();
            // seperator
        })
        .catch(err => {
            console.log(err);
        })
}

randomDefinition();
/*
// Test to see if api successfully connects
var apiKey = "https://api.unsplash.com/search/photos/?client_id=SwyjrNoPh-viPjqQBUSi9vocQlzR2z_yQAg86Oj_okU&page=1&query=office"
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

*/