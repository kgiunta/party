// Javascript
$(function () {
  var currentDate = new Date();
  const engageDate = new Date("June 17, 2023 09:00:00");
  const finalDate = engageDate.getTime() - currentDate.getTime();

  //  $('.countdown').countdown("yyyy/MM/dd/hh:mm:ss", function(event)
  //	Delete line 6
  $(".time").countdown(
    finalDate + currentDate.valueOf(),
    function (
      event //	until here
    ) {
      $this = $(this);
      switch (event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
        case "weeks":
        case "daysLeft":
          $this.find("span." + event.type).html(event.value);
          break;
        case "finished":
          $this.fadeTo("slow", 0.5);
          break;
      }
    }
  );
});
