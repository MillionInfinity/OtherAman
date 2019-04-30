"use strict";
let $ = require('jquery');
console.log("navbar ready!");


// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 10) {
//             $(".black").css("background", "blue");
//         }

//         else {
//             $(".black").css("background", "#333");
//         }
//     })
// })



const newNav =()=>{
    console.log("new nav");
    let theNav = `
        <header id="my-header">
        <div class="navForm"></div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        
        <a class="navbar-brand" href="index.html"><strong><h1>Ornella</h1></strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a></li>
                <li class="nav-item"><a class="nav-link"  href="aman.html">Aman</a></li>
                <li class="nav-item"><a class="nav-link" href="galler.html">gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="branch.html">Branches</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
            </ul>
            <div class="central-nav">
                         <a href="index.html"><img src="imgs/logoflower2.png" class="img-fluid" alt="ornella logo" width="100px"></a>
                        <div class="orn">Ornella Multi-Media</div>
                        <div class="creative">Creative Photographer and Videographer</div>
             </div>
             <span class="navbar-text m-2">
            <div class="right-nav"> 
            <div class="legend">Habesha Photographer & Videographer</div>
            <div class="line"></div> 
            <div class="follow"> follow me on social media </div>
            <div class="icons">
            <a href="https://twitter.com/amanzerumesfin"><img src="./../imgs/Twitterbirdw.png" width="25px" height="25px"/></a>
            <a href="https://www.instagram.com/aman_zeru/"><img src="./../imgs/instagramw.png" width="25px" height="25px"/></a> 
            <a href="https://www.facebook.com/begieZgreat/"><img src="./../imgs/facebookw.png" width="25px" height="25px"/></a>
            </div>
        </div>
            </span>
        </div>
    </nav>

    <div class="view intro-2" style="">
        <div class="full-bg-img">
            <div class="mask rgba-purple-light flex-center">
                <div class="container text-center white-text wow fadeInUp">
                     
                </div>
            </div>
        </div>
    </div>
        </header>
`;
    $("#godaddy").html(theNav);
};





module.exports = {
    newNav
  };

