$(".alert-danger").hide();
$("#account-top").hide();


$(".login-btn").click(
  function(){
    var username = $("#username").val();
    var password = $("#userpassword").val();

    if (username ==  "s" && password == "s") {
      $("#loginbtn").hide();
      $("footer").hide();
      $("#loader-acc").show();
      setTimeout(function(){
        $(".loader").hide();
        $("#login-container").hide();
        $("#account-shutto").fadeIn('slow');
        $("#transaction-details").show();
        $("#account-top").show();


      }, 2000);

    }
    else {
      $(".alert-danger").show();
      setTimeout(function(){
        $(".alert-danger").hide();
      },3000);
    }
  }
);


$("#transaction-btn-shutto").click(
  function(){
    $(".acc-option-box").hide();
    $("#transaction-details").fadeIn('slow');
  }

);

$("#transfer-btn-shutto").click(
  function(){
    $(".acc-option-box").hide();
    $("#transfer-details").fadeIn('slow');
  }

);

$("#paybills-btn-shutto").click(
  function(){
    $(".acc-option-box").hide();
    $("#paybills-details").fadeIn('slow');
  }
);

$("#contact-btn-shutto").click(
  function(){
    $(".acc-option-box").hide();
    $("#contact-details").fadeIn('slow');
  }
);




$("#submitcode-btn").click(
  function(){
    if ($("#code-txt").val() === "0666") {
      alert("You have not activated this service. Visit our Nearest branch");
    } else {
      alert("Failed to open");
    }
  }
);
