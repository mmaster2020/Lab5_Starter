window.addEventListener('DOMContentLoaded', init);
 
 
 
 
 
function hornimg() {
var typehorn = document.querySelector('#horn-select');
   //#typehorn is a reference to the tag with id horn-select in the html, i.e., the select on 31
 var img_ref = document.querySelector('img');
 var hornaudio = document.querySelector('hidden');
 if(typehorn.value == 'air-horn'){
   img_ref.src = 'assets/images/air-horn.svg';
   hornaudio.src = 'assets/audio/air-horn.mp3';
 } else if (typehorn.value == 'car-horn'){
   img_ref.src = 'assets/images/car-horn.svg';
   hornaudio.src = 'assets/audio/car-horn.mp3';
 } else if (typehorn.value == 'party-horn'){
   img_ref.src = 'assets/images/party-horn.svg';
   hornaudio.src = 'assets/audio/party-horn.mp3';
 }
}
function sliderchg(){
console.log('hi');
var vol = document.querySelector('#volume-controls');
var volume = vol.children[0];
var volnum = volume.value;
var volimg = vol.children[1];
console.log(volnum);
if(volnum <= 0){
  volimg.src = 'assets/icons/volume-level-0.svg';
}else if (volnum > 0 && volnum < 33){
  volimg.src = 'assets/icons/volume-level-1.svg';
}else if (volnum >= 33 && volnum < 67){
  volimg.src = 'assets/icons/volume-level-2.svg';
}else if (volnum >= 67 && volnum <= 100){
  volimg.src = 'assets/icons/volume-level-3.svg';
}
var audiovol = document.querySelector('audio');
var updatedvol = volnum/100;
audiovol.volume = updatedvol;
}
 
 
 
const jsConfetti = new JSConfetti()
 
 
 
function clickButton(){
  var typehorn = document.querySelector('#horn-select');
  
  var vol = document.querySelector('#volume-controls');
  
  var volume = vol.children[0];
  var volnum = volume.value; 
  var audiovol = document.querySelector('audio');
  var updatedvol = volnum/100;
  audiovol.volume = updatedvol;
 
 if(typehorn.value == 'party-horn'){
   jsConfetti.addConfetti();
   var audio = new Audio('assets/audio/party-horn.mp3');
   audio.volume = updatedvol;
   audio.play();
 } else if(typehorn.value == 'air-horn'){
   var audio = new Audio('assets/audio/air-horn.mp3');
   audio.volume = updatedvol;
   audio.play();
 } else if (typehorn.value == 'car-horn'){
   var audio = new Audio('assets/audio/car-horn.mp3');
   audio.volume = updatedvol;
   audio.play();
 }
 
 
 
 
 
 }
function init() {
 document.querySelector('#horn-select').addEventListener('input', hornimg);
 document.querySelector('#volume').addEventListener('input', sliderchg);
 document.querySelector('button').addEventListener('click', clickButton);
}
 
 
 
 
 
 
