let myQuestions = [{
        id: 1,
        question: "In which HTML element do we put in JavaScript code ?",
        answers: {
            a: "< js >",
            b: "< script >",
            c: "< body >",
            d: "< link >",
        },
        rightanswers: "a"
    },
    {
        id: 2,
        question: "Which HTML attribute is used to reference an external JavaScript file?",
        answers: {
            a: "src",
            b: "rel",
            c: "type",
            d: "href",
        },
        rightanswers: "d"
    },
    {
        id: 3,
        question: "How would you write \"Hello\" in an alert box?",
        answers: {
            a: " msg(\"Hello\");",
            b: "alertBox(\"Hello\");",
            c: "document.write(\"Hello\";)",
            d: "alert(\"Hello\");",
        },
        rightanswers: "d"
    },
    {
        id: 4,
        question: "JavaScript is directly related to the \"Java\" programming language?",
        answers: {
            a: "True",
            b: "False"
        },
        rightanswers: "b"
    },
    {
        id: 5,
        question: "A variable in JavaScript must start with which special character",
        answers: {
            a: "@",
            b: "$",
            c: "#",
            d: "No Special Character",
        },
        rightanswers: "d"
    }
];

const quizBody = document.querySelector('#quizWraper');
const quizRespond = document.getElementById('quizmsg');
const quizSubmit = document.getElementById('quizSubmition');

function buildQuiz() {
    const outputs = [];
    myQuestions.forEach((curQuestion, numQuestion) => {
        const answers = [];
        //console.log(answers);

        for (letter in curQuestion.answers) {
            answers.push(`<label><input type=radio name=question${curQuestion.id} value = ${letter}>${letter}: ${curQuestion.answers[letter]} </label>`)
        };

        outputs.push("<div class=quiz_wrapper><p> " + curQuestion.id + ". " + curQuestion.question +
            "</p> <div class=answers>" + answers.join('') + "</div></div>");

    });

    //console.log(answers.join(''));

    quizBody.innerHTML = outputs.join('');
};

function submit() {
    let total = 0;
    const answerContainers = quizBody.querySelectorAll('.answers');
    const respondError = []

    myQuestions.forEach((curQuestion, numQuestion) => {;
        const answerContainer = answerContainers[numQuestion];
        const outputs = answerContainer.querySelectorAll('input');
        let flat = 0;

        for (let output of outputs) {

            if (output.checked) {
                if (output.value == curQuestion.rightanswers) {
                    total += 1;

                };
                flat = 1;
            };
        };
        if (flat === 0) {
            respondError.push(`please input question ${curQuestion.id}`);
            //alert(respondError.join());
            //alert("please input question" + curQuestion.id`);
        } else {
            //console.log("you have input question" + curQuestion.id);
        }

        //const selector = `input[name=questionname=question${curQuestion.id}]:checked`;
        //const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        //const useranswer = answerContainer.querySelectorAll('input').checked;
        const test = document.querySelector(".answers input").checked;
        //console.log(outputs);
    });
    console.log(total);
    console.log(respondError.join("\n"));
    quizRespond.innerHTML = respondError.join("\n");
};
//quizBody.innerHTML = "testing";
buildQuiz();
submit()