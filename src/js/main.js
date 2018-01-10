"use strict";
$(document).ready(function () {
    const mobile = $.browser.mobile
    let on = "click";
    if (mobile === true) {
        on = "touchstart";
    }
    $(".navMain").on(on, function (event) {
        event.stopPropagation();
    })
    $("body").on(on, function () {
        if ($(".navMain").hasClass("active")) {
            $(".navMain").removeClass("active");
        }
    })
    $(".navMain--btn").on(on, function (event) {
        if ($(".navMain").hasClass("active")) {
            $(".navMain").removeClass("active");
        } else {
            $(".navMain").addClass("active");
        }
        event.stopPropagation();
    })
});
