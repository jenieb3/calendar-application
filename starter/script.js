//To display the current day at the top of the calendar when a user opens the planner 
$(document).ready(function () {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text("Today is: " + currentDay);
});

//To color-code each timeblock based on past, present, and future,
//To compare the current time to the time of each timeblock. 
//Get the current time
var currentTime = moment();
var timeblocks = $('.time-block');
timeblocks.each(function () {
    var hour = $(this).find('.hour').text();
    var hourTime = moment(hour, 'ha');
    var startOfHour = hourTime.clone().startOf('hour');
    var endOfHour = hourTime.clone().endOf('hour');


    // Compare the current time to the hour time
    if (currentTime.isBefore(startOfHour)) {
        // If the current time is before the hour time, set the background color to green
        $(this).css('background-color', '#77dd77');
    } else if (currentTime.isBetween(startOfHour, endOfHour)) {
        // If the current time is the same as the hour time, set the background color to red
        $(this).css('background-color', '#ff696');
    } else {
        // If the current time is after the hour time, set the background color to grey
        $(this).css('background-color', '#d3d3d3');
    }
});


//To allow a user to enter an event when they click a time-block,
// Get all timeblocks (textarea = description)
var description = $('.description');
description.on('click', function () {
    $(this).append('<textarea class="event-input"></textarea>');

});
// Get all fas icons so that when we hover over it turns black
$('.saveBtn').hover(function () {
    $(this).find('i').css('color', 'black');
}, function () {
    $(this).find('i').css('color', 'white');
});


// Get all save buttons to save to lacal storage.
var saveButtons = $('.saveBtn');
saveButtons.on('click', function () {
    // Get the parent timeblock
    var timeblock = $(this).parent();
    var event = timeblock.find('.description').val();
    var hour = timeblock.find('.hour').text();
    // Save the event in local storage
    localStorage.setItem(hour, event);
});

// Get all time-blocks from lacal storage on to the webpage
var timeblocks = $('.time-block');
timeblocks.each(function () {
    var hour = $(this).find('.hour').text();
    var event = localStorage.getItem(hour);
    // If an event is found
    if (event) {
        // Add the event to the textarea
        $(this).find('.description').val(event);
    }
});


