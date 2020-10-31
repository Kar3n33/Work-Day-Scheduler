$(document).ready(function() {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
    });

    
    //9am
    //Hourly text area
    var input_textarea9 = document.querySelector('#note9');
    var save_button9 = document.querySelector('#saveNote9')
    input_textarea9.value = localStorage.getItem('content9');
    //Save button to save text area
    saveNote9.addEventListener('click', updateOutput9);
    //Save content in text area to local storage
    function updateOutput9() {
        localStorage.setItem('content9', input_textarea9.value);
    };
    
    //10am
    var input_textarea10 = document.querySelector('#note10');
    var save_button10 = document.querySelector('#saveNote10');
    input_textarea10.value = localStorage.getItem('content10');
    saveNote10.addEventListener('click', updateOutput10);
    function updateOutput10() {
        localStorage.setItem('content10', input_textarea10.value);
    };

    //11am
    var input_textarea11 = document.querySelector('#note11');
    var save_button3 = document.querySelector('#saveNote11');
    input_textarea11.value = localStorage.getItem('content11');
    saveNote11.addEventListener('click', updateOutput11);
    function updateOutput11() {
        localStorage.setItem('content11', input_textarea11.value);
    };

    //12pm
    var input_textarea12 = document.querySelector('#note12');
    var save_button12 = document.querySelector('#saveNote12');
    input_textarea12.value = localStorage.getItem('content12');
    saveNote12.addEventListener('click', updateOutput12);
    function updateOutput12() {
        localStorage.setItem('content12', input_textarea12.value);
    };

    //1pm
    var input_textarea1 = document.querySelector('#note1');
    var save_button1 = document.querySelector('#saveNote1');
    input_textarea1.value = localStorage.getItem('content1');
    saveNote1.addEventListener('click', updateOutput1);
    function updateOutput1() {
        localStorage.setItem('content1', input_textarea1.value);
    };

    //2pm
    var input_textarea2 = document.querySelector('#note2');
    var save_button6 = document.querySelector('#saveNote2');
    input_textarea2.value = localStorage.getItem('content2');
    saveNote2.addEventListener('click', updateOutput2);
    function updateOutput2() {
        localStorage.setItem('content2', input_textarea2.value);
    };
    
    //3pm
    var input_textarea3 = document.querySelector('#note3');
    var save_button3 = document.querySelector('#saveNote3');
    input_textarea3.value = localStorage.getItem('content3');
    saveNote3.addEventListener('click', updateOutput3);
    function updateOutput3() {
        localStorage.setItem('content3', input_textarea3.value);
    };
    
    //4pm
    var input_textarea4 = document.querySelector('#note4');
    var save_button4 = document.querySelector('#saveNote4');
    input_textarea4.value = localStorage.getItem('content4');
    saveNote4.addEventListener('click', updateOutput4);
    function updateOutput4() {
        localStorage.setItem('content4', input_textarea4.value);
    };
    
    //5pm
    var input_textarea5 = document.querySelector('#note5');
    var save_button5 = document.querySelector('#saveNote5');
    input_textarea5.value = localStorage.getItem('content5');
    saveNote5.addEventListener('click', updateOutput5);
    function updateOutput5() {
        localStorage.setItem('content5', input_textarea5.value);
    };
    
    //Color coding time slots to change when current time changes
    var now= new Date().getHours();
    
    if (now > 9) {
        $("#note9").addClass("past");
        }	
        else if (now >= 9 && now < 10) {
            $("#note9").addClass("present");
        }
        else if (now < 9) {
            $("#note9").addClass("future");
        }
    
    if (now > 10) {
        $("#note10").addClass("past");
        }
        else if (now >= 10 && now < 11) {
            $("#note10").addClass("present");
        }
        else if (now < 10) {
            $("#note10").addClass("future");
        }
    
    if (now > 11) {
        $("#note11").addClass("past");
        }
        else if (now >= 11 && now < 12) {
            $("#note11").addClass("present");
        }
        else if (now < 11) {
            $("#note11").addClass("future");
        }
    
    if (now > 12) {
        $("#note12").addClass("past");
        }
        else if (now >= 12 && now < 13) {
            $("#note12").addClass("present");
        }
        else if (now < 12) {
            $("#note12").addClass("future");
        }
    
    if (now > 13) {
        $("#note1").addClass("past");
        }
        else if (now >= 13 && now < 14) {
            $("#note1").addClass("present");
        }
        else if (now < 13) {
            $("#note1").addClass("future");
        }
    
    if (now > 14) {
        $("#note2").addClass("past");
        }
        else if (now >= 14 && now < 15) {
            $("#note2").addClass("present");
        }
        else if (now < 14) {
            $("#note2").addClass("future");
        }
    
    if (now > 15) {
        $("#note3").addClass("past");
        }
        else if (now >= 15 && now < 16) {
            $("#note3").addClass("present");
        }
        else if (now < 15) {
            $("#note3").addClass("future");
        }
    
    if (now > 16) {
        $("#note4").addClass("past");
        }
        else if (now >= 16 && now < 17) {
            $("#note4").addClass("present");
        }
        else if (now < 16) {
            $("#note4").addClass("future");
        }
    
    if (now > 17) {
        $("#note5").addClass("past");
        }
        else if (now >= 17 && now < 18) {
            $("#note5").addClass("present");
        }
        else if (now < 17) {
            $("#note5").addClass("future");
        }