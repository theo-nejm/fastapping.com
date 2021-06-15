const wordsDisplay = document.getElementById("words-display")
const wordsInput = document.getElementById("words-input")

let letterCounter = 0
let arrayCounter = 0

let toSortWords = ["arroz", "feijao", "batata", "macarrao", "feijoada", "macarronada", "gengibre", "banana", "maça", "torresmo", "salada", "aipim", "alho", "peixe", "fritas", "picanha", "repolho", "maminha", "alcatra", "tabule"]

let currentWord = toSortWords[arrayCounter]
wordsDisplay.value = toSortWords.join(" ")

// let currentWord = toSortWords[arrayCounter]

// clears the input
function clearInput(input) {
    input.value = ""
}

// verifies if pressed letter is equals the right one
function verifyLetterAtm(keyPressed, rightKey) {
    if(keyPressed == rightKey) {
        return true;
    } else {
        return false;
    }
}

// verifies if the space key is pressed
function verifySpacePress (typedKey) {
    if(typedKey.key === " ") {
        return true;
    } else {
        return false;
    }
}

// verifies if backspace key were pressed to reduce letterCounter
function verifyBackspacePress (typedKey) {
    if(typedKey.key === "Backspace") {
        return true;
    } else {
        return false;
    }
}

// increases the array position counter to move to the next word & returns array counter
function increaseArrayCounter() {
    arrayCounter++
    return arrayCounter
}

// decreases the letter position counter to move to check the next typpen letter.
function decreaseLetterCounter() {
    letterCounter--
    return letterCounter
}

// increases the letter position counter to move to check the next typpen letter.
function increaseLetterCounter() {
    letterCounter++
    return letterCounter
}

function resetLetterCounter() {
    letterCounter -= letterCounter
    console.log(letterCounter)
    return letterCounter
}

// updates the current word in array.

wordsInput.addEventListener("keydown", event => {
    if(verifySpacePress(event)) {
        clearInput(wordsInput)
        increaseArrayCounter()
        currentWord = toSortWords[arrayCounter]
        resetLetterCounter()
    } else if(verifyBackspacePress(event)) {
        if(letterCounter <= 0) {
            resetLetterCounter()
            console.log(letterCounter)
        } else {
            decreaseLetterCounter()
        }    
    } else {
        console.log(verifyLetterAtm(event.key, currentWord[letterCounter]))
        console.log(`LD: ${event.key} | LC: ${currentWord[letterCounter]}`)
        console.log(letterCounter)
        increaseLetterCounter()
    }
})