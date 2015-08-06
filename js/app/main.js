"use strict";
/* global jQuery */

var flickr = (function ($) {
      var flickr = {}
        , user_id = '132365033@N08'
        , api_key = 'a5e95177da353f58113fd60296e1d250';

      flickr.get_photos = function () {
        return $.ajax({
          url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos',
          data: {
            api_key: api_key,
            user_id: user_id,
            format: 'json',
            nojsoncallback: 1
          }
        });
      };

      return flickr;
    }(jQuery));

flickr.get_photos()
  .done(function (data) {
    console.log("Success");
  })
  .fail(function () {
    console.log("Error");
  })
  .always(function () {
    console.log("Finished");
  });
