//display todays day using moment
var currentTime = moment().format("dddd, MMMM Do YYYY");
$("#now").text(currentTime);