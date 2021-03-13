    const quizDB = [
    {
        question: "Q1: What does HTML stand for?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "HyperText Mamrkup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheep",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What does HTTP stand for?",
        a: "HyperText Transfer Product",
        b: "Hey Transfer Protocol",
        c: "HyperText Transfer Protocol",
        d: "HyperText Test Protocol",
        ans: "ans3"
    },
    {
        question: "Q4: What does JS stand for?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },
    {
        question: "Q5: What is the font-size of the h1 heading tag?",
        a: "3.5",
        b: "2 em",
        c: "2.5 em",
        d: "1.5 em",
        ans: "ans2"
    },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");

let questioncount = 0 
let score = 0

const loadQuestion = () => {
    const questionList = quizDB[questioncount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {              //error forEach
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    
   return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked = false;
    })
}

submit.addEventListener("click",()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

    deselectAll();

    if(questioncount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} ✌️</h3>
        <button class="btn" onclick="location.reload">Attemp Again</button>
        `;
        showScore.classList.remove("scoreArea");
    }
});
