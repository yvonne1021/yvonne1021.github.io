$(document).ready(function() {
    // 顯示菜單項目詳情
    $(".menu-item").click(function() {
        const description = $(this).data("


    // Reservation form submission
    $('#reservationForm').submit(function(event) {
        event.preventDefault();
        alert('訂位已提交，感謝您的預訂！');
        this.reset();
    });
});
