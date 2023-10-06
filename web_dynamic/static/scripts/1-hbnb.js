$(document).ready(function () {
  const amenities = {};

  $('input[type=checkbox]').change(function () {
    const amenity_id = $(this).data('name');

    if (($(this).is(':checked'))) {
      amenities[amenity_id] = true;
    } else {
      delete amenities[amenity_id];
    }

    let amenitiesList = '';

    for (const id in amenities) {
      if (amenitiesList === '') amenitiesList += id;
      else amenitiesList += ', ' + id;
    }
    $('div.amenities h4').text(amenitiesList);
  });
});
