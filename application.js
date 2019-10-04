
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "#ff3333");
     $(this).css("border", "2px solid black");
      $(this).css("color", "white");
  });
  $("input").blur(function(){
    $(this).css("background-color", "#fff");
    $(this).css("border", "2px solid grey");
     $(this).css("color", "black");

  });
  $("textarea").blur(function(){
    $(this).css("background-color", "#ff3333");
  });
});

$(document).ready(function(){
	$("textarea").focus(function(){
    $(this).css("background-color", "#ff3333");
     $(this).css("border", "2px solid black");
      $(this).css("color", "white");
  });

	$("textarea").blur(function(){
    $(this).css("background-color", "#fff");
    $(this).css("border", "2px solid grey");
     $(this).css("color", "black");
  });
 });

