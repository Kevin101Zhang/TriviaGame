$(document).ready(function () {

    var questionNanswer = {
        //BROKEN INTO 3 SUBPARTS [QUESTION, CHOICES, ANSWER]
        problem0: {
            question0: "Charlie Brown's crush, the “Little Red-Haired Girl”, name is?",
            choice0: ["Marcie", "Heather", "Peppermint Patty", "Violet Gray"],
            answer0: "Heather",
        },
        problem1: {
            question1: "Name the dirty character who always a cloud of dust surrounding him?",
            choice1: ["Rerun van Pelt", "Pig Pen", "Shermy", "Floyd"],
            answer1: "Pig Pen",
        },
        problem2: {
            question2: "What was Linus and Lucy’s last name?",
            choice2: ["Agate", "Van Pelt", "Cormac", "Reinhard"],
            answer2: "Van Pelt",
        },
        problem3: {
            question3: "Who does Schroeder have sitting on his piano?",
            choice3: ["Chopin", "Bach", "Beethoven", "Mozart"],
            answer3: "Beethoven",
        },
        problem4: {
            question4: "What is the name of Snoopy’s brother who lives out west?",
            choice4: ["Olaf", "Andy", "Spike", "Marbles"],
            answer4: "Spike",
        },
        problem5: {
            question5: "What does Woodstock like to swim in?",
            choice5: ["The pond", "The dog dish", "The lake", "The sink"],
            answer5: "The dog dish",
        },
        problem6: {
            question6: "Who is Snoopy's best friend",
            choice6: ["Charlie Brown", "Woodstock", "Spike", "Linus"],
            answer6: "Woodstock",
        },
        problem7: {
            question7: "What position does Lucy play on their baseball team?",
            choice7: ["Right field", "Left field", "Quarterback", " Center"],
            answer7: "Right field"
        }
    }
    var count = 0; var correct = 0; var incorrect = 0; var countDown = 75;

    $(document).ready(function () { //FUNCTION: RELOAD PAGES
        $(".Reset").click(function () {
            location.reload(true);
        });
    });


    var runModal = () => {  //FUNCTION: RUNNING MODAL WHEN GAME IS COMPLETE
        $(".modal").modal('show');
        $("#correct").append(correct);
        $("#incorrect").append(incorrect);
    }

    var MakeEmpty = () => { //FUNCTION: MAKE THE QUESTION & ANSWER SLOTS EMPTY
        $(".Question").html(" ");
        $(".TheAnswer").html(" ");
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
    appendCorrect = () => {
        setTimeout(function () {
            MakeEmpty();
            count++;
            sevenQuestions();
        }, 2000);
    }

    congratsForCorrect = () => {
        setTimeout(function () {
            MakeEmpty();
            count++;
            sevenQuestions();
        }, 2000);
    }

    function sevenQuestions() { //FUNCTION: RECURSIVE FUNCTION TO START GAME
        if (count === 8) {  // EXIT CONDITION
            runModal();
            return 0;
        }
        appendQuestion();
        $(".active").on("click", function () {
            // $(this).val() === questionNanswer["problem" + count]["answer" + count] ? correct++ : incorrect++;
            if ($(this).val() === questionNanswer["problem" + count]["answer" + count]) {
                correct++;
                MakeEmpty();
                $(".TheAnswer").html("Goodjob! It is Correct").css({ "color": "black", "font-size": "28px", "font-family": "Bubblegum Sans", "margin-left": "5%"});
                congratsForCorrect();
            } else {
                incorrect++
                MakeEmpty();
                $(".TheAnswer").html("Incorrect the Answer is:<br><em> "+ questionNanswer["problem" + count]["answer" + count]).css({ "color": "black", "font-size": "28px", "font-family": "Bubblegum Sans", "margin-left": "5%"});
                appendCorrect();

            }
            // CALLING UPON ITSELF TO REPEAT TILL EXIT CONDITION IS MET
        });
    }
    $(".instructions").on("click", function(){
        $("#button").css('visibility','hidden');
        $(".read").css('visibility','hidden');
    sevenQuestions();

    setInterval(function () { //FUNCTION: TIME INTERVAL
        $("#countDownTimer_Placeholder").html(countDown);
        countDown--;
        if (countDown === 0) {
            clearInterval(countDown);// hypothetically will clear and stop the function.
            runModal();
        }
    }, 1000);
    });
});
