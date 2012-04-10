!(function (exports) {

  /*
 var selections = exports.selections = {};

  console.log('Here are SELECTORS:');

  var selection01 = $('div');
  selections.selection01 = selection01;
  console.log('selection01:', selection01);

  var selection02 = $('#paper');
  selections.selection02 = selection02;
  console.log('selection02:', selection02);

  var selection03 = $('.container');
  selections.selection03 = selection03;
  console.log('selection03:', selection03);

  var myButton = $('#mybutton');

  var greets = function (e){
  	console.log(e);
  	alert('Hello Web :)');
  };

  myButton.on('click',greets);
  /*Step 03
  $('#mybutton').on('mouseover', function(e){
  	console.log('I\'m hovering the button');
  });
  $('#mybutton').on('mouseout', function(e){
  	console.log('I\'m out of the button');
  });

  
  Step 04
  var buttonWhite = $('#button-white');
  var buttonGray = $('#button-gray');
  var containers = $('.container');

  buttonWhite.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  buttonGray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

/*Step 05*/
  var canvas = $('#paper');
  var ctx = canvas[0].getContext("2d");

  var buttonWhite = $('#button-white');
  var buttonGray = $('#button-gray');
  var containers = $('.container');
  var slider =$('#slider');

  var radius = 15;

  var drawCircle = function (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    ctx.stroke();
  };

  buttonWhite.on('click', function (e) {
    containers.removeClass('bg-gray');
    containers.addClass('bg-white');
  });

  buttonGray.on('click', function (e) {
    containers.removeClass('bg-white');
    containers.addClass('bg-gray');
  });

  canvas.on('mousedown', function (e) {
    drawCircle(e.offsetX, e.offsetY, radius);
  });

  /*Step 06*/
  $('#button-clear').on('click', function(e){
  	ctx.clearRect(0,0,canvas[0].width, canvas[0].height);
  });

  $('#slider').on('change', function(e){
      radius = slider.attr('value');
  });

  /*Step 07*/

}(this));