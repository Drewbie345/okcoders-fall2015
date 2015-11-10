// Flickr Project
// Use the website below to play with different options
// https://www.flickr.com/services/api/explore/flickr.photos.search

$(document).ready(function() {
  // When the search button is clicked, it triggers the API call
  $('#search').on('click', function(e) {
    // Clear thumbnails
    $('#photos').html('');
    
    // Prevents form from submitting - we don't need the form to submit
    e.preventDefault();

    // Retrieves the search term
    var searchValue = $('#search-input').val();
    var API_KEY = // THIS IS WHERE YOU PUT YOUR API KEY!
    
    // AJAX call to Flickr API to get JSON data
    // You will want to use your own API Key!
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=' + searchValue + '&safe_search=2&per_page=12&format=json&nojsoncallback=1',
    function(data) {
      // Loops through each item and creates the url
      $.each(data.photos.photo, function(i, item) {
        // The URL of the photo - refer to Flickr API Documentation to see how to build it
        var photoURL = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_' + 'q.jpg';
        
        // Adds the HTML for each thumbnail image
        var thumbnail = '<div class="col-xs-6 col-md-3"><img class="center-block img-thumbnail" src="' + photoURL + '" alt="Image 1"></div>'
        
        // Appends it to the page
        $('#photos').append(thumbnail);
      });
    });
  })
})