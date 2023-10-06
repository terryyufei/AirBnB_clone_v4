(document).ready(function () {
    // Create an empty object to store amenities with their status (checked or unchecked)
    const amenities = {};

    // Listen for changes on all input checkboxes
    $('input[type=checkbox]').change(function () {
        // Get the 'data-name' attribute of the changed checkbox, which represents the amenity_id
        const amenity_id = $(this).data('name');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // If checked, set the amenity_id as a property in the 'amenities' object with a value of 'true'
            amenities[amenity_id] = true;
        } else {
            // If unchecked, remove the amenity_id from the 'amenities' object
            delete amenities[amenity_id];
        }

        // Initialize an empty string to store the list of selected amenities
        let amenitiesList = '';

        // Loop through the 'amenities' object to create a comma-separated list of selected amenities
        for (const id in amenities) {
            // If 'amenitiesList' is empty, add the amenity_id without a comma, otherwise, add a comma before the next amenity_id
            if (amenitiesList === '') amenitiesList += id;
            else amenitiesList += ', ' + id;
        }

        // Update the text inside the <h4> tag within the 'div.amenities' with the updated list of selected amenities
        $('div.amenities h4').text(amenitiesList);
    });
});



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
