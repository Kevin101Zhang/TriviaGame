$(document).ready(function () {

    var QuestionBank = ["Why Do You Love Me?", "Does This Dress Make Me Look Fat?", "Why Were You Out So Late...?", "I'm Fine.", "Do You Think She Is Pretty?", "Yeah It Is 100% Fine That You Go Out With The Guys Tonight...", "Why Did You Chose Me?", "How Do You Lower The Asymtopic Complexity Of A One Dimensional Peak Finder?"];
    var question0 = ["AWhat", "BWho", "CWhere", "DWhy"];
    var question1 = ["Dog", "Cat", "Monket", "Goose"];
    var question2 = ["EWhat", "FWho", "GWhere", "HWhy"];
    var question3 = ["What", "Who", "Where", "Why"];
    var question4 = ["AWhat", "BWho", "CWhere", "DWhy"];
    var question5 = ["Dog", "Cat", "Monket", "Goose"];
    var question6 = ["EWhat", "FWho", "GWhere", "HWhy"];
    var question7 = ["EWhat", "FWho", "GWhere", "HWhy"];
    var question8 = ["EWhat", "FWho", "GWhere", "HWhy"];
    var count = 0; var correct = 0; var incorrect = 0; var countDown = 60;
    //make it phone themed...//
    var answers = { /// write the correct answers
        question0: "AWhat",
        question1: "AWhat",
        question2: "AWhat",
        question3: "AWhat",
        question4: "AWhat",
        question5: "AWhat",
        question6: "AWhat",
        question7: "AWhat",
        question8: "AWhat"
    }

    $(document).ready(function () {
        $(".Reset").click(function () {
            location.reload(true);
        });
    });

    var runModal = () => {
        $(".modal").modal('show');
        $("#correct").append(correct);
        $("#incorrect").append(incorrect);

    }

    setInterval(function () {
        var countFrom60 = $("#countDownTimer_Placeholder").html(countDown);
        countDown--;
        if (countDown === 0) {
            runModal();
            clearInterval(countFrom60);// hypothetically will clear and stop the function.
        }
    }, 1000);

    var MakeEmpty = () => {
        $(".Question").html(" ");
        for (var i = 0; i < 4; i++) {
            $(".Panswer" + i).html(" ");
        }
    }

    var appendQuestion = () => {
        $(".Question").append('<h2>' + QuestionBank[count] + '<h2>');
        for (var i = 0; i < 4; i++) {
            $(".Panswer" + i).append('<input type="button" value="' + eval('question' + count)[i] + '" class="active" />');
        }
    }

    function eightQuestions() {
        if (count === 8) {
            runModal();
            return 0;
        }
        appendQuestion();
        $(".active").on("click", function () {
            $(this).val() === answers[eval('question' + count)] ? correct++ : incorrect++;
            count++;
            MakeEmpty();
            eightQuestions();
        });
    }

    eightQuestions(); // calling upon the function




    for (var i=0; i<QuestionBank.length; i++){
        for (var j=0; j<QuestionBank.length; j++){
            console.log(this);
        }
    }


});

//stop timer;
//reload button; hypothetically should work.  


