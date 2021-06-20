// DISPLAY, INPUT AND INTERACTIONS ===============================

const wordsDisplay = document.getElementById("words-display")
const wordsInput = document.getElementById("words-input")
const restartButton = document.getElementById("retry-button")

let letterCounter = 0
let arrayCounter = 0

let rightWordsCounter = 0
let wrongWordsCounter = 0

let newWordsArray = shuffleArray(allWords)

wordsDisplay.value = newWordsArray.join(" ")

let currentWord = newWordsArray[arrayCounter]

// shuffles the array order
function shuffleArray(array, difficultLevel) {
    switch(difficultLevel) {
        case 1: 
            "" 
            break
        case 2: 
            "" 
            break
        case 3: 
            "" 
            break
        default: 
        for (let index = array.length - 1; index > 0; index--) {
            const aleatoryElement = Math.floor(Math.random() * (index + 1));
            [array[index], array[aleatoryElement]] = [array[aleatoryElement], array[index]];
        }
        return array;
    }
}

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

// resets array counter -> when the game restarts 
function resetArrayCounter() {
    arrayCounter = 0
    return arrayCounter
}

// resets the right words counter
function resetRightWordsCounter() {
    rightWordsCounter = 0
    return rightWordsCounter
}

// resets the wrong words counter
function resetWrongWordsCounter() {
    wrongWordsCounter = 0
    return wrongWordsCounter
}

// updates display content 
function updateDisplayContent(displayContent) {
    displayContent.shift()
    wordsDisplay.value = displayContent.join(" ")
}

// updates current word
function updateCurrentWord(wordsArray) {
    currentWord = wordsArray[0]
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
                <p>Palavras corretas: <span class="result-info" id="right-words">${rightWordsCounter}</span></p>
            </div>
            
            <div class="extra-result-infos">
                <p>Palavras erradas: <span class="result-info" id="wrong-words">${wrongWordsCounter}</span></p>
            </div>

            <div class="extra-result-infos">
                <p>Precisão: <span class="result-info" id="precision">${precision.toFixed(2)}%</span></p>
            </div>
        </div>
    `

    resultsSection.appendChild(resultsContainer)
    
}

// clear the results of typing test (used on restart)
function clearResults() {
    resultsContainer = document.querySelector(".results-container")
    if(resultsContainer != null) {
        resultsContainer.classList.add("hidden")
    }
}

// [END] DISPLAY, INPUT AND INTERACTIONS ===============================

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let intervalSetting = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;
        
        timer == 0 ? (
            window.clearInterval(intervalSetting),
            endGame()
        ) : ""

        timer-- < 0 ? timer = duration : ""
    }, 1000)
}

// starts the game
function startGame(sortedWords) {
    let newWordsArray = sortedWords.slice(0, sortedWords.length)
    wordsInput.addEventListener("keydown", event => {
        if (arrayCounter == 0 && letterCounter == 0) {
            startTimer(60, document.querySelector('.timer'))
        }
        if (verifySpacePress(event)) {
            compairWrotenToRight(currentWord, verifyWrotenWord())
            increaseArrayCounter()
            updateDisplayContent(newWordsArray)
            updateCurrentWord(newWordsArray)
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

// restarts the game
function restartGame(wordsDisplay, sortedWords) {
    clearResults()
    if(resultsContainer == null) {
        location.reload() 
    } else {
        setInterval(()=>location.reload(), 2001)
    }
}

startGame(allWords)

/* GRAPHIC =========================================*/
const container = document.querySelector('.graphic-container')

const array = [65, 70, 85, 80, 60, 70, 100, 120]

function createGraphic(array, container) {
    let counter = 0
    array = array.map(item => {
        item = item / 5
        console.log(Number(item.toFixed(0)))
        return Number(item.toFixed(0))
    })
    while(counter < array.length) {
        const table = document.createElement('table')
        table.classList.add('table')
        for(let i = 0; i < array[counter]; i++) {
            const tr = document.createElement('tr')
            tr.innerHTML = `<td></td>`
            table.appendChild(tr)
            container.appendChild(table)
        }
        const wordsWritenRow = document.createElement('tr');
        wordsWritenRow.classList.add('words-writen')

        wordsWritenRow.innerHTML = array[counter] * 5
        table.appendChild(wordsWritenRow)
        counter++
    }
}

createGraphic(array, container)