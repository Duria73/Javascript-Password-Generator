//Code Review after refactor

const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")

const includeUpperCaseElement = document.getElementById("includeUppercase")
const includeNumberElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")

const form = document.getElementById("passwordGeneratorForm")

 const passwordDisplay = document.querySelector(".password-display");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97,122);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65,90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)).concat(
    arrayFromLowToHigh(91, 96)).concat(
    arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

form.addEventListener("submit", e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUpperCaseElement.checked
    const includeNumbers = includeNumberElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerHTML = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for(let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}








//Pre-code review & refactor

// const passwordLength = document.getElementById("characterAmountNumber");
// const generatePassword = document.querySelector(".submit");

// const passwordDisplay = document.querySelector(".password-display");

// const slider = document.getElementById("characterAmountRange")

// function sliderChange() {
//    passwordLength.value = slider.value
// }

// function whatisValue(e) {
//     e.preventDefault();
//     const length = passwordLength.value;
//     passwordDisplay.innerHTML = "Password"
//     let result = [];

    
//     const upper = document.getElementById("includeUppercase").checked;
//     const numbers = document.getElementById("includeNumbers").checked;
//     const symbols = document.getElementById("includeSymbols").checked;

//     let construct = "abcdefghijklmnopqrstuvwxyz"
//     let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let numberChars = "0123456789"
//     let symbolChars = "!@#$%^&*()"

    
//     if(upper) {
//         construct = upperChars.concat(construct)
       
//     }
    
//     if(numbers) {
//         construct = numberChars.concat(construct)
        
//     }
//     if(symbols) {
//         construct = symbolChars.concat(construct)
      
//     }

//     console.log(construct)

//     for (let i = 0; i < length; i++) {
//     result.push(construct.charAt(Math.floor(Math.random() * construct.length)))
//     }
//     passwordDisplay.innerHTML = result.join("")
// }

// generatePassword.addEventListener("click", whatisValue)

// slider.addEventListener("input", sliderChange)