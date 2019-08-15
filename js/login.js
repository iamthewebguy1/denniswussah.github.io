$(".usernamebtn i, .passcodebtn i").hide();
$("html, body").css("height","100%");
$(".login-form").on('submit',
  function(pEvent){
  pEvent.preventDefault();
  }
);

//Function to check validation for username
function validateUsername(){

  var username = $(".username-input").val();
  if (username === '') {
    $("#error-username").html('Enter your username');
    $("#error-username").show();
    setTimeout(function(){$("#error-username").hide();},3000)
  }
  else if (username === 'admin') {
    $(".usernamebtn i").show();
    setTimeout(
      function(){
        $(".usernamebtn i").hide();
        $(".for-username").hide();
        $(".for-password").show();
      }, 2000
    );

  }else {
    $('#error-username').show();
    $(".username-input").val('');
    $('#error-username').html('Incorrect username');
    setTimeout(
      function(){
        $('#error-username').hide();
      }, 3000
    );
  }
}
function validatePasscode(){
  var passcode = $(".passcode-input").val();
  if (passcode === '') {
    $("#error-passcode").html('Enter your passcode');
    $("#error-passcode").show();
    setTimeout(function(){$("#error-passcode").hide();},3000);

  }
  else if (passcode === 'admina') {
    $(".passcodebtn i").show();
    setTimeout(function(){
      $(".passcodebtn i").hide();
      $(".for-password").hide();
      $("html, body").css("height","auto");
      $(".login-container").hide();
      $(".accountfor-me").show();
    },3000);

  }
  else {
    $("#error-passcode").html('Incorrect passcode');
    $("#error-passcode").show();
    setTimeout(function(){$("#error-passcode").hide();},3000);
  }
}

$(".username-input").on('keypress',
  function(e){
    if (e.which == 13) {

      validateUsername();


    }
  }
);
$(".passcode-input").on('keypress',
  function(e){
    if (e.which == 13) {
      validatePasscode();
    }
  }
);
