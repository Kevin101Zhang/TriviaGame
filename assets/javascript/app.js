$(document).ready(function () {

    var questionNanswer = {
        //BROKEN INTO 3 SUBPARTS [QUESTION, CHOICES, ANSWER]
        problem0: {
            question0: "Why Do You Love Me?",
            choice0: ["Because you're so easy to talk to.", "I love you because I do", "You actually care about me.", "You're just perfect."],
            answer0: "I love you because I do",
        },
        problem1: {
            question1: "Does This Dress Make Me Look Fat?",
            choice1: ["It makes me look skinny", "Of course it doesn't", "Oh I like the other dress better", "I love Puppies"],
            answer1: "Oh I like the other dress better",
        },
        problem2: {
            question2: "Why Were You Out So Late...?",
            choice2: ["To prepare something special for you tomorrow", "I was working overtime", "Jenny and I had a drink", "I ate with a co-worker"],
            answer2: "To prepare something special for you tomorrow",
        },
        problem3: {
            question3: "I'm Fine.",
            choice3: ["Okay", "Cool", "*Leave, she needs alone time", "No you're not"],
            answer3: "No you're not",
        },
        problem4: {
            question4: "Do You Think She Is Pretty?",
            choice4: ["Not as pretty as you", "Yes she is gorgeous", "Honey, thats a statue", "I love toast"],
            answer4: "Not as pretty as you",
        },
        problem5: {
            question5: "Yeah It Is 100% Fine That You Go Out With The Guys Tonight...",
            choice5: ["Okay, See you tonight", "Awesome want me to pick up anything", "I'll just stay in with you", "Love you Bye!"],
            answer5: "I'll just stay in with you",
        },
        problem6: {
            question6: "Im fine with anything, you choose",
            choice6: ["Burgers and Pizza", "Pasta", "Steak", "All of the Above"],
            answer6: "All of the Above",
        },
        problem7: {
            question7: "How Do You Lower The Asymtopic Complexity Of A One Dimensional Peak Finder?",
            choice7: ["Prim's Algortihm", "Greedy Ascent Method", "Divide and Conquer Method", "Kruskal's Algorithm"],
            answer7: "Divide and Conquer Method"
        }
    }
    var count = 0; var correct = 0; var incorrect = 0; var countDown = 10;

    $(document).ready(function () { //FUNCTION: RELOAD PAGES
        $(".Reset").click(function () {
            location.reload(true);
        });
    });

    setInterval(function () { //FUNCTION: TIME INTERVAL
        $("#countDownTimer_Placeholder").html(countDown);
        countDown--;
        if (countDown === 0) {
            clearInterval(countDown);// hypothetically will clear and stop the function.
            runModal();
        }
    }, 1000);

    var runModal = () => {  //FUNCTION: RUNNING MODAL WHEN GAME IS COMPLETE
        $(".modal").modal('show');
        $("#correct").append(correct);
        $("#incorrect").append(incorrect);
    }

    var MakeEmpty = () => { //FUNCTION: MAKE THE QUESTION & ANSWER SLOTS EMPTY
        $(".Question").html(" ");
        for (var i = 0; i < 4; i++) {
            $(".Panswer" + i).html(" ");
        }
    }

    var appendQuestion = () => { //FUNCTION: APPENDS THE QUESTION AND ANSWER CHOICES
        $(".Question").append('<h2>' + questionNanswer["problem" + count]["question" + count] + '<h2>');
        for (var i = 0; i < 4; i++) {
            $(".Panswer" + i).append('<input type="button" value="' + questionNanswer["problem" + count]["choice" + count][i] + '" class="active" />');
        }
    }

    function sevenQuestions() { //FUNCTION: RECURSIVE FUNCTION TO START GAME
        if (count === 8) {  // EXIT CONDITION
            runModal();
            return 0;
        }
        appendQuestion();
        $(".active").on("click", function () {
            $(this).val() === questionNanswer["problem" + count]["answer" + count] ? correct++ : incorrect++;
            // appendCorrectAnswer();
            count++;
            MakeEmpty();
            sevenQuestions(); // CALLING UPON ITSELF TO REPEAT TILL EXIT CONDITION IS MET
        });
    }
    sevenQuestions();
});
    // var appendCorrectAnswer = () => { //FUNCTION: APPENDS THE CORRECT ANSWER IF INCORRECT ANSWER WAS CHOSEN
    //     $(".Question").html("Debatable Answer");
    //     $(".Panswer0").html(questionNanswer["problem" + count]["answer" + count]).css({ "color": "red", "font-size": "45px", "font-family": "impact", });
    // }

    // function appendCorrectAnswer() {
    //     setTimeout(function () {
    //         if ($(this).val() === questionNanswer["problem" + count]["answer" + count]) {
    //             alert('Wrong Answer');
    //             $(".Question").html("Debatable Answer");
    //             $(".Panswer0").html(questionNanswer["problem" + count]["answer" + count]).css({ "color": "red", "font-size": "45px", "font-family": "impact", });
    //         }
    //     }, 5000);
    // }