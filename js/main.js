"use strict";
console.log("biet mekeyer");
let page =require('./nav'),
    fetching=require('./fetch'),
     lower=require('./footer.js');
     // variables=require'variables.scss';
// console.log("etl", fetching.loadOrnella);


$(document).ready(function(){
return page.newNav();
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          //   $("a.nav-item").css("color", "blue");
          //    $('a').css('color', 'red');
        }
         else if (scroll < 100) {
          //     $("h1").css("color", "red");
         }
        else {
            $(".black").css("background", "#333");
        }
    });
});
