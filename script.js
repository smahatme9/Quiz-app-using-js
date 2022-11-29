
var InputName;



// --------------------------Category Js Starts-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var Name = document.getElementById('Name');
var target = document.getElementById('categoryAll');
let ResultBtn = document.querySelector('.see-result-btn');
let Result = document.getElementById('Result');
// let selectFirst = document.getElementById('selectFirst'); 

function selectCategory() {
    InputName = document.getElementById('Name').value;
    if (InputName == "") {
        alert("Please Enter Your Name");
    } else {
        categoryAll.style.display = 'block';
        document.getElementById('Name').value = '';
    }
}
// --------------------------Category Js Starts-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//OptionBox question -----------------------------Starts------------------>>>>>>>>>>>>>>>>>>

let question_number_element = document.getElementById("current-question-num");
let question_txt_element = document.getElementById("question-text");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let quiz_score = document.getElementById("correct-answer");
let time_element = document.getElementById("timer");

var current_question_number = 0;
let score = 0;
var time;
const total_time = 10;
var sec = total_time;
// ============handle timer ==========================Starts================
function timer(a) {
    time_element.innerHTML = sec;
    sec--;
    if (sec == 0) {
        sec = total_time;
        clearInterval(time);
        current_question_number++;
        if (current_question_number < 10) {
            showQuestion(a);
        }
    }
}
// ============handle timer ==========================Ends================
// function for show Quiz -------
var tempObj;
function showQuestion(q) {
    tempObj = q;
    let objLength = q.length;
    sec = total_time; //asign sec to total Time of timer----
    clearInterval(time);
    timer(q);
    time = setInterval(timerFun, 1000);
    document.querySelectorAll("input[name = opt]").forEach(option => option.checked = false);

    if (current_question_number >= objLength) {
        clearInterval(time);
        current_question_number = 0;
        result();
    }
    question_number_element.innerHTML = (current_question_number + 1) + "/10 ";
    question_txt_element.innerHTML = q[current_question_number].question;
    option_1_element.innerHTML = q[current_question_number].opt1;
    option_2_element.innerHTML = q[current_question_number].opt2;
    option_3_element.innerHTML = q[current_question_number].opt3;
    option_4_element.innerHTML = q[current_question_number].opt4;
    quiz_score.innerHTML = score;

    function timerFun() {
        if (current_question_number <= 10) {
            timer(tempObj);
        }
    }
}

// ================== ShowQuestion2 ============================

// ===============================================================

next_button.addEventListener('click', () => {
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if (optionIdSelected == null) {
        alert("Please Select One Option");
    } else {
        let option_correct = tempObj[current_question_number].correct;
        if (optionIdSelected.id == option_correct) {
            score++;
        }
        current_question_number++;
        if (current_question_number >= tempObj.length) {
            current_question_number = 0;
            clearInterval(time);
            result();
            localStorage.setItem("score", score);
            localStorage.href = "./resultPage.html";
        } else {
            showQuestion(tempObj);
        }
    }
});



// -----------Function for Result Ends------------------------------------->>>>>>
// Result function Starts -------------------------------------------------------

function result() {
    $("#questionScreen").hide();
    $("#Screen").hide();
    $("#resultScreen").show();
    document.getElementById('UserName').innerHTML = `${InputName}`;
    document.getElementById('Totaltime').innerHTML = `${"1" + time}`;
    document.getElementById('attemptQuestion').innerHTML = `${10 - score}`;
    document.getElementById('correctAnswers').innerText = `${score}`;
    document.getElementById('wrongAnswers').innerText = `${10 - score}`;
    document.getElementById('percentage').innerText = `${score * 100 / 10}`;

    score = 0;

}

// Result function Ends -------------------------------------------------------
// --------------------------Quiz Box Js Starts-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ------------------------ SelectCategory CategoryFirst Onclick Function Start --------------------------------------->

function selectFirst() {
    $("#questionScreen").hide();
    $("#Screen").show();
    showQuestion(quiz);
    timer(quiz);
    quizHeader.innerHTML = "Pipes and Certains";
}

function selectSecond() {
    $("#questionScreen").hide();
    $("#Screen").show();
    timer(quizTwo);
    showQuestion(quizTwo);
    quizHeader.innerHTML = "Probability";
}

// -----------------------SelectThird-category----------->>>
function selectThird() {
    $("#questionScreen").hide();
    $("#Screen").show();
    timer(quizThird);
    showQuestion(quizThird);
    quizHeader.innerHTML = "Problem On Ages";
}

