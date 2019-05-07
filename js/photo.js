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

$(document).ready(function () {
    // console.log("ready!");
    const mainHome = () => {
        let indexh = `
      <section id="tri">
            <div class="main-home"></div>
            <div id="bg-aman">
                <div id="bindex">
                <div id="indexb"></div>
                    </div>
                
     <a class="welcome"> <img id="visitor" src="./img/threeshape.png" alt="trianle aman" width="300px"></a>
            </div>
                <div class="lowerlogo">
                <a href="#!"><img src="./img/logoflower2.png" alt="trianle aman" class="lowerflower lflwr"></a>
                </div>
            <div class="threeIn1"></div>
        <d class="container-fluid">
         <div class="row ls">
              <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                     </div>
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <h1 class="text-center about">About <span>Me</span></h1>
                Hi there !We are Dan and Kelly Watson,
                a husband and wife photography team based in Nashville,
                Tennessee.We have been in business for over 10 years and Dan has photographed 
                over 200 weddings.Our goal is to provide you with classic images that will stand 
                the test of time and be cherished forever.We take a limited number of weddings
                each year in order to give our clients the attention they deserve.
            </div>
            <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
             </div>
            
        </section>
     `;
        $(".tri-aman").html(indexh);
    };
    mainHome();
});


module.exports=photos;

