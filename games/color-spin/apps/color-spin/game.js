$(document).ready(function() {
$(window).blur(function() { 
if(bRunning)						
PauseTimer();			
})
$(window).focus(function() { 
if(timeruns && !itspaused)						 
RestartTimer()			
})


function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}
if(isMobile())
$("head").append("<link href='mobile.css' rel='stylesheet' type='text/css'>")

var actionscorear = [[],[],[],[],[]];
var timescorear = [[],[],[],[],[]];
//$.cookie('action', null)
//$.cookie('time', null)
function cookieset(ar) {
var mycook = "";
for(i=0;i<5;i++){
for(z=0;z<ar[i].length;z++){
mycook += ":" + ar[i][z];
}
mycook += "y";
}
return mycook;
}

function cookieread(cookie,ar) {
if(cookie != undefined) {
if(	cookie !== "null"){
var workspace = [];	
workspace= cookie.split("y");
for(i=0;i<5;i++){
ar[i] = workspace[i].split(":");
ar[i].shift();
}
}
}
}
cookieread($.cookie('action'),actionscorear);
cookieread($.cookie('time'),timescorear);

var timeout180 = 600;
var timeout90  = 400;  
var corselect = [[".q1",".row1",".q1",".col1"],[".q2" ,".q2",".row1",".col4"],[".col1",".row4",".q3",".q3"],[".col4",".q4",".row4",".q4"]];
var ar = ["#turn1","#turn2","#turn3","#turn4"];
var findcol = [".col1",".col2",".col3",".col4"];
var findrow = [".row1",".row2",".row3",".row4"];
var iscol = false;
victory = new Audio("sounds/victory.mp3");
victorylvl5 = new Audio("sounds/victorylvl5.mp3");
var curlevel = 1;
var actions = 0;

var solution =    ["b","b","r","r","b","w","w","r","c","w","w","y","c","c","y","y"]; 

var mixit = [];
var flickerend = 16;
var flickerint = 50;
var startclick = true;
var yesadd = true;
var dStartTime;       
var bRunning = false; 
var timeruns = false;
var defwinmess = $("#winmessage").html();
var itspaused = false
hightime = "";
function StartTimer()
  {
  bRunning = true;          
  dStartTime = new Date();  
  ShowTime(); 
  timeruns = true;
  }
function StopTimer()
  {
  bRunning = false;
  timeruns = false;
  }
function RestartTimer() {
	acdate = new Date();
	dStartTime.setTime(acdate.getTime() - acdiff.getTime());
	bRunning = true;           
  ShowTime();  	
  }
 function PauseTimer() {
  bRunning = false;
  acdiff = new Date();
  acdiff.setTime( new Date() - dStartTime)
 }
function ShowTime() {
  if(!bRunning) 
    return;
    
  var dDeltaTime = new Date();  
  dDeltaTime.setTime( new Date() - dStartTime ); 
  var sMin = dDeltaTime.getMinutes(); 
  var sSec = dDeltaTime.getSeconds(); 
  
  var sHours = Math.floor( dDeltaTime / 3600000 );

  sMin = ( sMin < 10 ) ? "0" + sMin : sMin;
  sSec = ( sSec < 10 ) ? "0" + sSec : sSec;

   hightime = "1" + sHours + sMin + sSec;
   var time = sHours + ":" + sMin + ":" + sSec;
   $("#timer").text(time);
   if(parseInt(sHours)>=9)
   StopTimer();
  setTimeout(function(){ 
ShowTime()

}, 500);
  }
//------------------
//----------------------
function sethighscore(el,el2) {

var tt = el.slice();
if(yesadd)
tt = tt.concat(el2);

var sortedallscore = tt.slice();
var thisdouble = false;
sortedallscore.sort(function(a, b){return a-b});

var equalsortedallscore = sortedallscore.slice();
equalsortedallscore.sort(function(a, b){

if(b-a == 0){
thisdouble = a;
}
});

if(thisdouble)
sortedallscore.splice(sortedallscore.indexOf(thisdouble),1);



if(sortedallscore.length > 4 )
sortedallscore.pop();
for(i=0;i<sortedallscore.length;i++) {
el[i] = sortedallscore[i];
}
return sortedallscore;

}

function actionsputscore(el2,el,el3) {
$("#levinfo").text("等级"+curlevel);
$(el2).text("");
$(el2).removeClass("curascore");
if(el3 == "actions"){
for(i=0;i<el.length;i++){
$(el2).eq(i).text(el[i]);
if(el[i] == actions && yesadd == true)
$(el2).eq(i).addClass("curascore");
}
}
else {
for(i=0;i<el.length;i++){
var temp = el[i];
temp = temp.substr(1);
temp = temp[0]+":"+temp[1]+temp[2]+":"+temp[3]+temp[4];
$(el2).eq(i).text(temp);
if(el[i] == hightime && yesadd == true)
$(el2).eq(i).addClass("curascore");
}
}
}

  
function restore() {
  $("#board>div").css("visibility","visible");
  $("#overlay").hide();
for(i=0;i<4;i++){
 $("#board>div").eq(rem[i]).addClass("shadow");
}
actions++;
$("#actions").text("步数: "+actions);
  checkandwin();
};
function checkandwin () {
var solcount = 0;
$("#board>div").each(function(index) {
if($(this).data("color") == solution[index])
solcount++;
});
if(solcount == 16){
win();
}
}
function highscoreshow() {
	if(curlevel == 1) {
actionsputscore("#awrap span",sethighscore(actionscorear[0],actions),"actions");
actionsputscore("#twrap span",sethighscore(timescorear[0],hightime),"time");
}
if(curlevel == 2){
actionsputscore("#awrap span",sethighscore(actionscorear[1],actions),"actions");
actionsputscore("#twrap span",sethighscore(timescorear[1],hightime),"time");
}
if(curlevel == 3){
actionsputscore("#awrap span",sethighscore(actionscorear[2],actions),"actions");
actionsputscore("#twrap span",sethighscore(timescorear[2],hightime),"time");
}
if(curlevel == 4){
actionsputscore("#awrap span",sethighscore(actionscorear[3],actions),"actions");
actionsputscore("#twrap span",sethighscore(timescorear[3],hightime),"time");
}
if(curlevel == 5){
actionsputscore("#awrap span",sethighscore(actionscorear[4],actions),"actions");
actionsputscore("#twrap span",sethighscore(timescorear[4],hightime),"time");
}
}
function win() {
if(curlevel != 5){
victory.play();
victory.volume=0.8;	
var windelay = 2000
}
else {
victorylvl5.play();
victorylvl5.volume=0.8;	
var windelay = 2000
$("#winmessage").html('<span id="great">W<span class="letter2">O</span>W</span> </br>你是个天才！');
}
$("#pause").hide();
StopTimer();
highscoreshow();
lookatscore = false;
$.cookie('action',cookieset(actionscorear), { expires: 600 });
$.cookie('time',cookieset(timescorear), { expires: 600 });

$("#scoring").show(); 
$("#board>div").removeClass("shadow");
$("#aniselect>div").remove();
$("#overlay").show();
setTimeout(function(){ 
$("#winmessage").fadeIn(100).addClass("wineffect");
$("#overlay").addClass("overlaywhite");

}, windelay);

}
function defaultcolors(el){
$("#board>div").removeClass("r b c w y p g o");
$("#template div").remove();
$("#board>div").each(function(index) {
$(this).addClass(el[index]);
$(this).data("color",el[index])
$("#template").append("<div>");
$("#template div").eq(index).addClass(solution[index]);
});
}
defaultcolors(solution);

$("#levels div").click(function() {	
resetgame();								
$("#levels div").removeClass("levelselect");
$(this).addClass("levelselect");
var lindex = $(this).index();
curlevel = lindex + 1;
actions = 0;
$("#actions").text("步数: "+actions);
if(curlevel == 1)
solution = ["b","b","r","r","b","w","w","r","c","w","w","y","c","c","y","y"];//["c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","y"]
if(curlevel == 2)
solution = ["b","b","r","r","b","y","c","r","c","r","w","y","c","c","y","y"];
if(curlevel == 3)
solution = ["w","o","o","r","c","w","r","c","c","b","y","c","b","c","c","y"]; 
if(curlevel == 4)
solution = ["w","c","c","w","r","r","g","g","o","o","y","y","w","b","b","w"];
if(curlevel == 5)
solution = ["w","y","y","p","r","w","p","g","r","b","o","g","b","c","c","o"];//
defaultcolors(solution);
});


function randomize() {
mixit= [];
var flickerpart = 0;
var worksolution = solution.slice();
$("#board>div").each(function(index) {
$(this).removeClass("r b c w y p g o"); //------------------------------------------------------------- ADD all COLORS!!
})

for(i=solution.length -1;i>-1;i--){
var getind = Math.floor(Math.random() * (i + 1) );
mixit = mixit.concat(worksolution[getind]);
worksolution.splice(getind,1);
}
$("#board>div").each(function(index) {
$(this).addClass(mixit[index]);
$(this).data("color",mixit[index]);
});

};
function resetgame(){
	actions = 0;
$("#pause").hide();
$("#aniselect>div").remove();
if($("#board").css("visibility") == "hidden"){
$("#board>div,#board").css("visibility","visible");
restartit();
}
StopTimer();
$("#scoring").hide();
$(".curascore").removeClass("curascore");
$("#actions").text("步数: "+actions);
$("#timer").text("0:00:00");
$("#board>div").removeClass("shadow");
$("#overlay").show().removeClass("overlaywhite");
$("#winmessage").hide();
}
function flickering() {
var flickercount = 15;
flicker= setInterval(function(){ 
$("#board>div").eq(flickercount).removeClass("highlight");
flickercount--;


if(flickercount < 0){
    clearInterval(flicker);
	startgame();
	}
}, flickerint);
}
$("#start").click(function() {
resetgame()
randomize(); 
if(startclick) {
startclick = false;
$("#board>div").addClass("highlight");
flickering();
$("#winmessage").removeClass("wineffect").hide().html(defwinmess)
}
});
$("#highscore").click(function() {
if($("#scoring").css("display") == "none") {	
yesadd = false;
highscoreshow();
yesadd = true;
$("#scoring").show();
}
else
$("#scoring").hide();
})
var remmessage = $("#winmessage").html()

function paused() {
	PauseTimer(); 
	itspaused=true;
	$("#board>div,#board").css("visibility","hidden");
	$("#winmessage").show().html('<div id="pausemess">暂停</div>');	
	$("#pause").text("开始！");
}
function restartit() {
	itspaused=false;
	RestartTimer();
	$("#board>div,#board").css("visibility","visible");
	$("#winmessage").hide().html(remmessage);
	$("#pause").text("暂停");	
}
$("#winmessage").on( "click","#pausemess", function()  {
restartit()
}); 
$("#pause").click(function() {
if(!itspaused)		
paused()
else
restartit()
});

function startgame() {

$("#go").show();
  setTimeout(function(){ 
startclick = true;
$("#go").hide();
$("#overlay").hide();
StartTimer();
$("#pause").show()
}, 500);

}

function cloning(el) {
$("#aniselect").removeClass("rotate180 rotate90r rotate90l");
$("#aniselect>div").remove();
$(".shadow").clone().appendTo("#aniselect");
$("#aniselect>div>div").remove();
iscol = false;
$("#aniselect>div").each(function(index) {
if($("#aniselect " + findcol[index]).length == 4){
$("#aniselect").css({"width": "90px", "height": "360px"});
iscol = true;
}
if($("#aniselect " + findrow[index]).length == 4){
$("#aniselect").css({"width": "360px", "height": "90px"});
iscol = true;
}
});
if(iscol == false){
$("#aniselect").css({"width": "180px", "height": "180px"});
}
$("#aniselect").css({"margin-left": $("#board .shadow").eq(0).position().left, "margin-top": $("#board .shadow").eq(0).position().top}).addClass(el);
}
function regroup(el) {
$("#board .shadow").removeClass("r b c w y p g o"); //------------------------------------------------------------- ADD all COLORS!!
$("#board .shadow").each(function(index) {
$(this).addClass(el[index]);
$(this).data("color",el[index]);
});
}

$("#board").on( "mousedown",".shadow,.shadow>div>div", function()  {

rem = [];
$("#board>div").each(function(index) {
if($(this).hasClass("shadow"))
rem = rem.concat($(this).index());
});

$("#overlay").show();
if(!$(this).hasClass("q") && !$(this).hasClass("l-turn") && !$(this).hasClass("r-turn")){
var reverseit = [];
var newarr = [];

cloning("rotate180");

setTimeout(function(){ 
restore();
}, timeout180);

$("#board .shadow").each(function(index) {
reverseit = reverseit.concat($(this).data("color"));
});
newarr = reverseit.reverse();
regroup(newarr);
}

if($(this).hasClass("r-turn")){
var niner = ["z"];
 
$("#board .shadow").each(function(index) {
niner = niner.concat($(this).data("color"));
});
var swapa = niner[3];
var swapb = niner[4];  

niner[3] = swapb;
niner[4] = swapa;

niner[0] = niner[niner.length-1];
niner.pop();
swapa = niner[2]; 
swapb = niner[3];  

niner[2] = swapb;
niner[3] = swapa;
cloning("rotate90r");
setTimeout(function(){ 
restore()
}, timeout90);

regroup(niner);

} 	 
if($(this).hasClass("l-turn")){
var ninel = [];
$("#board .shadow").each(function(index) {
ninel = ninel.concat($(this).data("color"));
});
var swapa = ninel[2];
var swapb = ninel[3];  

ninel[2] = swapb;
ninel[3] = swapa;
firstninel = ninel[0];
ninel.shift();
ninel = ninel.concat(firstninel);
swapa = ninel[2];
swapb = ninel[3];  

ninel[2] = swapb;
ninel[3] = swapa;
cloning("rotate90l");
setTimeout(function(){ 
restore();
}, timeout90);
regroup(ninel);
}
$("#board .shadow").css("visibility","hidden");

});

$.fn.shadows = function () { 
var qindex = $(this).parents(".q").index(".q") 
$(corselect[qindex][$(this).index()]).addClass("shadow");
if($(this).hasClass("r-turn"))
$(ar[qindex]).addClass("arrow-r");
if($(this).hasClass("l-turn"))
$(ar[qindex]).addClass("arrow-l");
};
$.fn.lines = function (el,el2,el3) { 

if(!$(this).hasClass("q")){

$("#board>div").removeClass("shadow");
var ind = $(this).index(el2) + 1;
if(ind == 0)
ind = $(this).index(el3) + 1;
var col = el + ind;
$(col).addClass("shadow");
}
}

$(".corwrap div").mouseover(function(event) {
$("#board>div").removeClass("shadow");
$(".allarr").removeClass("arrow-r arrow-l");
$(this).shadows();
});

$(".row1,.row4").mouseover(function() {

$(this).lines(".col",".row1",".row4");

});

$(".col1,.col4").mouseover(function() {

$(this).lines(".row",".col1",".col4");
});

$("#board").mouseout(function() {
$(".shadow").removeClass("shadow");
$(".allarr").removeClass("arrow-r arrow-l");
});
function copyinsert() {
var custmargin = $(window).height() - $("#copyright").height() -20  - $("#wrap").height() - 30
if(custmargin < 0)
custmargin=0;
$("#copyright").css("margin-top",custmargin);
}
//copyinsert()
$( window ).resize(function() {
 //copyinsert()
});
//alert($("#copyright").height())
});