$(document).ready(function() {
    $(".menu-item").click(function() {
        var details = $(this).data("details");
        $("#item-details").text(details);
    });
});
