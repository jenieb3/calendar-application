//To display the current day at the top of the calendar when a user opens the planner 
$(document).ready(function () {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text("Today is: " + currentDay);
});
