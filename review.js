var baseUrl = "https://jeffb531-service.codenvy.ctof.intuit.com/api";

$(document).ready(function() {
  $.ajax({
      url:baseUrl+"/v1/reviews/review/"+location.search.slice(1),
      contentType:"application/json; charset=utf-8",
      dataType: 'json',
      type: 'GET'
    }).done(function(data) {
      $('#customerName').text(data.customerName)
      $('#customerEmail').text(data.customerEmail);
      $('#review').text(data.content);
    });
  
  $('#retweet').click(function() {
    $("#message").text("Posting to twitter...");
    $.ajax({
      url:baseUrl+"/v1/blabber",
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

//{"feedType":"CTOF",
//"metadata":{
//"url":"https://preview.codenvy.com/ide/jefferyharlowbrewer/_htmlapprunner/app-ry6jnqhtmtyqy4rn/review.html?1",
//"width":"600",
//"height":"400"
//}
//}
