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
  var slider =$('#radius-slider');

  var radius = 15;

  var bgColorDef = [150,150,150];
  var bgColor = bgColorDef;

  var Circle = function (x, y, raduis) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  Circle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
    ctx.stroke();
  };

  var circles = [];

  var initCanvas = function (bgColor) {
    ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas[0].width, canvas[0].height);
    ctx.stokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 2;
  };

  var draw = function(){
    initCanvas('rgb('+bgColor[0]+','+bgColor[1]+','+bgColor[2]+')');
    circles.forEach(function (circle) {
      circle.draw();
    });
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
    circles.push(new Circle(e.offsetX, e.offsetY, radius));
    draw();
  });

  /*Step 06*/
  $('#button-clear').on('click', function(e){
    circles = [];
    draw();
  });

  /*Step 07*/
  $('#radius-slider').on('change', function(e){
      radius = slider.attr('value');
      $('#monitor-radius').text(radius);
  });

  $('#red-slider').on('change',function(e){
    bgColor[0] = $(this).attr('value');
    draw();
    
  });

  $('#green-slider').on('change',function(e){
    bgColor[1] = $(this).attr('value');
    draw();
  
  });

  $('#blue-slider').on('change',function(e){
    bgColor[2] = $(this).attr('value');
    draw();
    
  });

  initCanvas('rgb('+bgColor[0]+','+bgColor[1]+','+bgColor[2]+')');




  /*Step 08*/


}(this));