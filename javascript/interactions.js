"use strict"  //make this script works in the 'modern' way;

//shorthand form of $(document).ready();
$(function() {

    //Header
    let headerHeight = $("header").innerHeight();
    let headerNavHeight = $("header nav").innerHeight();

    $("header .centerText").css("height", headerHeight - headerNavHeight);

    $(".centerText p:first-of-type").slideDown(1000);


});


