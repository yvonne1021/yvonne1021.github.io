// 等待頁面載入完成
$(document).ready(function() {
    // 菜單項目顯示描述
    $('.menu-item').hover(function() {
        const description = $(this).data('description');
        $(this).append(`<span class="tooltip">${description}</span>`);
    }, function() {
        $(this).find('.tooltip').remove();
    });

    // 訂位表單提交事件
    $('#reservationForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const guestCount = $('#guestCount').val();
        const reservationTime = $('#reservationTime').val();

        // 確認所有必填字段均已填寫
        if (name && phone && email && guestCount && reservationTime) {
            const reservation = `<p>姓名: ${name}，電話: ${phone}，訂位人數: ${guestCount}，時間: ${reservationTime}</p>`;
            $('#reservations').append(reservation).fadeIn(500);
            alert("訂位成功！");
            $('#reservationForm')[0].reset(); // 清空表單
        } else {
            alert("請填寫所有欄位");
        }
    });

    // 點擊標題以滑動顯示訂位紀錄
    $('h2:contains("訂位紀錄")').on('click', function() {
        $('#reservations').slideToggle();
    });
});

