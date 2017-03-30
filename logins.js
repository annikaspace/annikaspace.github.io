var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function parbaude(){
var vards = document.getElementById("vards").value;
var parole = document.getElementById("parole").value;
if ( vards == "1" && parole == "1"){
window.location = "lapa.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Jums ir palikuši "+attempt+" mēģinājumi;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("vards").disabled = true;
document.getElementById("parole").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

//Funkcijas kura parlādējot lapu parāda sākuma ekrānu
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}