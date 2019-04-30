'use strict';
console.log('fetching data');


const loadOrnella = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.ornellas;
            let ornimage = [];
            for (let i = 0; i < people.length; i++) {
                let onimage = people[i];
                // console.log("people", onimage.img);
                ornimage += `<div class="gallery">`;
                ornimage += `<img class="galies" src="${onimage.img}">`;
                ornimage += `</div>`;
                $('.five-aman').html(ornimage);
            }
        }

    };
    xhttp.open("GET", "ornella.json", true);
    xhttp.send();
};
loadOrnella();
$(".wedd").click(function () {
    console.log('somte');
    return loadOrnella();
});




const loadOrnellas = () => {
    // console.log("engagent clicked");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var peoples = response.engagement;
            let ornimages = [];
            for (let i = 0; i < peoples.length; i++) {
                let onimages = peoples[i];
                // console.log("people", onimages.img);
                ornimages += `<div class="gallery">`;
                ornimages += `<img class="galies" src="${onimages.img}">`;
                ornimages += `</div>`;
                $('.five-aman').html(ornimages);
            }
        }

    };
    xhttp.open("GET", "ornella.json", true);
    xhttp.send();
};
$(".eng").click(function () {
    console.log('somte');
    return loadOrnellas();
});




const loadBranch = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.branches;
            // console.log(people); return people;
            let ornimage = [];
            for (let brancho = 0; brancho < people.length; brancho++) {
                let onimage = people[brancho];
                // console.log("people", onimage);
                ornimage += `<div id="infobtn" class="branc col-lg-3 col-md- col-sm-3" data-toggle="modal" data-target="#brancho-${brancho}">`;
                ornimage += `<p class="bra-loc">${onimage.location}</p>`;
                ornimage += `<div class="branc-img"></div>`;
                ornimage += `</div>`;
                ornimage += `<div class="modal fade modalStyle" id="brancho-${brancho}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
                ornimage += `<div class="modal-dialog" role="document">`;
                ornimage += `<div class="modal-content">`;
                ornimage += `<div class="modal-header">`;
                ornimage += `<h5 class="modal-title" id="${brancho}exampleModalLabel">${onimage.location} Branch</h5>`;
                ornimage += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
                ornimage += `<span aria-hidden="true">&times;</span>`;
                ornimage += `</button>`;
                ornimage += `</div>`;
                ornimage += `<div class="modal-body">`;

                ornimage += `<img src="${onimage.imgs}" width="80px" height="80px">`;
                ornimage += `<p class="b-name">${onimage.name}</p>`;
                ornimage += `<div class="ebs phn">Phone Number :- <em><a class="telll" href="tel:${onimage.tele}">${onimage.tele}</a></em></div>`;
                ornimage += `<p class="ebs">${onimage.do }</p>`;
                ornimage += `<p class="ebs">${onimage.location}</p>`;
                ornimage += `<div class="bran-img"></div>`;
                ornimage += `</div>`;
                ornimage += `<div class="modal-footer">`;
                ornimage += `<div><p><a class="efriend" href="mailto: ${onimage.email}">contact ${onimage.name}</a></p></div>`;
                ornimage += `</div>`;
                ornimage += `</div>`;
                ornimage += `</div>`;
                ornimage += `</div>`;

                $('#branching').html(ornimage);
            }
        }

    };
    xhttp.open("GET", "ornella.json", true);
    xhttp.send();
};
loadBranch();
$("document").ready(function () {
    $(".con-btn")
        .click(function () {
            console.log("contact info clicked");
        });
});
$(".modal-body div em").text(function () {
    (this).replaceWith('<a href="tel:1' + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/x/g, ',') + '">' + (this).text() + "</a>");
});


module.exports = {
    loadOrnella,
    // loadQuote, loadEng,

};