$(document).ready(
    function () {

//add event handlers
var myRules ={
    salary:{required:true,
    min:0,
    max:100000,
    digits:true},
    creditScore:{required:true,
    min: 300,
    max: 850,
    digits: true
    },
    jobTime:{required:true,
    min:0,
    max:360,
    digits:true}
}
var myMessages={
    salary: {required:"Salary is required",
    min:"Your Salary is too low",
    max:"Your Salary is too high",
    digits:"Please use numerical values"},
    creditScore: {required:"Your Credit Score is required",
    min:"Your credit score is too low",
    max:"Enter a valid credit score",
    digits:"Enter a valid credit score"},
    jobTime: {required:"Your time at your job is required in months",
    min:"Not enough job time",
    max:"Enter correct time in months",
    digits:"Enter correct time in months"}
}

//Math
        if(salary>0){
        };
    if(creditScore<630){},
        else(creditScore>629){},
        if(jobTime<12){},
        else(jobTime){},

        //all other functions (program logic)
$("form").validate({rules:myRules,
messages:myMessages,})

