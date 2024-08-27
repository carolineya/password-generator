let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"
]

let specChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
    "+", "=", "{", "}", "[", "]", "|", "\\", ";", ":", "<", ">", ",", ".", "/", "?"
]

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
    "S", "T", "U", "V", "W", "X", "Y", "Z"
]


let passEl = document.getElementById("password")
/*
function getNumber() {
    let passLength = document.getElementById("pass-length").value 
    console.log(passLength)
    if (passLength === "") {
        passEl.textContent = "Oops! Please enter the number of characters."
    } else if (passLength % 1 != 0 || passLength <= 0) {
        passEl.textContent = "Oops! The number of characters needs to be a whole number greater than 0."
    } else {
        createPassword(passLength)
    }
}
    */

function findChecks() {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkedNames = [];
    checked.forEach(function(cb){
        checkedNames.push(cb.name)
    })
    return checkedNames
}

function clearMessage() {
    passEl.textContent = ""
    setTimeout(createPassword, 100)
}

function createPassword() {
    let passLength = document.getElementById("pass-length").value 

    if (passLength === "") {
        passEl.textContent = "Oops! Please enter the number of characters."
    } else if (passLength % 1 != 0 || passLength <= 0 || passLength > 100) {
        passEl.textContent = "Oops! The number of characters needs to be a whole number greater than 0 and less than or equal to 100."
    } else {
        let checked = findChecks()
        // reset character set
        let charSet = alphaLower
        // reset password
        let password = ""
        
        // add special characters if box checked
        if (checked.includes("spec-char")) {
            charSet = charSet.concat(specChar)
        }

        // add numbers if numeric characters picked
        if (checked.includes("num-char")) {
            charSet = charSet.concat(numbers)
        }

        if (checked.includes("up-char")) {
            charSet = charSet.concat(alphaUpper)
        }
        
        // create password
        for (let i = 0; i < passLength; i++) {
            let randInd = Math.floor(Math.random() * charSet.length)
            password += charSet[randInd]
        }

        passEl.textContent = password
    }
}
