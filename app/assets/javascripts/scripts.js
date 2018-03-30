//Twitter 
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//google maps

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.6650948, lng: 7.2080882},
    zoom: 13,
  });
}

/*var marker = new google.maps.Marker ({
    map: map,
    position: {lat: 50.6650948, lng: 7.2080882},
    animation: google.maps.Animation.BOUNCE,
    draggable: true
  });

  marker.addListener('click', toggleBounce);

  function toggleBounce () {
    if (marker.getAnimation () ! === null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }*/

// EVENT LISTENER FOR GOOGLE MAPS API
$("#map").on("click", function() {
  console.log("clicked on google maps api");
  $("#map").css("filter", "none");
});



// document ready

$(document).ready(function() {

  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar oder $('body').stellar();
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
   $('#Ukraine').tooltip();
 });



//contact
$(".message-box").on("keyup", function() {
var charCount = $(".message-box").val().length; 
    console.log('charCount');
    $("#char-count").html(charCount); 
    if(charCount > 50) {
    	$("#char-count").css("color", "red");
    } else {
    	$("#char-count").css("color", "black")
    }
    });


$("#submit").on('click', function() {
    var comment = $('.message-box').val();
    console.log("comment");
    //console.log("comment " + "We have received your message.");    
   if (comment === "") {
   	$ (".message-box").css("border", "2px solid red");
   	//$(".message-box").css("border", "2px solid red");
   } else {
   	$('.message-box').hide();
   	$("#char-count").hide();
    $('#visible-comment').html(comment);
}
return false;
   });



//count Lektion 2.7 

$(".message-box").on("keyup", function() {
        console.log("keyup happened"); 

        //here we make sure we're catching the keyup

        // in here is where the rest of our code for this Exercise will go         
});

//work section - URL can be added at a href instead of #



for(var i = 0; i < arrayWorks.length; ++i) {
$("#work1.row").append("\
  <div class='col-sm-6 col-md-3'>\
  <a href='" + arrayWorks[i].url + "' class='work-img'>\
  <img class='img-responsive' src='" + arrayWorks[i].pic + "'>\
  <span class='info'> <p class='proj-title'>Title:</p> " + arrayWorks[i].title + "</span>\
  </a>\
  </div>\
  ");


$ (".work-img").mouseenter( function () {
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

var images = $("#work1 img");
if(i%2 === 0) {
  $(images[i]).css("border", "2px solid DodgerBlue");
 } else {
  $(images[i]).css("border", "2px solid salmon");
 };
};

//document ready
});