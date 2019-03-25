$(".alert-danger").hide();
$("#account-top").hide();




$("#transaction-processing-shutto").hide();
$(".transaction-leave-shutto").hide();
  // WARNING: Evans
$("#transaction-processing-evans").hide();
$(".transaction-leave-evans").hide();
  // WARNING: Stunna
$("#transaction-processing-stunna").hide();
$(".transaction-leave-stunna").hide();



$("#submitcode-btn").click(
  function(){
    if ($("#code-txt").val() === "0666") {
      alert("You have not activated this service. Visit our Nearest branch");
    } else {
      alert("Failed to open");
    }
  }
);