// ------------------------------------SelectFourth-Category-------------->>>>>>>>>

function selectFourth() {
    $("#questionScreen").hide();
    $("#Screen").show();
    timer(quizFour);
    showQuestion(quizFour);
    quizHeader.innerHTML = "Profit And Loss";
}

// ----------------------------------------------------------------------------------------------------------------
// ------------------------ SelectCategory CategoryFirst  Onclick Function Ends --------------------------------------->

// ---------------------------------Restart Quiz Challenge Using Start Again Btn ------------------------>
function RestartQuiz() {
    showQuestion(tempObj);
    timer(tempObj);
    $("#Screen").show();
    $("#resultScreen").hide();
}
// ---------------------------------Restart Quiz Challenge Using Start Again Ends ------------------------>
// ---------------------------------Restart App Using Go To Home Btn  Starts ------------------------>
function RestartApp() {
    $("#questionScreen").show();
    $("#categoryAll").hide();
    // $("#Screen").hide();
    $("#resultScreen").hide();
}
// ===========================================================================
const quiz = [
    {
        // For Pipes And Cisterns button
        question: "An outlet pipe can empty 2/3 rd of a cistern in 12 minutes. In 8 minutes, what part of the cistern will be emptied?",
        opt1: "4/9",
        opt2: "2/3",
        opt3: "4/7",
        opt4: "1/6",
        correct: "opt1",
    },
    {
        // For Pipes And Cisterns button
        question: "A cistern which could be filled in 9 hours takes one hour more to be filled owing to a leak in its bottom. If the cistern is full in what time will the leak e",
        opt1: "45 hrs",
        opt2: "60 hrs",
        opt3: "75 hrs",
        opt4: "90 hrs",
        correct: "opt4",
    },
    {
        // For Pipes And Cisterns button
        question: " Three pipes of same capacity can fill a tank in 8 hours. If there are only two pipes of same capacity, the tank can be fhours",
        opt1: "17hours",
        opt2: "12hours",
        opt3: "16hours",
        opt4: "24hours",
        correct: "opt2",
    },
    {
        // For Pipes And Cisterns button
        question: " Pipe A can fill a tank in 6 hours. Due to a leak at the bottom, it takes 9 hours for the pipe A to fill the tank. In what time can the leak alone empty the full tank?",
        opt1: "16 hours",
        opt2: "15 hours",
        opt3: "18 hours",
        opt4: "17 hours",
        correct: "opt3",
    },
    {
        // For Pipes And Cisterns button
        question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank? min",
        opt1: "12 min",
        opt2: "15 min",
        opt3: "25 min",
        opt4: "50 min",
        correct: "opt1",
    },
    {
        // For Pipes And Cisterns button
        question: "A tap can fill a tank in 6 hours. After half the tank is filled three more similar taps are opened. What is the total time taken to fill the tank completely?",
        opt1: "3 hrs 15 min",
        opt2: "3 hrs 45 min",
        opt3: "3 hrs",
        opt4: "4 hrs 15 min",
        correct: "opt2",
    },
    {
        // For Pipes And Cisterns button
        question: "Pipe A can fill a tank in 5 hours, pipe B in 10 hours and pipe C in 30 hours. If all the pipes are open, in how many hours will the tank be ",
        opt1: "2",
        opt2: "2.5",
        opt3: "3",
        opt4: "3.5",
        correct: "opt3",
    },
    {
        // For Pipes And Cisterns button
        question: "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in?",
        opt1: "113/17 hours",
        opt2: "28/11 hours",
        opt3: "39/17 hours",
        opt4: "4 1/2 hours",
        correct: "opt3",
    },
    {
        // For Pipes And Cisterns button
        question: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 1/3 hours to fill the tank. The leak can drain all the water of the tank in?",
        opt1: "41/3 hrs",
        opt2: "7 hrs",
        opt3: "8 hrs",
        opt4: "14 hrs",
        correct: "opt4",
    },
    {
        // For Pipes And Cisterns button
        question: " A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
        opt1: "20 hr",
        opt2: "25 hr",
        opt3: "35 hr",
        opt4: "Cannot be determined",
        correct: "opt3",
    },
]

// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Starts ---------------------->
const quizTwo = [
    {
        // Probability Question button
        question: "  The probability that a number selected at random from the first 50 natural numbers is a composite n",
        opt1: "21/25",
        opt2: "17/25",
        opt3: "4/25",
        opt4: "8/25",
        correct: "opt2",
    },
    {
        // Probability Question button
        question: " A coin is tossed live times. What is the probability that there is at the least one tail?",
        opt1: "31/32",
        opt2: "1/16",
        opt3: "1/2",
        opt4: "1/32",
        correct: "opt1",
    },
    {
        //      Probability Question button
        question: "If a number is chosen at random from the set {1, 2, 3, ...., 100}, then the probability that the chosen number is a perfect cube is -",
        opt1: "1/2",
        opt2: "1/2",
        opt3: "4/13",
        opt4: "1/10",
        correct: "opt1",
    },
    {
        // Probability Question button
        question: " Out of first 20 natural numbers, one number is selected at random. The probability that it is either an even number or a prime number is -",
        opt1: "1/2",
        opt2: "16/19",
        opt3: "4/5",
        opt4: "17/20",
        correct: "opt4",
    },
    {
        // Probability Question button
        question: " If two dice are thrown together, the probability of getting an even number on one die and an odd number on the other is -",
        opt1: "1/4",
        opt2: "1/2",
        opt3: "3/4",
        opt4: "3/5",
        correct: "opt2",
    },
    {
        // Probability Question button
        question: "If four coins are tossed, the probability of getting two heads and two tails i",
        opt1: "3/8",
        opt2: "6/11",
        opt3: "2/5",
        opt4: "4/5",
        correct: "opt1",
    },
    {
        // Probability Question button
        question: " If a card is drawn from a well shuffled pack of cards, the probability of drawing a spade or a king is -",
        opt1: "19/52",
        opt2: "17/52",
        opt3: "5/13",
        opt4: "4/13",
        correct: "opt4",
    },
    {
        // Probability Question button
        question: " If six persons sit in a row, then the probability that three particular persons are always together is -",
        opt1: "1/30",
        opt2: "3/10",
        opt3: "1/5",
        opt4: "4/5",
        correct: "opt3",
    },
    {
        // Probability Question button
        question: "Three 6 faced dice are thrown together. The probability that all the three show the same number on them is -",
        opt1: "1/16",
        opt2: "1/36",
        opt3: "5/9",
        opt4: "5/12",
        correct: "opt2",
    },
    {
        // Probability Question button
        question: "Out of 15 consecutive numbers, 2 are chosen at random. The probability that they are both odds or both primes i",
        opt1: "10/17",
        opt2: "10/19",
        opt3: "46/105",
        opt4: " Cannot be determined",
        correct: "opt4",
    },
]
// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Ends ---------------------->

// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Starts ---------------------->

