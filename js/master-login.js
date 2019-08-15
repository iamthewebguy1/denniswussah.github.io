$(".usernamebtn i").hide();
$(".wireTransfer-btn i").hide();
$(".secretcode-btn i").hide();
$(".code-form button i").hide();
$(".error-txt").hide();
$(".transfer-security-box").hide();

$(".information-form, .code-form").hide();




//when enter key | button key is cliked
/*$(".username-input").keyup(
  function(e){

    var code_detect_enter = e.which;
    if(code_detect_enter == 13)e.preventDefault();
    var usernamee=$(".username-input").val();
    var x = document.getElementById('username-input').value;
    if(code_detect_enter == 13){
         alert(x);
    }
  }
);
*/

//WHEN FORM IS SUBMITTED
/*
$(".login-form").on('submit',
  function(pEvent){
    pEvent.preventDefault();
    var username = $(".username-input").val();
    var passcode = $(".passcode-input").val();
    if (username === '') {
      $("#error-username").html('Enter your username');
      $("#error-username").show();
      setTimeout(function(){$("#error-username").hide();},3000)
      $(".username-input").val('');
    }
    else if (username === 'admin') {
      alert("Yeah Admin");
      username = 'nothing';
      $(".for-username").hide();
      $(".for-password").show();
    }
    else if (passcode === 'admin-passcode') {
      $(".for-password").hide();
    }
    else {
      $('#error-username').show();
      $('#error-username').html('Incorrect username');
      setTimeout(
        function(){
          $('#error-username').hide();
        }, 3000
      );
    }
  }
);
*/


// WARNING: EVERYTHING INVOLVING ACCOUNTS
$(".all-secs").hide();
$(".transaction-section").slideDown('slow');
$(".affix").hide();

        //*WHEN TRANSFER, TRANSACTIONS, PAY BILLS ETC IS CLICKED
        $(".transaction-btn").click(
          function(){
            if ($(".transaction-section").hide()) {
              $(".all-secs").hide();
              $(".account-nav-holder span").removeClass("active-effect");
              $(".transaction-btn").addClass("active-effect");
              $(".transaction-section").slideDown();
            }
          }
        );

        $(".transfer-btn").click(
          function(){
            if ($(".transfer-section").hide()) {
              $(".all-secs").hide();
              $(".account-nav-holder span").removeClass("active-effect");
              $(".transfer-btn").addClass("active-effect");
              $(".transfer-section").slideDown();
            }
          }
        );

        $(".paybills-btn").click(
          function(){
            if ($(".paybills-section").hide()) {
              $(".all-secs").hide();
              $(".account-nav-holder span").removeClass("active-effect");
              $(".paybills-btn").addClass("active-effect");
              $(".paybills-section").slideDown();
            }
          }
        );

        $(".contactus-btn").click(
          function(){
            if ($(".contact-section").hide()) {
              $(".all-secs").hide();
              $(".account-nav-holder span").removeClass("active-effect");
              $(".contactus-btn").addClass("active-effect");
              $(".contact-section").slideDown();
            }
          }
        );

        if ($(".transaction-section").show()) {
          $(".transaction-btn").addClass("active-effect");
        } else if ($(".transfer-btn").show()) {
          $(".transfer-btn").addClass("active-effect");
        }
        else {
          $(".transaction-btn").removeClass("active-effect");
        }

        var target = $('.account-nav-holder');
        target.after('<div class="affix" id="affix"></div>')

        var affix = $('.affix')
        affix.append(target.clone(true))

        // Show affix on scroll.
        var element = document.getElementById('affix')
        if (element !== null) {
          var position = target.position()
          window.addEventListener('scroll', function () {
            var height = $(window).scrollTop()
            if (height > position.top) {
              target.css('visibility', 'hidden')
              affix.css('display', 'block')
            } else {
              affix.css('display', 'none')
              target.css('visibility', 'visible')
            }
          })
        }

        // WARNING: TRANSFER SECTION
        function transferValidate(){
          var receiverName=$(".receivername-input").val();
          var bankName=$(".bankname-input").val();
          var accountNumber=$(".accountNumber-input").val();
          var swiftCode=$(".swiftCode-input").val();
          var amount=$(".amount-input").val();
          if (bankName == "" || accountNumber == "" ||swiftCode == "" ||amount == ""   ) {
            $(".transfer-error-txt").show();
            $(".wireTransfer-btn").addClass("border-error-ui");
            timeOut($(".transfer-error-txt"));

          } else {
            $(".wireTransfer-btn i").show();
            timeOut($(".wireTransfer-btn i"));
            setTimeout(
              function(){
                $(".transfer-form").fadeOut();
              },5000
            );
            $(".receivername-txt").text(receiverName);
            $(".bankname-txt").text(bankName);
            $(".amount-txt").text(amount);

            $(".transfer-security-box").fadeIn();
          }
        }


function timeOut(element){
  setTimeout(
    function(){
      $(".wireTransfer-btn").removeClass("border-error-ui");
      element.hide();
    },4000
  )
}

function transferCodeValidate(){
  var secretCode=$(".secretcode-input").val();
  if (secretCode == "02050") {
    $(".secretcode-btn").css("width","inherit");
    $(".secretcode-btn").text('Processing...');
    $(".secretcode-btn i").show();
    setTimeout(
      function(){
        $(".secretcode-btn i").hide();
        $(".transfer-security-box").fadeOut();
        location.reload(true);
      },9000
    );
  } else {
    $("#error-code").show();
    timeOut($("#error-code"));
  }
}

$(".security-form, .code-form").on('submit',
  function(pEvent){
    pEvent.preventDefault();
  }
)

// WARNING: PAY BILLS section
function useMyAcc(){
  $(".question-box").hide();
  $(".code-form").slideDown();
}

function sendCode(){
  var codeInput = $(".code-form input").val();
  if (codeInput == '0187') {
    $(".code-form button i").show();
    setTimeout(
      function(){
        $(".code-form button i").hide();
      },20000
    );
  }else {
    $(".error-code").show();
    timeOut($(".error-code"));
  }

}

function openPaymentOptions(){
  $(".bill-box").show();
  $(".question-box").show();
}
function closeCodeForm(){
  $(".code-form").hide();
  $(".bill-box").hide();
}
