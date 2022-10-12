// BOBBY's UNFINISHED WORK!

//const word = document.createElement('h3');
//const body = document.querySelector('body');
//const button = document.querySelector('button');

//const randomWord = () => {
    //fetch('https://random-word-api.herokuapp.com/word?number=1')
    //.then(response => {
        //return response.json();
    //})
   // .then(response => {
        //word.textContent = response;
        //body.appendChild(word);
        //randomDefinition(word)
    //})
    //.catch(err => {
        //console.log(err);
    //})
//}

//button.addEventListener('click', function(){
    //randomWord();
//})

//const randomDefinition = (word) => {
    //fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=4c0282a9-8b9b-4d66-9985-0bc2c346b67e`)
   // .then(response => {
        //return response.json();
    //})
    //.then(response => {
        //console.log(response[0].shortdef);
   // })
    //.catch(err => {
        //console.log(err);
    //})
//}

//randomDefinition();

var apiKey = "https://api.pexels.com/v1/search/nature"
function getapi() {
    fetch(apiKey, {
        Header: {'Authorization':'563492ad6f917000010000011e3759a10b1d42e8ba6597739c99dda3'}
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getapi();
