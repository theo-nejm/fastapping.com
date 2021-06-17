// DISPLAY, INPUT AND INTERACTIONS ===============================

const wordsDisplay = document.getElementById("words-display")
const wordsInput = document.getElementById("words-input")

let letterCounter = 0
let arrayCounter = 0

let rightWordsCounter = 0
let wrongWordsCounter = 0

let toSortWords = ["arroz", "feijão", "batata", "macarrão", "feijoada", "macarronada", "gengibre", "banana", "maçã", "torresmo", "salada", "aipim", "alho", "peixe", "fritas", "picanha", "repolho", "maminha", "alcatra", "tabule", "alite", "tapioca", "pizza", "sushi", "açaí", "paçoca", "baião", "pamonha", "panelada", "pastel", "palmito", "sopa", "canja", "bife", "carne", "café", "buchada", "bolo", "chá", "quindim", "canjica", "cachaça", "queijo", "brigadeiro", "acerola", "pudim", "coxinha", "enroladinho", "refrigerante", "beirute", "chimarrão", "milho"]

let currentWord = toSortWords[arrayCounter]

wordsDisplay.value = toSortWords.join(" ")

// let currentWord = toSortWords[arrayCounter]

// clears the input
function clearInput(input) {
    input.value = ""
}

// verifies if pressed letter is equals the right one
function verifyLetterAtm(keyPressed, rightKey) {
    if (keyPressed == rightKey) {
        return true;
    } else {
        return false;
    }
}

// verifies if the space key is pressed
function verifySpacePress(typedKey) {
    if (typedKey.key === " ") {
        return true;
    } else {
        return false;
    }
}

// verifies if backspace key were pressed to reduce letterCounter
function verifyBackspacePress(typedKey) {
    if (typedKey.key === "Backspace") {
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

// resets letter counter --> used on space-key press
function resetLetterCounter() {
    letterCounter -= letterCounter
    return letterCounter
}

// updates display content 
function updateDisplayContent(displayContent) {
    displayContent.shift()
    wordsDisplay.value = displayContent.join(" ")
}

// updates current word
function updateCurrentWord(toSortWords) {
    currentWord = toSortWords[0]
    return currentWord
}

// verifies the wroten word
function verifyWrotenWord() {
    wrotenWord = document.getElementById('words-input').value.trim()
    return wrotenWord
}

// verifies if the wroten word is equals the right one and increases rightWordsCounter if its true and increases wrongWordsCounter if its false
function compairWrotenToRight(rightWord, wrotenWord) {
    if (rightWord == wrotenWord) {
        rightWordsCounter += 1
        return true;
    } else {
        wrongWordsCounter += 1
        return false;
    }
}

// shows the results of typing test 
function showResults(rightWordsCounter, wrongWordsCounter, totalWords) {
    let resultsContainer = document.createElement('div')
    let precision = (100 - (wrongWordsCounter / totalWords * 100))
    resultsContainer.classList.add("results-container")

    const resultsSection = document.getElementById("results-section")

    if(totalWords == rightWordsCounter) {
        precision = 100
    }
    resultsContainer.innerHTML = `
        <div id="ppm">    
            <span id="ppm-value">${totalWords - (wrongWordsCounter / 2)}</span>PPM
        </div>
        
        <div id="extra-result-infos-container">
            <div class="extra-result-infos">
                Palavras corretas: ${rightWordsCounter}
            </div>
            
            <div class="extra-result-infos">
                Palavras erradas: ${wrongWordsCounter}
            </div>

            <div class="extra-result-infos">
                Precisão: ${precision.toFixed(2)}%
            </div>
        </div>
    `

    resultsSection.appendChild(resultsContainer)
}

// [END] DISPLAY, INPUT AND INTERACTIONS ===============================

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    console.log(timer)
    let intervalSetting = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;
        timer == 0 ? window.clearInterval(intervalSetting) : ""

        timer-- < 0 ? timer = duration : ""
        
        if(timer == 0) {
            endGame()
        }
    }, 1000)
}

// starts the game
function startGame() {
    wordsInput.addEventListener("keydown", event => {
        if (arrayCounter == 0 && letterCounter == 0) {
            startTimer(60, document.querySelector('.timer'))
        }
        if (verifySpacePress(event)) {
            compairWrotenToRight(currentWord, verifyWrotenWord())
            increaseArrayCounter()
            updateDisplayContent(toSortWords)
            updateCurrentWord(toSortWords, arrayCounter)
            resetLetterCounter()
            clearInput(wordsInput)
        } else if (verifyBackspacePress(event)) {
            if (letterCounter <= 0) {
                resetLetterCounter()
            } else {
                decreaseLetterCounter()
            }
        } else {
            increaseLetterCounter()
        }
    })
}

// ends the game
function endGame() {
    showResults(rightWordsCounter, wrongWordsCounter, (rightWordsCounter + wrongWordsCounter))
}

startGame()
