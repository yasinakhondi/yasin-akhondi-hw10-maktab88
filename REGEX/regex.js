$(() => {
    let nameRegex = /^(?=.*[A-Za-z])[A-Za-z]{1,30}$/

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{0,})+$/

    let PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/



    $("#button").on("click", function () {
        if (nameRegex.test($("#firstN").val())) {
        }
        else { ($("#sname").css("display", "block")) }
    })


    $("#button").on("click", function () {
        if (nameRegex.test($("#lastN").val())) {
        }
        else { $("#slname").css({ display: "block" }) }
    })



    $("#button").on("click", function () {
        if (emailRegex.test($("#email").val())) {
        }
        else { $("#semail").css({ display: "block" }) }
    })


    $("#button").on("click", function () {
        if (PasswordRegex.test($("#password").val())) {
        }
        else { $("#spassword").css({ display: "block" }) }
    })

})