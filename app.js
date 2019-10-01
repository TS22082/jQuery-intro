$(document).ready(function() {
  //text
  var header = $('#header-text');
  header.text('Hello im change');
  //html
  $('.container').html('<h1>Wow</h1>');
  $('.container').html('<p>Wow</p>');
  //append

  var con2 = $('.container2');
  var header1 = $('<h1>');
  header1.text('thing');

  con2.attr('class', 'red-text');

  con2.append(header1);
  con2.append('<p>Hello from paragraph</p>');
  con2.append('<p>Hello from paragraph</p>');
});
