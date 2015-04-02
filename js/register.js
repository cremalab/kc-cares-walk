$(function() {

  luminateExtend.init({
    apiKey: 'CMHkey13', 
    path: {
      nonsecure: 'http://secure2.convio.net/tcmh/site/',
      secure: 'https://secure2.convio.net/tcmh/site/'
    }
  });

  var successCallback = function(data) {
    console.log(data);
  };

  var errorCallback = function(data) {
    var message = "";

    if ( data.errorResponse && data.errorResponse.message )
      message = data.errorResponse.message;
    
    alert(message);
  };

  $('#pre-register-form').on('submit', function(e) {
    e.preventDefault();
    var data = $(this).serialize();

    luminateExtend.api.request({
      api: 'cons', 
      callback: {
        success: successCallback,
        error: errorCallback
      },
      data: data,
      requestType: 'POST',
      useHTTPS: true
    });
  });

}); 