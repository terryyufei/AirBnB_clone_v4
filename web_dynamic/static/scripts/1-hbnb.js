$(document).ready(function () {
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
