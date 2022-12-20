$(document).ready(function() {
 var link1 = $("#link1"),
     counter1 = $("#counter1");
 link1.on('click', function(e) {
  e.preventDefault();
  var ajax = $.ajax({
   method : 'post',
   url : '../gmu/counter1.php',
   dataType : 'text',
   data : { 'count' : 1 }
  });
  ajax.done(function(data){
   data = JSON.parse(data);
   counter1.html(parseInt(data));
  }) ;
 });
 });