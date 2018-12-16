$(document).ready(function() {
	setTimeout(function() {
		$("#main").removeClass("is-loading");
    }, 100)
    $("#navnav").click(function(){
       
        $(".flex-container").toggle("left slow");
        //$(".flex-container").toggle("slide", {direction: "right" }, 1000);
    });
    $(".mininav").click(function(){
      console.log('101');
      $(".flex-container").toggle("left slow");
      //$(".flex-container").toggle("slide", {direction: "right" }, 1000);
  });
    
  $(".mininav1").click(function(){
    
    $(".flex-container").slideToggle('slow');
    //$(".flex-container").toggle("slide", {direction: "right" }, 1000);
});
});

        function focusRed() {
  document.getElementById('redbox').style.zIndex = 3;
  document.getElementById('bluebox').style.zIndex = 2;
  document.getElementById('greenbox').style.zIndex = 1;
  document.getElementById('redbox').classList.add("largebox");
  document.getElementById('kk').classList.add("largefont");
  console.log('111');
}
function leavered(){
 document.getElementById('redbox').classList.remove("largebox");
 document.getElementById('kk').classList.remove("largefont");
}

function focusBlue() {
  document.getElementById('redbox').style.zIndex = 2;
  document.getElementById('bluebox').style.zIndex = 3;
  document.getElementById('greenbox').style.zIndex = 1;
  document.getElementById('bluebox').classList.add("largebox");
  console.log('112');
  document.getElementById('kkk').classList.add("largefont");

}
function leaveblue(){
 document.getElementById('bluebox').classList.remove("largebox");
 document.getElementById('kkk').classList.remove("largefont");

}
function focusGreen() {
  document.getElementById('redbox').style.zIndex = 1;
  document.getElementById('bluebox').style.zIndex = 2;
  document.getElementById('greenbox').style.zIndex = 3;
  document.getElementById('greenbox').classList.add("largebox");
  console.log('113');
 document.getElementById('kkkk').classList.add("largefont");
}
function leavegreen(){
 document.getElementById('greenbox').classList.remove("largebox");
 document.getElementById('kkkk').classList.remove("largefont");
}