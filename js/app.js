//Prevent spoilerphobes from seeing spoiler
//Solution Hide Spoilers and reveal them through user interaction



//Hide the spoiler class. 
$ (".spoiler span").hide();
//Create a button. 
$ (".spoiler").append("<button>Reveal Spoiler</button>");
// When button pressed 
$("button").click(function(){
    // 
                  $(this).prev().show();
    // Show Spoiler
                  $(".spoiler span").show();
    // Hide button 
                  $(this).remove();
                  });


