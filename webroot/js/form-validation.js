
$(function () {
    $.validator.addMethod("regex", function (value, element, regexpr) {
        return regexpr.test(value);
    });
    jQuery.validator.addMethod("isValidPhoneNo", function (value, element) {
        return $("#phoneno").intlTelInput("isValidNumber"); // return true if field is ok or should be ignored
    });
});

$(document).ready(function () {

//    $("#phone_full").val($("#phoneno").intlTelInput("getNumber"));
   

    $("#writeValid").validate({
        ignore: ":hidden",
        errorElement: 'span',
        errorClass: 'help-inline',
        highlight: function (element) {
            $(element).parent().addClass("error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("error");
        },
        rules: {
            "content": {
                required: true,
            }
        },
        messages: {
            "content": {
                required:"Write message", 
            }
        }
    });
    
    $("#writePost").validate({
        ignore: ":hidden",
        errorElement: 'span',
        errorClass: 'help-inline',
        highlight: function (element) {
            $(element).parent().addClass("error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("error");
        },
        rules: {
            "content": {
                required: true,
                
            },
        },
        messages: {
            "content": {
                required: 'post can not be blank',
            },
        }
    });
    $("#editPost").validate({
        ignore: ":hidden",
        errorElement: 'span',
        errorClass: 'help-inline',
        highlight: function (element) {
            $(element).parent().addClass("error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("error");
        },
        rules: {
            "content": {
                required: true,
                
            },
        },
        messages: {
            "content": {
                required: 'post can not be blank',
            },
        },
    });
    $("#searchform").validate({
        ignore: ":hidden",
        errorElement: 'span',
        errorClass: 'help-inline',
        highlight: function (element) {
            $(element).parent().addClass("error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("error");
        },
        rules: {
            "search": {
                required: true,
                
            }
        },
        messages: {
            "search": {
                required: 'can not be blank',
            }
        },
    });
    
   
});



