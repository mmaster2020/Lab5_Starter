// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var typehorn = document.querySelector('#horn-select');
  	//#typehorn is a reference to the tag with id horn-select in the html, i.e., the select on 31
  var img_ref = document.querySelector('img');
  if(typehorn.value == 'air-horn'){
    img_ref.src = 'assets/images/air-horn.svg';
  } else if (typehorn.value == 'car-horn'){
    img_ref.src = 'assets/images/car-horn.svg';
  } else if (typehorn.value == 'party-horn'){
    img_ref.src = 'assets/images/party-horn.svg';
  }
}