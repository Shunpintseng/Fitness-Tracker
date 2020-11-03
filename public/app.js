//variables set up for cardio and resistence
const resistanceDiv = $(".resistenceContainer");
const cardioDiv = $(".cardioContainer");
const $btnCardio = $(".btnCardio");
const $btnResistence = $(".btnResistence");
const $appendDiv = $("#appendDiv");

//appends time and day to  page

const today = moment().format("LL");
const timeNow = moment().format("LT");
const $timeNow = $(".timeNow");
$timeNow.append(today + " " + timeNow);

//when resistance button it's clicked the div for cardio it's  hidden

$btnResistence.on("click", function(event) {
  event.preventDefault();
  cardioDiv.hide();
  resistanceDiv.show();
});
//when cardio button it's clicked the div for resistance it's hidden
$btnCardio.on("click", function(event) {
  event.preventDefault();
  resistanceDiv.hide();
  cardioDiv.show();
});

//when form it's submitted a post request it's sent to the server

$("#resistanceComplete").on("click", function(event) {
  console.log(event.target);
  event.preventDefault();

  var newRecord = {
    exName: $("#exName")
      .val()
      .trim(),
    weight: $("#weights")
      .val()
      .trim(),
    sets: $("#sets")
      .val()
      .trim(),
    rep: $("#reps")
      .val()
      .trim(),
    duration: $("#duration")
      .val()
      .trim()
  };
  if (!newRecord) {
    console.log("it cant be empty");
  } else {
    $.ajax({
      url: "/api/workouts",
      type: "POST",
      data: newRecord
    }).then(function() {
      console.log("worked");
    });
  }
});

$("#cardioComplete").on("click", function(event) {
  event.preventDefault();
  var newRecord = {
    exName: $("#CardioName")
      .val()
      .trim(),
    distance: $("#distance")
      .val()
      .trim(),
    duration: $("#durationCardio")
      .val()
      .trim()
  };

  console.log(newRecord);

  $.ajax({
    url: "/api/workouts",
    type: "POST",
    data: newRecord
  }).then(function() {
    console.log("worked");
  });
});

//when server runs makes a get request to display all recents workouts
$(document).ready(function() {
  $.ajax({
    url: "/api/workouts",
    method: "GET"
  })
    .then(data => {
      data.forEach(element => {
        

        var pNew = $("<p>");
        pNew.addClass("exerciseList");
        pNew.attr("data-id");



        for(var i in element){
          if(i === "_id" || i === "created" || i === "__v"){
            continue;
          }
          pNew.append(i+":"+element[i]+"<p>" );
        }
        pNew.append("<br>" );
        $(".allWorkouts").append(pNew);
        return;
      });
    })
    .then();
});


//set up the heigh of modal when it's showing
$("#myModal").on("show.bs.modal", function() {
  $(".modal-content").css("height", $(window).height() * 0.1);
});

$(".closeIcon").on("click", function() {
  location.reload();
});