$(document).ready(function(){
  $("#sendSmsButton").click(function()
  {
    if( $("#recepientPhoneNumber").val() == undefined ||  $("#recepientPhoneNumber").val() == "" || 
        $("#messageContent").val() == null ||  $("#messageContent").val() == "" )
    {
         $("#smsOperationStatus").text("Please enter both the recepient phone number and the message.");
    }
    else {
        var sendSmsData = {
                "recepientPhoneNumber" :  "+1" + $("#recepientPhoneNumber").val(),
                "messageContent" : $("#messageContent").val()
             };
      console.log(JSON.stringify(sendSmsData));
      $.ajax({
        "type" : "POST",
        "url" : "https://jeffb531-service.codenvy.ctof.intuit.com/api/v1/notification/sendSms",
        "data" : JSON.stringify(sendSmsData),
        "success" : function(response){
          if(response == null || response == undefined || response == "")
          {
              $("#smsOperationStatus").text("Error in sending Sms. Please try again.");
          }
         else {
            var responseJson = JSON.parse(response);
            if(responseJson.success == "true")
            {
              $("#smsOperationStatus").text("Sms sent to +1" + $("#recepientPhoneNumber").val());
            }
            else {
              $("#smsOperationStatus").text("Error in sending Sms. Please try again.");
             }
         }  
        },
        "error" : function(jqXHR, textStatus, errorThrown){
          $("#smsOperationStatus").text("Error in sending Sms. Please try again.");
          console.log("Error thrown:" + errorThrown);
        }
      });
    }  
  });
});