 $(function() {


$("#vibrateButton").click(function(e){

  $(".buttonFeedback").toggle();
});
$("#vibrateButton").vibrate({
 pattern: [50, 200, 50]
});
 });
