//(function() {
// Functions
function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
  <input type="radio" name="question${questionNumber}" value="${letter}">
  ${letter} :
  ${currentQuestion.answers[letter]}
  </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question_wraper"><div class="question"> ${currentQuestion.question} </div>
  <div class="question_detail"><div class="question-image"> <img src="${currentQuestion.image}">
  </div>
  <div class="answers"> ${answers.join('')} </div></div></div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() { // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    let numEmpty = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];

        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (!userAnswer) {
            numEmpty++;
            answerContainers[questionNumber].style.color = 'red';
        } else {
            //
        }

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            //answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            //answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    if (numEmpty >= 1) {
        console.log("cancel");
        console.log(numEmpty);
        resultsContainer.innerHTML = '**Please answer all your question';
    } else {
        console.log(numEmpty);
        resultsContainer.innerHTML = '';
        sessionStorage.setItem('resulttest1', numCorrect);
        document.getElementById('test_result').value = numCorrect;
    }

}

// Variables
sessionStorage.setItem('resulttest1', '0');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('test_online_warning');
//const confirmText = document.querySelector('.wpcf7-response-output');
const submitButton = document.getElementById('send_btn');
const submitButton1 = document.getElementById('submit');

//Create data
const myQuestions = [{
        question: "1. What color is this?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_1-min.png",
        answers: {
            A: "Yellow",
            B: "Red",
            C: "Bllue",
            D: "Blue"
        },
        correctAnswer: "D"
    },
    {
        question: "2. Who is this?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_2-min.png",
        answers: {
            A: "Father",
            B: "Sister",
            C: "Sisster",
            D: "Uncle"
        },
        correctAnswer: "B"
    },
    {
        question: "3. Can a bird fly?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_3-min.png",
        answers: {
            A: "Yes, it can",
            B: "No, I don’t",
            C: "Yes, I do",
            D: "Yes, I can"
        },
        correctAnswer: "A"
    },
    {
        question: "4. How is he?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_4-min.png",
        answers: {
            A: "Sad",
            B: "No, he isn’t happy",
            C: "Yes, he is happy",
            D: "He is happy"
        },
        correctAnswer: "D"
    },
    {
        question: "5. How’s the weather?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_5-min.png",
        answers: {
            A: "It’s rainy ",
            B: "It’s sunny",
            C: "It’s foggy",
            D: "It’s windy"
        },
        correctAnswer: "A"
    },
    {
        question: "6. What is the boy doing?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_6-min.png",
        answers: {
            A: "He is singing",
            B: "He is eating",
            C: "He is swimming",
            D: "He is reading"
        },
        correctAnswer: "B"
    },
    {
        question: "7. She has a _________.",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_7-min.png",
        answers: {
            A: "Stomachache",
            B: "Headache",
            C: "Back pain",
            D: "Toothache"
        },
        correctAnswer: "A"
    },
    {
        question: "8. Where did you go yesterday?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_8-min.png",
        answers: {
            A: "I go to school",
            B: "I wented to school",
            C: "I goed to school",
            D: "I went to school"
        },
        correctAnswer: "D"
    },
    {
        question: "9. What will you do tomorrow?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_9-min.png",
        answers: {
            A: "I go to park",
            B: "I will go to park.",
            C: "I go park",
            D: "I will go to the park"
        },
        correctAnswer: "D"
    },
    {
        question: "10. What were you doing yesterday?",
        image: "/wp-content/uploads/2021/06/online-test-question-primary-img_10-min.png",
        answers: {
            A: "I play soccer.",
            B: "I playing soccer",
            C: "I was playing soccer with my brother",
            D: "I playing soccer friend"
        },
        correctAnswer: "C"
    }
];


// display quiz right away
buildQuiz();
// on submit, show results
submitButton.addEventListener('click', showResults);
//submitButton1.addEventListener('click', showResults);

//})();