"use strict";
/* global alert */
/* global window */

var jQuery = require('jquery'),
    Handlebars = require('handlebars'),
    _ = require('lodash'),
    flickr = (function ($) {
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

      flickr.thumbnail_src = Handlebars.compile("https://farm{{farm}}.staticflickr.com/{{server}}/{{id}}_{{secret}}_q.jpg");
      flickr.large_src = Handlebars.compile("https://farm{{farm}}.staticflickr.com/{{server}}/{{id}}_{{secret}}.jpg");

      return flickr;
    }(jQuery)),

    app = (function ($, flickr) {
      var $main = $("<main />"),
          $cash = $("<div class='large-photo-cash' />"),
          $overlay = $('<i class="overlay" />'),
          filterPhotos = function (e) {
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
          },
          thumbnail = Handlebars.compile('<i class="flickr-image" data-image-title="{{title}}"><img src="{{thumb_src}}" data-id="{{id}}" /><span class="image-title">{{title}}</span></i>'),
          original = Handlebars.compile('<img id="image-{{id}}" class="large-image" src="{{large_src}}" />');

      $("#search-input").on("keyup", _.debounce(filterPhotos, 80));

      $overlay.on("click", function (e) {
        $overlay.detach();
        $(".large-image").hide();
      });
      $main.on("click", "img", function (e) {
        var img = $("#image-" + $(e.target).data("id"));
        img.css({
          top: ($(window).height() - img.height())/2
        });
        $cash.before( $overlay );
        img.show();
      });

      flickr.get_photos()
        .done(function (data) {
          var photo_details_array = [];

          _.each(data.photos.photo, function (photo) {
            photo.thumb_src = flickr.thumbnail_src(photo);
            photo.large_src = flickr.large_src(photo);
            $main.append(thumbnail(photo));
            $cash.append(original(photo));
          });

          $("header").after($main);
          $("body").append($cash);
        })
        .fail(function () {
          console.log("Error");
        })
        .always(function () {
          console.log("Finished");
        });
    }(jQuery, flickr));
