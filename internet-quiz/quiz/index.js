var ammtCorrect = 0;
var finalScore = 0;
var isCorrectQ1 = null;
var isCorrectQ2 = null;
var isCorrectQ3 = null;
var isCorrectQ4 = null;
var isCorrectQ5 = null;

let q1a = document.getElementById('q1a');
let q2a = document.getElementById('q2a');
let q3a = document.getElementById('q3a');
let q4a = document.getElementById('q4a');
let q5a = document.getElementById('q5a');

let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');

let resultsDiv = document.getElementById('results');
let resultCorrect = document.getElementById('resultCorrect');
let resultPercent = document.getElementById('resultPercent');

let errorBox = document.getElementById('errorBox');
let errorText = document.getElementById('errorText');

function checkQ1() {
    if (q1a.value == 'q1a2') {
        console.log("Q1 Correct");
        var q1f = true
    } else {
        console.log("Q1 Incorrect");
        var q1f = false;
    };
    return q1f;
}

function checkQ2() {
    if (q2a.value == 'q2a2') {
        console.log("Q2 Correct");
        var q2f = true
    } else {
        console.log("Q2 Incorrect");
        var q2f = false;
    };
    return q2f;
}

function checkQ3() {
    if (q3a.value == 'q3a1') {
        console.log("Q3 Correct");
        var q3f = true
    } else {
        console.log("Q3 Incorrect");
        var q3f = false;
    };
    return q3f;
}

function checkQ4() {
    if (q4a.value == 'q4a2') {
        console.log("Q4 Correct");
        var q4f = true
    } else {
        console.log("Q4 Incorrect");
        var q4f = false;
    };
    return q4f;
}

function checkQ5() {
    if (q5a.value == 'q5a4') {
        console.log("Q5 Correct");
        var q5f = true
    } else {
        console.log("Q5 Incorrect");
        var q5f = false;
    };
    return q5f;
}


function checkAnswers() {
    // Answer Checking

    // checkQ1();
    var isCorrectQ1 = checkQ1();
    console.log("var q1 " + isCorrectQ1);
    console.log("--------------------------------------------------");

    // checkQ2();
    var isCorrectQ2 = checkQ2();
    console.log("var q2 " + isCorrectQ2);
    console.log("--------------------------------------------------");

    // checkQ3();
    var isCorrectQ3 = checkQ3();
    console.log("var q3 " + isCorrectQ3);
    console.log("--------------------------------------------------");

    // checkQ4();
    var isCorrectQ4 = checkQ4();
    console.log("var q4 " + isCorrectQ4);
    console.log("--------------------------------------------------");

    // checkQ5();
    var isCorrectQ5 = checkQ5();
    console.log("var q5 " + isCorrectQ5);
    console.log("--------------------------------------------------");

    // Scoring Calculations

    if (isCorrectQ1 == true) {
        q1.classList.add("correct");
        q1.classList.remove("incorrect");
    } else if (isCorrectQ1 == false) {
        q1.classList.add("incorrect");
        q1.classList.remove("correct");
    } else {
        errorBox.classList.remove('hidden');
        errorText.innerHTML = "Error, developer check Console < /br> Contact aliarseel1@gmail.com for support";
    };

    if (isCorrectQ2 == true) {
        q2.classList.add("correct");
        q2.classList.remove("incorrect");
    } else if (isCorrectQ2 == false) {
        q2.classList.add("incorrect");
        q2.classList.remove("correct");
    } else {
        errorBox.classList.remove('hidden');
        errorText.innerHTML = "Error, developer check Console < /br> Contact aliarseel1@gmail.com for support";
    };

    if (isCorrectQ3 == true) {
        q3.classList.add("correct");
        q3.classList.remove("incorrect");
    } else if (isCorrectQ3 == false) {
        q3.classList.add("incorrect");
        q3.classList.remove("correct");
    } else {
        errorBox.classList.remove('hidden');
        errorText.innerHTML = "Error, developer check Console < /br> Contact aliarseel1@gmail.com for support";
    };

    if (isCorrectQ4 == true) {
        q4.classList.add("correct");
        q4.classList.remove("incorrect");
    } else if (isCorrectQ4 == false) {
        q4.classList.add("incorrect");
        q4.classList.remove("correct");
    } else {
        errorBox.classList.remove('hidden');
        errorText.innerHTML = "Error, developer check Console < /br> Contact aliarseel1@gmail.com for support";
    };

    if (isCorrectQ5 == true) {
        q5.classList.add("correct");
        q5.classList.remove("incorrect");

    } else if (isCorrectQ5 == false) {
        q5.classList.add("incorrect");
        q5.classList.remove("correct");
    } else {
        errorBox.classList.remove('hidden');
        errorText.innerHTML = "Error, check Console";
    };

    if (q1.classList.contains("correct")) {
        ammtCorrect ++;
    };

    if (q2.classList.contains("correct")) {
        ammtCorrect ++;
    };

    if (q3.classList.contains("correct")) {
        ammtCorrect ++;
    };

    if (q4.classList.contains("correct")) {
        ammtCorrect ++;
    };

    if (q5.classList.contains("correct")) {
        ammtCorrect ++;
    };
    
    console.log("Ammount Correct: " + ammtCorrect)
    finalScore =  ammtCorrect * 20 
    console.log("Final Score: " + finalScore)

    resultsDiv.classList.remove('hidden');
    resultCorrect.innerHTML = "You got "+ ammtCorrect + " Correct"
    resultPercent.innerHTML = "Final Score: "+ finalScore + "%"

    ammtCorrect = 0
    finalScore = 0
};
