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
    $(() => {
        $('.tabs__items').each(() => {
            const link = $(this).find('.tabs--link');
            link.on(on, function (e) {
                const href = $(this).attr('href');
                const $target = $(href);
                if ($(href).length) {
                    e.preventDefault();
                    $(this).siblings('.tabs--link').removeClass('active');
                    $(this).addClass('active');
                    $(href).siblings('.tabs__content').removeClass('active');
                    $(href).addClass('active');
                }
            });
        });
    });
});
