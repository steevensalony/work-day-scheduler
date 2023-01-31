// Adding functionality to the save button
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var saveUserText = $(this).siblings('.description').val();
    var saveUserTime = $(this).parent().attr("id");

    // Saving user inputs to the local storage
    localStorage.setItem(saveUserTime, saveUserText);
  })

  // Function to display the right css based on the current time
  function getTime() {
    var currentTime = dayjs().hour();

    $('.time-block').each(function () {
      var timeBlock = $(this).attr("id").split("hour")[1];

      if (currentTime > timeBlock) {
        $(this).addClass("past");
      }
      if (currentTime === timeBlock) {
        $(this).addClass('present')
      }
      if (currentTime < timeBlock) {
        $(this).addClass('future')
      }
    })
  }

  // Getting the items from the local storage to stay on the page
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  getTime();
});

// Getting today's date and time
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY. h:mm:ss a'));