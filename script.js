$(document).ready(function() {
    // Display details on menu item click
    $('.menu-item').click(function() {
        const title = $(this).text();
        const description = $(this).data('description');
        const price = $(this).data('price');
        
        $('#detailTitle').text(title);
        $('#detailDescription').text(description);
        $('#detailPrice').text(price);
        
        $('#detailView').show();
    });

    // Reservation form submission
    $('#reservationForm').submit(function(event) {
        event.preventDefault();
        alert('訂位已提交，感謝您的預訂！');
        this.reset();
    });
});
