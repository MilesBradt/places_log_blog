function Place(location, date, job, landmark, image) {
  this.location = location;
  this.date = date;
  this.job = job;
  this.landmark = landmark;

}

var antarctica = new Place("Go far South until it's really cold...then keep going, now are you going North? Stop. You're there", "Last yesterday", "Penguin Erector", "Toppled over penguins");

var miami = new Place ("The farthest north Alaska goes before Santa territory", "2001-1989", "Time travel tester", "Not palm trees", "img/alaska.jpg");

var dakota = new Place("Lovely town that hardly exists", "1802", "No job but had to be rescued after time traveling accident, lovely place though", "Nice try; trick question", "img/dakota.jpg");

var moonbase = new Place ("The middle of the moon's left eye", "2077-2102", "Smuggler and gerneral layabout", "White flag on stick next to old footprints", "img/moon.jpg");



$(document).ready(function() {
  $(".row").show();

  //Antarctica
  $("#antarctica").click(function(event){
    event.preventDefault();
    $("ul#antarctica-details").text("");
    $(".row").hide();
    $(".panel").show();
    $("#antarctica-details").show();
    $("ul#antarctica-details").append("<li><span class='bolder'>Location and how to get there: </span><br>" + antarctica.location + "</li>");
    $("ul#antarctica-details").append("<li> " + antarctica.date + "</li>");
    $("ul#antarctica-details").append("<li>" + antarctica.job + "</li>");
    $("ul#antarctica-details").append("<li>" + antarctica.landmark + "</li>");
  });

  //Back
  $(".btn").click(function(event){
    event.preventDefault();
    $(".row").show();
    $(".panel").hide();
  });
});
