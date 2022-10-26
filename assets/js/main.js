(function($) {
    window.onload = function() {
        $(document).ready(function() {
            kichthuoc();
            chitietduan();
            slickhomepage();
            menuMobile();
            addbtnslick();
            searchPopup();
        });
    };
})(jQuery);

// Hàm mobile
function menuMobile(){
    $(".header__bars svg").click(function(){
        $(".overlay").addClass("overlay-active");
        $(".menu_header").addClass("menu_header-active");
    });

    $(".overlay").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu_header").removeClass("menu_header-active");
        $('.search__mobile').removeClass('active');
    });

    $(".menu_header-close").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu_header").removeClass("menu_header-active");
    });

    $('.menu_header').show();
    $(".menu_header .header_nav li.menu-item-has-children>ul").before(`<span class="li-plus"></span>`);
    if ($(".li-plus").length) {
        $(".li-plus").click(function(e) {
            if ($(this).hasClass("clicked")) {
                $(this).removeClass('clicked').siblings('ul').slideUp();
            } else {
                $(this).parent().siblings('li').find('.li-plus').removeClass('clicked').find("ul").slideUp();
                $(this).parent().siblings().find("ul").slideUp();
                $(this).addClass('clicked').siblings('ul').slideDown();
            }
        });
    }

    var x = $('.container').width()/5;
    var y = $('.container').width()/5 - 30;
    var z = $('html').width();
    var left = $(".menu-item-has-children").offset().left + window.screenX;
    console.log(left);
    console.log($(".menu-item-has-children").offset().left);
    // $(".sub_menu_ct>.menu_item").css("width",x+"px");
    $(".menu_item_img").css("width",y+"px");
    $(".menu_item_img").css("height",y*0.555+"px");
    $(".sub_menu").css("left",-left+"px");
    $(".sub_menu").css("width",z+"px");

}

// popup search and book
function searchPopup() {
  
    $(".btn-search").click(function() {
        $(".overlay").addClass("overlay-active");
        $("body").addClass("overlay-active");
        $(".box-search_header").addClass("active");
    });
  

    $('.box-search-close').click(function() {
        $(".overlay").removeClass("overlay-active");
        $("body").removeClass("overlay-active");
        $(".box-search_header").removeClass("active");
    })
  
}

// Hàm slick trang chủ
function slickhomepage(){
    // banner
    $('.sec_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // chào mừng bạn đến với
    $('.sec_welcome_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
              }
            },
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
              }
            },
            {
                breakpoint: 567,
                settings: {
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplaySpeed: 3000,
                }
            }
          ]
    });

    var a = (screen.width - $('.container').width()) / 2;
    var b = ($('.container').width()) / 3;
    var c = a + b;
    // dự án nổi bật
    $('.sec_outstandpro_slider').slick({
        centerMode: true,
        dots: true,
        centerPadding: '535px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

    // đối tác khách hàng
    $('.sec_customer_content').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    });

}

// Hàm slick chi tiết dự án
function chitietduan(){
    var a = (screen.width - $('.container').width()) / 2;

    $('.project_detail_slider').slick({
        centerMode: true,
        centerPadding: a+'px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

}


// Bổ sung nút
function addbtnslick(){
    $('.slick-next.slick-arrow').html(`
        <div class="slick-next_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.03" height="13" viewBox="0 0 13.03 13">
                <defs>
                <style>
                    .cls-1 {
                    fill: #4099da;
                    fill-rule: evenodd;
                    }
                </style>
                </defs>
                <path id="Forma_1_copy_7" data-name="Forma 1 copy 7" class="cls-1" d="M1870.39,3011.1h-11.87a0.563,0.563,0,0,1-.52-0.6,0.557,0.557,0,0,1,.52-0.6h11.87a0.557,0.557,0,0,1,.52.6A0.563,0.563,0,0,1,1870.39,3011.1Zm0.47-.18-5.13,5.89a0.47,0.47,0,0,1-.74,0,0.677,0.677,0,0,1,0-.85l4.76-5.46-4.76-5.47a0.677,0.677,0,0,1,0-.85,0.488,0.488,0,0,1,.74,0l5.13,5.89A0.677,0.677,0,0,1,1870.86,3010.92Z" transform="translate(-1858 -3004)"/>
            </svg>
        </div>
    `);

    $('.slick-prev.slick-arrow').html(`
        <div class="slick-prev_item">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.969" height="13" viewBox="0 0 12.969 13">
                <defs>
                <style>
                    .cls-1 {
                    fill: #99a4ae;
                    fill-rule: evenodd;
                    }
                </style>
                </defs>
                <path id="Forma_1_copy_7" data-name="Forma 1 copy 7" class="cls-1" d="M27.644,3011.1H39.48a0.566,0.566,0,0,0,.522-0.6,0.56,0.56,0,0,0-.522-0.6H27.644a0.56,0.56,0,0,0-.522.6A0.566,0.566,0,0,0,27.644,3011.1Zm-0.474-.18,5.118,5.89a0.469,0.469,0,0,0,.738,0,0.667,0.667,0,0,0,0-.85l-4.748-5.46,4.748-5.47a0.667,0.667,0,0,0,0-.85,0.486,0.486,0,0,0-.738,0l-5.117,5.89A0.667,0.667,0,0,0,27.17,3010.92Z" transform="translate(-27.031 -3004)"/>
            </svg>
        </div>
    `);
}




// Hàm mở form đăng ký
function openformdk(){
    const modal_quote = document.querySelector(".modal_quote");
    const openModalQuotehBtn = document.querySelectorAll(".open-modal-quote");
    const iconCloseModalQuote = document.querySelector(".modal_quote__header");
    
    function toggleModal() {
        modal_quote.classList.toggle("hide");
    }
    
    openModalQuotehBtn.forEach(function(curent,index,array) {
        openModalQuotehBtn[index].addEventListener("click",toggleModal);
    });

    iconCloseModalQuote.addEventListener("click", toggleModal);
    
    modal_quote.addEventListener("click", (e) => {
        if (e.target == e.currentTarget) toggleModal();
    });
}

// Backtoptop
(function($) { "use strict";

$(document).ready(function(){"use strict";
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';    
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress); 
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
        } else {
        jQuery('.progress-wrap').removeClass('active-progress');
        }
    });       
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

})(jQuery); 


// hàm tăng kích thước chữ
function kichthuoc(){
    var min=14; // kích thước font chữ tối thiểu
    var max=20; //kích thước font chữ tối đa
    var elm = $('.detail_content_txt');
    
    // lấy font chữ mực định
    var reset = $('.detail_content_txt').css('fontSize');

    // khôi phục lại kích thước mặc định
    $('.cochu').click(function () {
        elm.css({'fontSize' : reset});
    });

    //Tăng kích thước font chữ
    $('.daucong').click(function() {
        let sizetang = Number($('.detail_content_txt').css('fontSize').slice(0, 2));
        if (sizetang < max) {
            sizetang +=2;
            elm.css({'fontSize' : (String(sizetang)+"px")});
        }
        else{
            elm.css({'fontSize' : (String(max)+"px")});
            // return false;
        }
    });

    // Giảm kích thước font
    $('.dautru').click(function() {
        let sizegiam = Number($('.detail_content_txt').css('fontSize').slice(0, 2));
        if (sizegiam > min) {
            sizegiam -= 2;
            elm.css({'fontSize' : (String(sizegiam)+"px")});
        }
        else{
            elm.css({'fontSize' : (String(min)+"px")});
            // return false;
        }
    });
}




