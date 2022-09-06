
document.querySelector(".toggle .fa-gear").onclick , function () {
   this.classList.toggle("fa-spin");

document.querySelector(".box").classList.toggle("open");
}  
let page = document.querySelector(".landing-page");
let imgarray = ["1.jpg", "2.jpg", "3.jpg" , "4.jpg", "5.jpg"];

setInterval(() => {
    //get random number
    let random = Math.floor(Math.random() * imgarray.length);
    //change backgrond
    page.style.backgroundImage = 'url("image/'+imgarray[random]+'")';
},10000)

$(document).ready(function () {
    $(" .color-lisst .color1").click(function (e) { 
        $("span").css("color", "#ff9800");
       
        $(".header-area ul li a").hover(function () {
            $(".header-area ul li a").css("color", "#ff9800");
                
            }, function () {
                $(".header-area ul li a").css("color", " #fff");
            }
        );
    });


    $(" .color-lisst .color2").click(function (e) { 
        $("span").css("color", "#e91e63");
        $(".header-area ul li a").hover(function () {
            $(".header-area ul li a").css("color", "#e91e63");
                
            }, function () {
                $(".header-area ul li a").css("color", " #fff");
            }
        );
        
    });

    $(" .color-lisst .color3").click(function (e) { 
        $("span").css("color", "#0c06c5");
        $(".header-area ul li a").hover(function () {
            $(".header-area ul li a").css("color", "#0c06c5");
                
            }, function () {
                $(".header-area ul li a").css("color", " #fff");
            }
        );
        
        });


    $(" .color-lisst .color4").click(function (e) { 
        $("span").css("color", "#009688 ");
        $(".header-area ul li a").hover(function () {
        $(".header-area ul li a").css("color", "#009688 ");
                
    }, function () {
        $(".header-area ul li a").css("color", " #fff");
    }
);
    });


    $(" .color-lisst .color5").click(function (e) { 
        $("span").css("color", "#4caf50 ");
        $(".header-area ul li a").hover(function () {
        $(".header-area ul li a").css("color", "#4caf50 ");
                
    }, function () {
        $(".header-area ul li a").css("color", " #fff");
    
        
    });
});
});
       
    

    
   