$(document).ready(function(){
    $("#signup-form").validate({
        rules :{
            fname : {
                required : true,
                minlength : 4,
                maxlength : 10
            },
            sname : {
                required : true,
                minlength : 4,
                maxlength : 10
            },
            emailaddress : {
                required : true,
                email : true,
                number : true
            },
            password : {
                minlength : 6,
                maxlength : 8
            },
            Days : {
                required : true
            },
            Months : {
                required : true
            },
            Years : {
                required : true
            },
            gender : {
                required : true
            }
        },
        messages : {
            fname : {
                required : "Enter first name",
                minlength : "Enter atleast 4 character"
            },
            sname : {
                required : "Enter sur name",
                minlength : "Enter atleast 4 character"
            }
        }
    })
})