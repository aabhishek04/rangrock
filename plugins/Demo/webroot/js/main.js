$(".button-collapse").sideNav();

// See More
var showChar = 240;  // How many characters are shown by default
var ellipsestext = "...";
var moretext = "More";
var lesstext = "Less";

$('.more').each(function() {
    var content = $(this).html();

    if(content.length > showChar) {

        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

        $(this).html(html);
    }

});

$(".morelink").click(function(){
    if($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});


// poll
$(".select-poll").hide();
    $(".addpoll").click(function(){
      $(".select-poll").show("medium");
      $(".poll-option").html("Poll Option <i class='zmdi zmdi-chevron-up'></i>");
    })

    // poll append
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" placeholder="Add an poll" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        $(addto).after(newInput);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
    });

    // image trigger
    $(".file-trigger").click(function(){
      $(".uploader").click();
    });

    // invite member
    $(document).ready(function() {
      $('input.autocomplete').autocomplete({
        data: {
          "Apple": '../images/user-icon.jpg',
          "Apple 2": '../images/test2.jpg',
          "Apple 3": '../images/lion.png',
          "Apple 4": '../images/lion.png',
          "Banana 1": '../images/lion.png',
          "Banana 2": '../images/lion.png',
          "Banana 3": '../images/lion.png',
          "Boubacar Diara": '../images/lion.png',
          "Google": '../images/lion.png',
          "Saini": '../images/lion.png'
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
      });
    });

// select     
  $(document).ready(function() {
    $('select').material_select();
  });

  // date 
   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



   // Image uploader
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

// like buttn 
$('.like-button').click(function(){
  var obj = $(this);
  if( obj.data('liked') ){
      obj.data('liked', false);
      obj.html('<i class="zmdi zmdi-thumb-up"></i> Like');
  }
  else{
      obj.data('liked', true);
      obj.html('<i class="zmdi zmdi-thumb-down"></i> Unlike');
  }
});





// article nav 
 $(window).scroll(function(){
            if ($(window).scrollTop() >= 100) {
               $('.navbar').addClass('article-nav');
            }
            else {
               $('.navbar').removeClass('article-nav');
            }
 });
// article nav 
 $(window).scroll(function(){
            if ($(window).scrollTop() >= 200) {
               $('.articles').addClass('article-nav');
            }
            else {
               $('.articles').removeClass('article-nav');
            }
 });

 // fixed android nav
  $(window).scroll(function(){
            if ($(window).scrollTop() >= 100) {
               $('.android-nav').addClass('fixed-nav');
            }
            else {
               $('.android-nav').removeClass('fixed-nav');
            }
 });


// interview nav
 // $(window).scroll(function(){
 //            if ($(window).scrollTop() >= 100) {
 //               $('.interview_nav').addClass('interview-fixed');
 //            }
 //            else {
 //               $('.interview_nav').removeClass('interview-fixed');
 //            }
 // });

// interview-android-nav

 // $(window).scroll(function(){
 //            if ($(window).scrollTop() >= 100) {
 //               $('.interview-android-nav').addClass('interview-android-fixed');
 //            }
 //            else {
 //               $('.interview-android-nav').removeClass('interview-android-fixed');
 //            }
 // });

// sort header

 $(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
       $('.sort-header').addClass('sort-header-fixed');
    }
    else {
       $('.sort-header').removeClass('sort-header-fixed');
    }
 });


// search result nav
$(window).scroll(function(){
            if ($(window).scrollTop() >= 100) {
               $('.search-result-nav').addClass('fixed-nav');
            }
            else {
               $('.search-result-nav').removeClass('fixed-nav');
            }
});

// Mobile number
  $(".add-number").click(function(){
    $(".mobie").append("<div class='input-field select-number'><input id='mob' type='tel' class='validate'><label for='mob'>Mobile</label></div>");
  });


// Email
  $(".add-email").click(function(){
    $(".emai").append("<div class='input-field'><input id='email' type='email' class='validate'><label for='email'>Email</label></div>");
  });

    // Search
$(".hidden-search").hide();
$(".search").click(function(){
  $(".hidden-search").show();
  $(".search-hide").hide();
});


// video attatch
$(".video-link").hide();
$(".video-attatch").click(function(){
  $(".video-link").show();
});

// file attatch
$(".file-link").hide();
$(".file-attatch").click(function(){
  $(".file-link").show();
});

// Social coneection
$(".add-social").click(function(){
    $(".social-link").append("<div class='input-field no-padding'><input id='web' type='text' class='validate'><label for='web'>Yout URl</label></div>");
});


// activate post btn
 $("textarea").keyup(function() {
    if ($(this).val() != "") {
        $(this).closest(".input-comment").find("button[type='submit']").removeAttr("disabled", "disabled").addClass("input-comment-active");
      } else {
        $(this).closest(".input-comment").find("button[type='submit']").attr("disabled", "disabled").removeClass("input-comment-active");
      }
 });


 $('.myMenuLink').click(function () {
    $('html, body').animate({scrollTop:1000}, '5000');
    return false;
});