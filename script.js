$(document).ready(function() {
    $(".menu-item").click(function() {
        const description = $(this).data("description");
        alert(description); // 顯示餐點描述
    });

    $("#reservationForm").submit(function(event) {
        event.preventDefault(); // 防止表單提交後頁面刷新

        const name = $("#name").val();
        const phone = $("#phone").val();
        const email = $("#email").val();
        const guestCount = $("#guestCount").val();
        const reservationTime = $("#reservationTime").val();

        const reservationInfo = `
            <div>
                <strong>姓名:</strong> ${name} <br>
                <strong>電話:</strong> ${phone} <br>
                <strong>信箱:</strong> ${email} <br>
                <strong>人數:</strong> ${guestCount} <br>
                <strong>時間:</strong> ${new Date(reservationTime).toLocaleString()} <br>
            </div>
            <hr>
        `;

        $("#reservations").append(reservationInfo); // 添加訂位信息到顯示區域
        $(this).trigger("reset"); // 清空表單
    });
});
