/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//  $(".small-screen-menu").hide();

$(".logout-btn").hide();
$(".next-btn").hide();
$(".transfer-loader").hide();

$("#user-txt").val("");

$("#submit-btn").click(function(){
  var username = $("#user-txt").val();
  var passcode = $("#password-txt").val();

  if (username == "goldman" && passcode=="goldmann") {
    $(".login-btn").hide();
    $(".loader-icon").show();
    setTimeout(function(){
      $(".loader-icon").hide();
      $(".login-border").hide();
      $(".login-account").show('slow');
      $(".logout-btn").show();
      $(".cookies").hide();

    }, 2000);
  }
  //Evans
  else if (username == "gloverdavid" && passcode=="glover7244") {
    $(".login-btn").hide();
    $(".loader-icon").show();
    setTimeout(function(){
      $(".loader-icon").hide();
      $(".login-border").hide();
      $("#account-evans").fadeIn('slow');
      $(".logout-btn").show();
      $(".cookies").hide();

    }, 5000);
  }
  //++evanss
  else if (username == "davidglover" && passcode=="glover7240") {
    $(".login-btn").hide();
    $(".loader-icon").show();
    setTimeout(function(){
      $(".loader-icon").hide();
      $(".login-border").hide();
      $("#account-evanss").fadeIn('slow');
      $(".logout-btn").show();
      $(".cookies").hide();

    }, 5000);
  }


  else {
    $("#warning-login").show();
    setTimeout(function(){
      $("#warning-login").hide();
    },3000);

  }
});


  $(".takeawhile-btn").click(function(){
    if ($(".secret-code").val() == "0666") {
      $(".secret-code").val("");
      $(".loader-send").show();
      $(".takeawhile-btn").hide();

      setTimeout(function(){
        $(".loader-send").hide();
        $(".hide-txt").hide();
        $(".transaction-takeawhile").hide();
        $(".transaction-leave").show();

      }, 300000);
    } else {
      alert("Enter your 4 digit transfer code");
    }
  });
