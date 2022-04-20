$(document).ready(function () {
    var i= 1;
    $("#btnContact").click(function () {
        $("#modalContact").modal();
    });
    $("#btnLogIn").click(function () {
        $("#logInModal").modal();
    });
    $("#btnRegister").click(function () {
        $("#registerModal").modal();
    });
    function kiemTraSDT() {
        var re =/^(0){1}[0-9]{9}$/;
        if ($("#txtPhone").val()=="") {
            $("#tbPhone").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPhone").val())) {
            $("#tbPhone").html("* Nhập số phone theo mẫu : 0XXXXXXXXX");
            return false;
        }
        $("#txtPhone").html("*");
        return true;
    }
    $("#txtPhone").blur(kiemTraSDT);
    function kiemTraName() {
        var re = /[^[A-Z]{1}[a-z]]*$/;
        if ($("#txtName").val()=="") {
            $("#tbName").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("* Nhập tên theo mẫu : nguyen van a");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(kiemTraName);
    function kiemTraCompany() {
        var re = /[^[A-Z]{1}[a-z]]*$/;
        if ($("#txtCompany").val()=="") {
            $("#tbCompany").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtCompany").val())) {
            $("#tbCompany").html("* Nhập tên theo mẫu : Company Name");
            return false;
        }
        $("#tbCompany").html("*");
        return true;
    }
    $("#txtCompany").blur(kiemTraCompany);
   
    function kiemTraEmail() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ($("#txtEmail").val()=="") {
            $("#tbEmail").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtEmail").val())) {
            $("#tbEmail").html("* Nhập Email theo mẫu : xxxxxx@gmail.com");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(kiemTraEmail);
   

    function kiemTraUserName() {
        var re = /^[a-z0-9_-]{3,16}$/;
        if ($("#txtUserName").val()=="") {
            $("#tbUserName").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtUserName").val())) {
            $("#tbUserName").html("* Tên đăng nhập không hợp lệ");
            return false;
        }
        $("#tbUserName").html("*");
        return true;
    }
    $("#txtUserName").blur(kiemTraUserName);

    function kiemTraPass() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ($("#txtPass").val()=="") {
            $("#tbPass").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPass").val())) {
            $("#tbPass").html("* Mật khẩu phải có chữ và số");
            return false;
        }
        $("#tbPass").html("*");
        return true;
    }
    $("#txtPass").blur(kiemTraPass);
    function kiemTraUserNameRegister() {
        var re = /^[a-z0-9_-]{3,16}$/;
        if ($("#txtUserNameRegister").val()=="") {
            $("#tbUserNameRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtUserNameRegister").val())) {
            $("#tbUserNameRegister").html("* Tên đăng nhập không hợp lệ");
            return false;
        }
        $("#tbUserNameRegister").html("*");
        return true;
    }
    $("#txtUserNameRegister").blur(kiemTraUserNameRegister);
    function kiemTraPassRegister() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ($("#txtPassRegister").val()=="") {
            $("#tbPassRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPassRegister").val())) {
            $("#tbPassRegister").html("* Mật khẩu ít nhất 8 kí tự có chữ và số");
            return false;
        }
        $("#tbPassRegister").html("*");
        return true;
    }
    $("#txtPassRegister").blur(kiemTraPassRegister);

    var password = document.getElementById("txtPassRegister")
  , confirm_password = document.getElementById("txtPassConfirm");

    function validatePassword(){
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
             confirm_password.setCustomValidity('');
        }
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    function kiemTraEmailRegister() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ($("#txtEmailRegister").val()=="") {
            $("#tbEmailRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtEmailRegister").val())) {
            $("#tbEmailRegister").html("* Nhập Email theo mẫu : xxxxxx@gmail.com");
            return false;
        }
        $("#tbEmailRegister").html("*");
        return true;
    }
    $("#txtEmailRegister").blur(kiemTraEmailRegister);
    function kiemTraPhoneRegister() {
        var re =/^(0){1}[0-9]{9}$/;
        if ($("#txtPhoneRegister").val()=="") {
            $("#tbPhoneRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPhoneRegister").val())) {
            $("#tbPhoneRegister").html("* Nhập số phone theo mẫu : 0XXXXXXXXX");
            return false;
        }
        $("#txtPhoneRegister").html("*");
        return true;
    }
    $("#txtPhoneRegister").blur(kiemTraPhoneRegister);
})