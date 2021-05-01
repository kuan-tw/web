var db = DB.table('db');

$(document).ready(function(){
 $(".home").click(function(){
    $('#words').show()
    $('#feedback').hide()
  })
});
 
$(document).ready(function(){
  $('.feedback').click(function(){
    $('*').hide()
    $('#feedback').show()
  })
}

$(document).ready(function(){
  $('#ok').click(feedbackVal)
}

function feedbackVal(){
  var type = $('#type').val()
  var mess = $('#mess').val()
  db.create({}, console.log);
}