const quizThird = [
    {
        // Problems On Ages Question button
        question: "Ten years ago A was half of B in age. If the ratio of their present ages is 3 : 4, what will be the total of their prese",
        opt1: "30",
        opt2: "32",
        opt3: "35",
        opt4: "37",
        correct: "opt3",
    },
    {
        // Problems On Ages Question button
        question: " In 10 years, A will be twice as old5as B was 10 years ago. If A is now 9 years older than B, the present age of B is",
        opt1: "35",
        opt2: "32",
        opt3: "39",
        opt4: "31",
        correct: "opt3",
    },
    {
        // Problems On Ages Question button
        question: " Sachin was twice as old as Ajay 10 years back. How old is Ajay today if Sachin will be 40 years old 10 years hen",
        opt1: "15",
        opt2: "12",
        opt3: "10",
        opt4: "20",
        correct: "opt4",
    },
    {
        // Problems On Ages Question button
        question: "Ratio between Rahul and Deepak is 4:3, After 6 Years Rahul age will be 26 years. What is Deepak present age",
        opt1: "15",
        opt2: "14",
        opt3: "12",
        opt4: "16",
        correct: "opt1",
    },
    {
        // Problems On Ages Question button
        question: "The total age of A and B is 12 years more than the total age of B and C. C is how many year younger th",
        opt1: "13",
        opt2: "12",
        opt3: "14",
        opt4: "15",
        correct: "opt2",
    },
    {
        // Problems On Ages Question button
        question: "Ten years ago, P was half of Q in age. If the ratio of their present ages is 3:4, what will be the total of their present ages",
        opt1: "32",
        opt2: "34",
        opt3: "33",
        opt4: "33",
        correct: "opt4",
    },
    {
        // Problems On Ages Question button
        question: "Ages of two persons differ by 16 years. If 6 year ago, the elder one be 3 times as old the younger one, find their pre",
        opt1: "12.28",
        opt2: "14.30",
        opt3: "16.32",
        opt4: "18.34",
        correct: "opt2",
    },
    {
        // Problems On Ages Question button
        question: "The ratio between the present ages of P and Q is 6:7. If Q is 4 years old than P, what will be the ratio of the ages of P and Q after 4 years",
        opt1: "7:4",
        opt2: "7:3",
        opt3: "7:8",
        opt4: "7:1",
        correct: "opt3",
    },
    {
        // Problems On Ages Question button
        question: "Sachin is younger than Rahul by 7 years. If the ratio of their ages is 7:9, find the age of",
        opt1: "25",
        opt2: "24.5",
        opt3: "23.5",
        opt4: "21",
        correct: "opt2",
    },
    {
        // Problems On Ages Question button
        question: " Raju age after 15 years will be 5 times his age 5 years back, What is the present age of Raju",
        opt1: "15 years",
        opt2: "20 years",
        opt3: "10 years",
        opt4: "11 years",
        correct: "opt3",
    },
]
// -------- Function For PrintQuestions Importing CategoryThird-Problem On Ages-Questions  Ends ---------------------->
// -------- Function For PrintQuestions Importing CategoryFourth-Problem On Ages-Questions  Starts ---------------------->
const quizFour = [
    {
        // Problems On Profit and loss Question button
        question: " A cycle is bought for Rs.900 and sold for Rs.1080, find the gain perce",
        opt1: "16 3 /3%",
        opt2: "20%",
        opt3: "18%",
        opt4: "25%",
        correct: "opt2",
    },
    {
        // Problems On Profit and loss Question button
        question: "An article is bought for Rs.675 and sold for Rs.900, find the gain perce",
        opt1: "16 2/3%",
        opt2: "30%",
        opt3: "33 1/3%",
        opt4: "33 1/6%",
        correct: "opt3",
    },
    {
        // Problems On Profit and loss Question button
        question: "The cost price of a radio is Rs.1500 and it was sold for Rs.1230, find the lo",
        opt1: "18%",
        opt2: "9%",
        opt3: "15%",
        opt4: "6%",
        correct: "opt1",
    },
    {
         // Problems On Profit and loss Question button
        question: "The sale price sarees listed for Rs.400 after successive discount is 10% anRS.",
        opt1: "RS.357",
        opt2: "RS.340",
        opt3: "RS.342",
        opt4: "RS.338",
        correct: "opt3",
    },
    {
        // Problems On Profit and loss Question button
        question: "A single discount equivalent to the discount series of 20%, 10% and 5% is?",
        opt1: "25%",
        opt2: "30%",
        opt3: "31.6%",
        opt4: "33.5%",
        correct: "opt3",
    },
    {
         // Problems On Profit and loss Question button
        question: " If a man lost 4% by selling oranges at the rate of 12 a rupee at how many a rupee must he sell them to gain 44%?",
        opt1: "7",
        opt2: "8",
        opt3: "9",
        opt4: "10",
        correct: "opt2",
    },
    {
         // Problems On Profit and loss Question button
        question: " By selling 150 mangoes, a fruit-seller gains the selling price of 30 mangoes. Find the gain percent?",
        opt1: "20%",
        opt2: "25%",
        opt3: "18%",
        opt4: "30%",
        correct: "opt2",
    },
    {
        // Problems On Profit and loss Question button
        question: " By selling 12 pencils for a rupee a man loses 20%. How many for a rupee should he sell in order to gain 20%?",
        opt1: "16",
        opt2: "8",
        opt3: "9",
        opt4: "12",
        correct: "opt2",
    },
    {
         // Problems On Profit and loss Question button
        question: " By selling 50 meters of cloth. I gain the selling price of 15 meters. Find the gain per%",
        opt1: "35%",
        opt2: "30%",
        opt3: "40%",
        opt4: "42 6/7%",
        correct: "opt4",
    },
    {
        // Problems On Profit and loss Question button
        question: "Ram sold two bicycles, each for Rs.990. If he made 10% profit on the first and 10% loss on the second, what is the total cost of both bicycles?",
        opt1: "RS.2000",
        opt2: "RS.1980",
        opt3: "RS.1891",
        opt4: "RS.1750",
        correct: "opt1",
    },
]

