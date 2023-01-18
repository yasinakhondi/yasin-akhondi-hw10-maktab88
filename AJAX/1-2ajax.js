$(() => {
    $("#reqarea , #resarea, #footer ").hide();

    $("#selectBox").on("change", function () {

        $("#reqarea , #resarea , #footer ").hide();


        if ($(this).val() === "GET") {
            $("#reqarea  , #footer ").fadeIn();
        }
        if ($(this).val() === "POST") {
            $("#reqarea , #resarea , #footer ").fadeIn();
        }
    })


    $("#btn").on("click", function (e) {
        e.preventDefault()
        $.ajax({
            url: $("#urlInput").val(),
            type: $("#selectBox").val(),
            success: function (res, statusText, header) {
                $("#req").val(JSON.stringify(res.data));
                $("#footText").val(`Status : ${header.status}`);
            },
            error: function (err) {
            }

        })
    })



})