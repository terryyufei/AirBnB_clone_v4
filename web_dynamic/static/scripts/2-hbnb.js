// Wait for the document to be fully loaded
$('document').ready(function () {
    // Define the URL of the API endpoint
    const url = 'http://0.0.0.0:5001/api/v1/status/';

    // Send a GET request to the API endpoint
    $.get(url, function (data) {
        if (data.status === 'OK') {
            // If the status is "OK," add the class "available" to the element with id "api_status"
            $('#api_status').addClass('available');
        } else {
            // If the status is not "OK," remove the class "available" from the element with id "api_status"
            $('#api_status').removeClass('available');
        }
    });
});
