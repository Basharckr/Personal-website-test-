$(function(){
    $('#contactform').validate({
        rules:{
            name:{
                required:true,minlength:3
            },
            email:{
                required:true,email:true
            },
            number:{
                required:true,number:true,minlength:10
            },
            message:{
                required:true,minlength:20
            }
        }
    })
})

$("#contactform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyVNLLcdqMVDO6cdYcNRc-LgIkBWc9gFrkCHrFD6jC7nDhkL21IHOMI/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

