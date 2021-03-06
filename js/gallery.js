"use strict";
// console.log("ss");
const loadOrnella = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.ornellas;
            // console.log(people);
            // return people;
            let ornimage = [];
            for (let i = 0; i < people.length; i++) {
                let onimage = people[i];
                // console.log("people", onimage.img);
                // ornimage += `<img id="galis_${i}" class="galies" src="${onimage.img}">`;
                ornimage += `<a class="thumbnail" href="#" data-image-id="${i}" data-toggle="modal" data-title="" data-image="${onimage.img}"
                              data-target="#${i}-image-gallery">`;
                ornimage += `<img class="galies" src="${onimage.img}" alt="Another alt text">`;
                 ornimage +=`</a>`;
                ornimage += `<div class="modal fade" id="${i}-image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">`;
                 ornimage +=`<div class="modal-dialog modal-lg md-dia">`;
                 ornimage +=`<div class="modal-content md-cn"></div>`;
                 ornimage += `<div class="modal-header">`;
                 ornimage += `<h4 class="modal-title" id="${i}-image-gallery-title">${onimage.title}</h4>`;
                 ornimage += `<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>`;
                 ornimage += ` </div>`;
                 ornimage += `<div class="modal-body md-bdg">`;
                ornimage += `<div class="container-fluid">`;
                ornimage += `<div class="row">`;
                ornimage += `<div class="col-sm-4 col-lg-4 col-md-4" > that we will pose you, your fiancé, your family, your wedding, etc.  And that's okay because those images are very important.  But the rest of the day we capture the big and small moments of the day as the unfold.  And even when we do get spend time with you and your fiancé (yes we will pose you because we don't expect you to be ready with your) we do it in a way that looks and feels natural.  We ask you questions, get you two interacting and laughing and loving each other authentically that doesn't feel posed or stiff."
                              </div>`;
                ornimage+=  `<div class="col-sm-8 col-lg-8 col-md-8 imggal">`; 
                ornimage += `<img id="${i}-image-gallery-image" class="img-responsive col-md-12" src="${onimage.img}">`;
                ornimage += `</div>`;
                 ornimage +=`</div>`;
                ornimage += `</div>`;
                ornimage += `</div>`;
                 ornimage += `<div class="modal-footer">`;
                ornimage +=`<img src="./../imgs/l-arrow.png" class="btn  float-left" id="show-previous-image" width='65px'>`;
                ornimage += `<p class="modal-title" id="${i}-image-gallery-title">${onimage.place} ,</p>`;
                ornimage += `<p class="modal-title" id="${i}-image-gallery-title">${onimage.date}</p>`;
                ornimage += `<img src="./../imgs/r-arrow.png" id="show-next-image" class="btn btn float-right"width='65px'>`;
                  ornimage +=`</div>`;
                 ornimage += `</div>`;
                //   ornimage +=`</div>`;
                  ornimage +=`</div>`;
                ornimage += `</div>`;
                $('.five-aman').html(ornimage);
            }
        }

    };
    xhttp.open("GET", "ornella.json", true);
    xhttp.send();
};
loadOrnella();



// var imging=$('.gallery');

// console.log("img",imging);

let modalId = $('#image-gallery');

$(document)
    .ready(function () {

        loadGallery(true, 'a.thumbnail');

        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
            $('#show-previous-image, #show-next-image')
                .show();
            if (counter_max === counter_current) {
                $('#show-next-image')
                    .hide();
            } else if (counter_current === 1) {
                $('#show-previous-image')
                    .hide();
            }
        }

        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */

        function loadGallery(setIDs, setClickAttr) {
            let current_image,
                selector,
                counter = 0;

            $('#show-next-image, #show-previous-image')
                .click(function () {
                    if ($(this)
                        .attr('id') === 'show-previous-image') {
                        current_image--;
                    } else {
                        current_image++;
                    }

                    selector = $('[data-image-id="' + current_image + '"]');
                    updateGallery(selector);
                });

            function updateGallery(selector) {
                let $sel = selector;
                current_image = $sel.data('image-id');
                $('#image-gallery-title')
                    .text($sel.data('title'));
                $('#image-gallery-image')
                    .attr('src', $sel.data('image'));
                disableButtons(counter, $sel.data('image-id'));
            }

            if (setIDs == true) {
                $('[data-image-id]')
                    .each(function () {
                        counter++;
                        $(this)
                            .attr('data-image-id', counter);
                    });
            }
            $(setClickAttr)
                .on('click', function () {
                    updateGallery($(this));
                });
        }
    });

// build key actions
$(document)
    .keydown(function (e) {
        switch (e.which) {
            case 37: // left
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
                    $('#show-previous-image')
                        .click();
                }
                break;

            case 39: // right
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
                    $('#show-next-image')
                        .click();
                }
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
