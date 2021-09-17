var btnTranslate = document.querySelector("#translate-button");
var textInput = document.querySelector("#translate-input");
var outputText = document.querySelector("#translate-output");


var serverURL = "	https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {
    return `${serverURL}?text=${input}`;
}


function errorHandler(error) {
    alert("Something wrong with server: try again after some time");
}


function clickHandler() {
    var inputText = textInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; // Output.   
        })
        .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)

