"use strict";
const footer = () => {
    let footerh = `

<footer class="page-footer font-small special-color-dark pt-4">

   
    <div class="container">
          <ul class="list-unstyled list-inline text-center">
                <li class="list-inline-item">
                  <a class="btn-floating btn-fb mx-1">Home
                    <i class="fab fa-facebook-f"> </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-tw mx-1">About
                    <i class="fab fa-twitter"> </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-gplus mx-1">Gallery
                    <i class="fab fa-google-plus-g"> </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-li mx-1">Branches
                    <i class="fab fa-linkedin-in"> </i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-dribbble mx-1">Countact me
                    <i class="fab fa-dribbble"> </i>
                  </a>
                </li>
          </ul>
     </div>
       <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://millioninfinity.github.io/Personal-Site/"> Million Asseghegn</a>
    </div>
     </footer>
 `;
    $("#footers").html(footerh);
};

footer();

const lowerpart = () => {
  // console.log("lower part of the page");
  let thepart = `
    <div class="d text-center">
    <p class="h">RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class="e"><img src="./imgs/logodesign.png" alt="textlogo" width="250px"/></div>

    <div class="a tinone"><a href="aman.html"><div class="meet"><div class="met"></div></div><p class="textAman">Meet Aman</p></a></div>
    <div class="b tinone"><a href="#!"><div class="gal"><div class="met"></div></div><p class="textAman">Gallery</p></a></div>
    <div class="c tinone"><a href="#!"><img src="./imgs/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
  
 
    `;
  $(".threeIn1").html(thepart);
};
lowerpart();
