function Place(location, date, job, landmark, image) {
  this.location = location;
  this.date = date;
  this.job = job;
  this.landmark = landmark;

}

var antarctica = new Place("Go far South until it's really cold...then keep going, now are you going North? Stop. You're there", "Last yesterday", "Penguin Erector", "Toppled over penguins");

var miami = new Place ("The farthest north Alaska goes before Santa territory", "2001-1989", "Time travel tester", "Not palm trees", "img/alaska.jpg");

var dakota = new Place("Lovely town that hardly exists", "1802", "No job but had to be rescued after time traveling accident, lovely place though", "Nice try; trick question", "img/dakota.jpg");

var moon = new Place ("The middle of the moon's left eye", "2077-2102", "Smuggler and gerneral layabout", "White flag on stick next to old footprints", "img/moon.jpg");



$(document).ready(function() {
  $(".row").show();

  //Antarctica
  $("#imgAnt").click(function(event){
    event.preventDefault();
    $("ul#antarctica-details").text("");
    $(".row").hide();
    $("#antPanel").show();
    $("#antarctica-details").show();
    $("ul#antarctica-details").append("<li><span class='bolder'>Location and how to get there: </span><br>" + antarctica.location + "</li>");
    $("ul#antarctica-details").append("<li><span class='bolder'>When was I there: </span><br>" + antarctica.date + "</li>");
    $("ul#antarctica-details").append("<li><span class='bolder'>What was my job: </span><br>" + antarctica.job + "</li>");
    $("ul#antarctica-details").append("<li><span class='bolder'>Notable Landmarks: </span><br>" + antarctica.landmark + "</li>");
  });

  //Miami, Alaska
  $("#imgMiami").click(function(event){
    event.preventDefault();
    $("ul#miami-details").text("");
    $(".row").hide();
    $("#miamiPanel").show();
    $("#miami-details").show();
    $("ul#miami-details").append("<li><span class='bolder'>Location and how to get there: </span><br>" + miami.location + "</li>");
    $("ul#miami-details").append("<li><span class='bolder'>When was I there: </span><br>" + miami.date + "</li>");
    $("ul#miami-details").append("<li><span class='bolder'>What was my job: </span><br>" + miami.job + "</li>");
    $("ul#miami-details").append("<li><span class='bolder'>Notable Landmarks: </span><br>" + miami.landmark + "</li>");
  });

  //Harpoonelk, ND
  $("#imgND").click(function(event){
    event.preventDefault();
    $("ul#ND-details").text("");
    $(".row").hide();
    $("#NDPanel").show();
    $("#ND-details").show();
    $("ul#ND-details").append("<li><span class='bolder'>Location and how to get there: </span><br>" + dakota.location + "</li>");
    $("ul#ND-details").append("<li><span class='bolder'>When was I there: </span><br>" + dakota.date + "</li>");
    $("ul#ND-details").append("<li><span class='bolder'>What was my job: </span><br>" + dakota.job + "</li>");
    $("ul#ND-details").append("<li><span class='bolder'>Notable Landmarks: </span><br>" + dakota.landmark + "</li>");
  });

  //Jimmy Dean Station
  $("#imgMoon").click(function(event){
    event.preventDefault();
    $("ul#moon-details").text("");
    $(".row").hide();
    $("#moonPanel").show();
    $("#moon-details").show();
    $("ul#moon-details").append("<li><span class='bolder'>Location and how to get there: </span><br>" + moon.location + "</li>");
    $("ul#moon-details").append("<li><span class='bolder'>When was I there: </span><br>" + moon.date + "</li>");
    $("ul#moon-details").append("<li><span class='bolder'>What was my job: </span><br>" + moon.job + "</li>");
    $("ul#moon-details").append("<li><span class='bolder'>Notable Landmarks: </span><br>" + moon.landmark + "</li>");
  });

  //Back
  $(".btn").click(function(event){
    event.preventDefault();
    $(".row").show();
    $(".panel").hide();
  });
});
