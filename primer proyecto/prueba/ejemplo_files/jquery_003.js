$(document).ready(function() {

  var $ = jQuery.noConflict();

  // Aux menu Login toggle

  // $("li#auxlogin").hover(
  //   function() {
  //
  //     $(this).find("ul#login").slideToggle("fast");
  //   },
  //   function() {
  //     $(this).find("ul#login").slideToggle("fast");
  //   }
  // );

  // Aux menu lang toggle

  $("li#auxsearch").hover(
    function() {

      $(this).find("ul#search").slideToggle("fast");
    },
    function() {
      $(this).find("ul#search").slideToggle("fast");
    }
  );

  // Aux menu lang toggle

  $("li#auxlang").hover(
    function() {

      $(this).find("ul#lang").slideToggle("fast");
    },
    function() {
      $(this).find("ul#lang").slideToggle("fast");
    }
  );

});
