
('#csvForm').validate({
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
            "username": {
                required: true,
                onlyWord:true
        
            },
            "password": {
                required: true,
//                onlyWord:true
        
            }
        },
        messages: {
            "password": {
                required: 'Please Enter Password !',
            }
        }
    });
    jQuery.validator.addMethod("onlyWord", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /^[a-zA-Z]$/.test( value );
}, 'NOT Allow.');

