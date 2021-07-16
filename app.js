var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

function clickHandler()
{
    outputText.innerText = "Translated: "+ textInput.value;
};



btnTranslate.addEventListener("click", clickHandler)










// console.log(textInput.value);   // Use this line in driving repo.