"use strict";



const photos = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.ornellas;
            let ornimage = [];
            for (let i = 0; i < people.length; i++) {
                let onimage = people[i];
                // console.log("algebam", onimage.img);
                
                ornimage += `<li class="slide">`;
                ornimage += `<img src="${onimage.img}">`;
                ornimage += `</li>`;
               
                $('.slider').html(ornimage);
            }
        }
 
    };
    xhttp.open("GET", "ornella.json", true);
    xhttp.send();
};
photos();
var currentSlide = 1;
let count1 = $("#selected ul").children().length;
console.log('count', count1);

module.exports=photos;