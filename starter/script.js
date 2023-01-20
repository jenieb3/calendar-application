//To display the current day at the top of the calendar when a user opens the planner 
$(document).ready(function () {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text("Today is: " + currentDay);
});

//To color-code each timeblock based on past, present, and future, you can use moment.js to compare the current time to the time of each timeblock. 
$(".container").find("div").each(function () {
    var blockHour = moment($(this).text(), "h a").format("H");
    var currentHour = moment().format("H");
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});