import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RoverImage from './js/roverImage.js';

function displayImage(response) {
  if (response.photos) {
    $('#imageDate').text(`Date of image: ${response.photos[0].earth_date}`);
    $('#roverImage').html(`<img src="${response.photos[0].img_src}" alt="Rover Image" height="200">`);
  } else {
    $('#imageDate').text(`Woops! There was an error: ${response.message}`);
  }
}

function displayNEO() {
  $('#nearEarthObjects').append(`<tr><td>Albert</td><td>158840489</td><tr>`);
}

$(document).ready(function() {
  $('#showImage').click(function() {
    const sol = $('#userData').val();
    RoverImage.getImage(sol)
      .then(function(response) {
        displayImage(response);
      });
  });
  $('#showNEO').click(function() {
    // New class and static method
    displayNEO();
  });
});

// loop over API call object
// $('#nearEarthObjects').append(`<tr><td>${neo-name}</td><td>${neo-distance}</td><tr>`)