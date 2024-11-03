$(document).ready(function() {
    $(".menu-item").on("click", function() {
        var details = $(this).data("details");
        $("#item-details").fadeOut(200, function() {
            $(this).text(details).fadeIn(200);
        });
    });
});
