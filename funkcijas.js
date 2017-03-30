
// Pazūd pirmās navigācijas info
$(document).ready(function(){
        $(".gramatas").hide();
    });	
$(document).ready(function(){
    $(".muzika").hide();
});	
$(document).ready(function(){
    $(".dzeja").hide();
});	
$(document).ready(function(){
    $(".soctikli").hide();
});
// Pazūd otrās navigācijas info
$(document).ready(function(){
    $(".g14, .img1, .img1:hover").hide();
});
$(document).ready(function(){
    $(".g15, .img2, .img2:hover").hide();
});
$(document).ready(function(){
    $(".g16, .img3, .img3:hover").hide();
});
$(document).ready(function(){
    $(".g17, .img4, .img4:hover").hide();
});
//Epasts pazūd no sākuma
$(document).ready(function(){
    $(".epasts1").hide();
});
//Epasts paradas un pazud
$(document).ready(function(a){
    $(".epasts").click(function(){
        $(".epasts1").fadeToggle();
    });
});
// Parādās un pazūd pirmās navigācijas info
$(document).ready(function(a){
    $(".parmanifade").click(function(){
		$(".muzika,.dzeja,.soctikli,.gramatas").fadeOut(0);
        $(".parmani").fadeToggle();
    });
});

$(document).ready(function(a){
    $(".gramatasfade").click(function(){
		$(".parmani,.muzika,.dzeja,.soctikli").fadeOut(0);
        $(".gramatas").fadeToggle();
    });
});
$(document).ready(function(a){
    $(".muzikafade").click(function(){
		$(".parmani,.dzeja,.soctikli,.gramatas").fadeOut(0);
        $(".muzika").fadeToggle();
    });
});
$(document).ready(function(a){
    $(".dzejafade").click(function(){
		$(".parmani,.muzika,.soctikli,.gramatas").fadeOut(0);
        $(".dzeja").fadeToggle();
    });
});
$(document).ready(function(a){
    $(".soctiklifade").click(function(){
		$(".parmani,.dzeja,.dzeja,.gramatas").fadeOut(0);
        $(".soctikli").fadeToggle();
    });
});
//Alert tipa paziņojums
$(document).ready(function(a){
    $(".infofade").click(function(){
        alert("Šāda informācija nav pieejama!");
    });
});
//Parādās un pazūd otrās navigācijas info
$(document).ready(function(a){
    $(".14fade").click(function(){
		$(".g15,.img2,.img2:hover,.g16,.img3,.img3:hover,.g17,.img4,.img4:hover").fadeOut(0);
        $(".g14,.img1,.img1:hover").fadeToggle();
    });
});
$(document).ready(function(a){
    $(".15fade").click(function(){
		$(".g14,.img1,.img1:hover,.g16,.img3,.img3:hover,.g17,.img4,.img4:hover").fadeOut(0);
        $(".g15,.img2,.img2:hover").fadeToggle();
    });
});
$(document).ready(function(a){
    $(".16fade").click(function(){
		$(".g14,.img1,.img1:hover,.g15,.img2,.img2:hover,.g17,.img4,.img4:hover").fadeOut(0);
        $(".g16,.img3,.img3:hover").fadeToggle();
    });
});
$(document).ready(function(a){
    $(".17fade").click(function(){
	$(".g14,.img1,.img1:hover,.g15,.img2,.img2:hover,.g16,.img3,.img3:hover").fadeOut(0);
        $(".g17,.img4,.img4:hover").fadeToggle();
    });
});
//Gramatas hover

//Harijs hover
$(document).ready(function(){
        $(".harijs1").hide();
    });	
$(".harijs").mouseover(function() {
$(".harijs1").show();
});
$(".harijs").mouseout(function() {
$(".harijs1").hide();
});
//Būda hover
$(document).ready(function(){
        $(".buda1").hide();
    });	
$(".buda").mouseover(function() {
$(".buda1").show();
});
$(".buda").mouseout(function() {
$(".buda1").hide();
});
//Ēd lūdzies hover
$(document).ready(function(){
        $(".ed1").hide();
    });	
$(".ed").mouseover(function() {
$(".ed1").show();
});
$(".ed").mouseout(function() {
$(".ed1").hide();
});
//Sātans hover
$(document).ready(function(){
        $(".satans1").hide();
    });	
$(".satans").mouseover(function() {
$(".satans1").show();
});
$(".satans").mouseout(function() {
$(".satans1").hide();
});
//Hobits hover
$(document).ready(function(){
        $(".hobits1").hide();
    });	
$(".hobits").mouseover(function() {
$(".hobits1").show();
});
$(".hobits").mouseout(function() {
$(".hobits1").hide();
});
//No ka mēs esam cēlušies hover
$(document).ready(function(){
        $(".noka1").hide();
    });	
$(".noka").mouseover(function() {
$(".noka1").show();
});
$(".noka").mouseout(function() {
$(".noka1").hide();
});
//Piekuns hover
$(document).ready(function(){
        $(".piekuns1").hide();
    });	
$(".piekuns").mouseover(function() {
$(".piekuns1").show();
});
$(".piekuns").mouseout(function() {
$(".piekuns1").hide();
});
//Gramatas hover beidzas

//Dzejas hoveri,bildes un teksta fade
$(document).ready(function(){
        $(".iz1").hide();
		$(".iz2").hide();
    });	
$(".iz").mouseover(function() {
$(".iz1").show();
$(".iz2").show();
});
$(".iz").mouseout(function() {
$(".iz1").hide();
$(".iz2").hide();
});

$(document).ready(function(){
        $(".ke1").hide();
		$(".ke2").hide();
    });	
$(".ke").mouseover(function() {
$(".ke1").show();
$(".ke2").show();
});
$(".ke").mouseout(function() {
$(".ke1").hide();
$(".ke2").hide();
});

$(document).ready(function(){
        $(".ov1").hide();
		$(".ov2").hide();
    });	
$(".ov").mouseover(function() {
$(".ov1").show();
$(".ov2").show();
});
$(".ov").mouseout(function() {
$(".ov1").hide();
$(".ov2").hide();
});

//Funkcijas kura parlādējot lapu parāda sākuma ekrānu
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}