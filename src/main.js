import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RoverImage from './js/roverImage.js';

function displayImage(response) {
  if (response.photos.length >  0) {
    let imageCounter = 0;
    for (let i = 0; i < 4; i++) {
      $('#roverImage').append(`<div class="row" id="imageRow${i}"></div>`);
      for (let j = 0; j < 4; j++) {
        $(`#imageRow${i}`).append(`<div class="col-md-3">
        <div>Image ID: ${response.photos[imageCounter].id}</div>
        <img src="${response.photos[imageCounter].img_src}" alt="Rover Image" ${imageCounter+1} width="200">
        </div>`);
        imageCounter ++;
      }
    }
  } else {
    $('#imageDate').text(`Woops! There was an error: ${response.message}`);
  }
}

function clearContent() {
  $('.row .col-md-3').remove();
}

function displayNEO() {
  $('#nearEarthObjects').append(`<tr><td>Albert</td><td>158840489</td><tr>`);
}

$(document).ready(function() {
  $('#showImage').click(function() {
    clearContent();
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