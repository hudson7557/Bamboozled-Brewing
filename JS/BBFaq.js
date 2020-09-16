var answers = document.getElementById("answers")
var questionAnswer = document.getElementById("question-title")
var allegations = document.getElementById("allegations")
var wtb = document.getElementById("where-to-buy")
var na = document.getElementById("non-alcoholic")
var nutrition = document.getElementById("nutrition")
var PSL = document.getElementById("psl")


//List to make making the buttons/links easier.
spans = [
    allegations,
    wtb,
    na,
    nutrition,
    PSL
]

//Creates the links in the list and handles placing their title and answer into the answer box.

for (let x = 0; x < spans.length; x++) {
    spans[x].addEventListener( 'click', () => {
        questionAnswer.textContent = document.getElementById(spans[x].id).textContent
        answers.textContent = document.getElementById(spans[x].id + "_answer").textContent
    });
}
