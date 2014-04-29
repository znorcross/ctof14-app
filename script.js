$(document).ready(function() {
  $('#retweet').click(function() {
    $("#message").text("Posting to twitter...");
    $.ajax({
      url:"https://team-3221-service.codenvy.ctof.intuit.com/api/v1/blabber",
      contentType:"application/json; charset=utf-8",
      dataType: 'json',
      type: 'POST',
      data: $("#review").val()
    }).done(function(data) {
      $("#message").text("Posted");
    }).fail(function( jqXHR, textStatus, errorThrown) {
      if (jqXHR.status != 200) {
        $("#message").text("Error - it failed");
      } else {
      $("#message").text("Posted");        
      }
    });
  });
});
