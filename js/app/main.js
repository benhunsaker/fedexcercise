"use strict";
/* global jQuery */
/* global $ */
/* global Handlebars */
/* global JXONTree */

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
    }(jQuery)),

    app = (function ($, flickr) {
      var $header = $("header"),
          $main = $("<main />"),
          $search = $("#search-input"),
          thumbnail = Handlebars.compile('<i class="flickr-image" data-image-title="{{title}}"><img src="https://farm{{farm}}.staticflickr.com/{{server}}/{{id}}_{{secret}}_q.jpg" /></i>');

      $search.on("keyup", function (e) {
        var $el = $(e.target),
            val = $.trim($el.val()),
            images = $main.find(".flickr-image");
        if (val === "") {
          images.show();
        } else {
          images
            .hide()
            .filter('[data-image-title*="' + val + '"]')
            .show();
        }
      });

      flickr.get_photos()
        .done(function (data) {
          var photo_details_array = [];

          $.each(data.photos.photo, function (i, photo) {
            $main.append(thumbnail(photo));
          });

          $header.after($main);
        })
        .fail(function () {
          console.log("Error");
        })
        .always(function () {
          console.log("Finished");
        });
    }(jQuery, flickr));
