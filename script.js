$(document).ready(function() {
    // 顯示菜單項目詳情
    $(".menu-item").click(function() {
        const description = $(this).data("description");
        alert(description);
    });

    // 提交訂位表單
    $("#reservation-form").submit(function(event) {
        event.preventDefault(); // 防止表單提交後刷新頁面
        const name = $("#name").val();
        const phone = $("#phone").val();
        const email = $("#email").val();
        const people = $("#people").val();
        const time = $("#time").val();

        $("#reservation-message").html(`
            <p>感謝您的訂位，${name}！</p>
            <p>您已成功預約 ${people} 位，時間為 ${time}。</p>
            <p>我們將會聯絡您，電話: ${phone}，信箱: ${email}。</p>
        `);

        // 清空表單
        $("#reservation-form")[0].reset();
    });
});
