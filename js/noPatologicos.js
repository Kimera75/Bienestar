'use strict';

//hide secundaries options

$('.opt2').animate({
    "height": "hide"
});

// controller to Tabaquismo section
$("#siTab").click(function () {
    $('#tabOpt1 , #tabOpt2').animate({
        'height': 'show'
    });
    var opt = $('#tabOpt1 , #tabOpt2').find('input');
    opt.each(function () {
        $(this).prop('required', true);
    });
});
$("#noTab").click(function () {
    $('#tabOpt1 , #tabOpt2').animate({
        'height': 'hide'
    });
    var opt = $('#tabOpt1 , #tabOpt2').find('input');
    opt.each(function () {
        $(this).prop('value', null);
    });
    opt.each(function () {
        $(this).removeAttr('required');
    });
});

// controller to Alcoholismo section
$("#siAlc").click(function () {
    $('#alcOpt1 , #alcOpt2').animate({
        'height': 'show'
    });
    var opt = $('#alcOpt1 , #alcOpt2').find('input');
    opt.each(function () {
        $(this).prop('required', true);
    });
});
$("#noAlc").click(function () {
    $('#alcOpt1 , #alcOpt2').animate({
        'height': 'hide'
    });
    var opt = $('#alcOpt1 , #alcOpt2').find('input');
    opt.each(function () {
        $(this).prop('value', null);
    });
    opt.each(function () {
        $(this).removeAttr('required');
    });
});

// controller to Alergias section
$("#siAlerg").click(function () {
    $('#alergOpt').animate({
        'height': 'show'
    });
    var opt = $('#alergOpt').find('textarea');
    opt.each(function () {
        $(this).prop('required', true);
    });
});
$("#noAlerg").click(function () {
    $('#alergOpt').animate({
        'height': 'hide'
    });
    var opt = $('#alergOpt').find('textarea');
    opt.each(function () {
        $(this).prop('value', null);
    });
    opt.each(function () {
        $(this).removeAttr('required');
    });
});

// controller to Toxicomanias section
$("#siTox").click(function () {
    $('#toxOpt').animate({
        'height': 'show'
    });
    var opt = $('#toxOpt').find('input');
    opt.each(function () {
        $(this).prop('required', true);
    });
});
$("#noTox").click(function () {
    $('#toxOpt').animate({
        'height': 'hide'
    });
    var opt = $('#toxOpt').find('input');
    opt.each(function () {
        $(this).prop('value', null);
    });
    opt.each(function () {
        $(this).removeAttr('required');
    });
});