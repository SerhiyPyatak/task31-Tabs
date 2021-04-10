"use strict";

$(document).ready(function(){
 
    // SmartTab initialize
    $('#smarttab').smartTab();

    $("#smarttab").on("showTab", function(e, anchorObject, tabIndex) {
        const tabAnchor = anchorObject[0];
        const tabIcon = $(tabAnchor).find("> div")[0];
        if ($(tabIcon).hasClass("sprite__info-icon")) {
            console.log('Info tab selected!');
            $(tabIcon).css("background-position", "-5px -0px");
            $(".sprite__ratings-icon").css("background-position", "-5px -150px");
            $(".sprite__buy-icon").css("background-position", "-5px -79px");
        } else if ($(tabIcon).hasClass("sprite__ratings-icon")){
            console.log('Ratings tab selected!');
            $(tabIcon).css("background-position", "-5px -176px");
            $(".sprite__info-icon").css("background-position", "-5px -27px");
            $(".sprite__buy-icon").css("background-position", "-5px -79px");
        } else if ($(tabIcon).hasClass("sprite__buy-icon")) {
            console.log('Buy tab selected!');
            $(tabIcon).css("background-position", "-5px -54px");
            $(".sprite__info-icon").css("background-position", "-5px -27px");
            $(".sprite__ratings-icon").css("background-position", "-5px -150px");
        };        
    });
  });


/*
$(() => {$( "#tabs" ).tabs(
    {
        classes: {
            "tab-content": "tabblock"
        }
    }
);});*/