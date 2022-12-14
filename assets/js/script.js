// constants 
const definition = document.createElement('p');
const body = document.querySelector('body');
const button = document.querySelector('a');
const randomWordBox = document.getElementById('random-word');
const randomWordDefinition = document.getElementById('definition-box');
const randomPic = document.getElementById('word-pic');
const img404 = document.getElementById('picerror');
const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input")
const localStor = document.getElementById('lastSrch')

// function to get random Word
const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => {
            return response.json();
        })
        .then(response => {
            randomWordBox.textContent = response;
            randomDefinition(randomWordBox);
            // code to pull image from word
            var randoWord = response;
            var picUrl = "https://api.giphy.com/v1/gifs/search?q=" + randoWord + "&limit=1&api_key=xSkUGCs7S67gImimEp1a2QcdCkxxPGKj";
            function createPic() {
                console.log(picUrl);
                fetch(picUrl)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        if (data.data[0]?.images.downsized.url) {
                            console.log("Success");
                            randomPic.src = data.data[0]?.images.downsized.url;
                            img404.textContent = ""
                        }
                        else {
                            console.log("Failure");
                            randomPic.src = "https://media0.giphy.com/media/gioXyl9A3eiObmtwKZ/giphy.gif?cid=ecf05e47vedt6wiud3aq4lql2e6856m9dho2rg1he05t6ulo&rid=giphy.gif&ct=g"
                            img404.textContent = "No image found for word :("
                        }
                    })
            }
            createPic();
        })
        .catch(err => {
            console.log(err);
            randomPic.src = "https://media0.giphy.com/media/gioXyl9A3eiObmtwKZ/giphy.gif?cid=ecf05e47vedt6wiud3aq4lql2e6856m9dho2rg1he05t6ulo&rid=giphy.gif&ct=g"
            img404.textContent = "No image found for word :("
        })
}

// Random button EventListener
button.addEventListener('click', function () {
    randomWord();
    return;
})

// function to get definition of random word
const randomDefinition = (word) => {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=4c0282a9-8b9b-4d66-9985-0bc2c346b67e`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
            randomWordDefinition.textContent = response[0].shortdef[0];
        })
        .catch(err => {
            console.log(err);
            randomWordDefinition.textContent = "No definition, sorry. Try again.  :)"
        })
}
function searchWord(userSearch){
    randomWordBox.textContent = userSearch;
    randomDefinition(randomWordBox);
    // code to pull image from word
    var randoWord = userSearch;
    var picUrl = "https://api.giphy.com/v1/gifs/search?q=" + randoWord + "&limit=1&api_key=xSkUGCs7S67gImimEp1a2QcdCkxxPGKj";
    function createPic() {
        console.log(picUrl);
        fetch(picUrl)
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                if (response.meta.status != 200 ) {
                    randomPic.src = "https://media0.giphy.com/media/gioXyl9A3eiObmtwKZ/giphy.gif?cid=ecf05e47vedt6wiud3aq4lql2e6856m9dho2rg1he05t6ulo&rid=giphy.gif&ct=g"
                    img404.textContent = "No image found for word :("
                }
                else {
                    randomPic.src = response.data[0].images.downsized.url;
                    img404.textContent = "";
                }
            })
    }
    createPic();
}
// Local Storage
localStor.textContent = localStorage.getItem('LastSearch');
// Search button EventListener
searchButton.addEventListener('click', function () {
    searchWord(searchInput.value);
    localStorage.setItem('LastSearch', searchInput.value);

})
// Search by last searched word
localStor.addEventListener('click', function(){
    searchWord(localStor.textContent);
})