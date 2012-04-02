!(function (exports) {

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

  $('#mybutton').on('mouseover', function(e){
  	console.log('I\'m hovering the button');
  });
  $('#mybutton').on('mouseout', function(e){
  	console.log('I\'m out of the button');
  });

}(this));