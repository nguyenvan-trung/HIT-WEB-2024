document.addEventListener("DOMContentLoaded", function() {
    // Chọn phần tử .img và tất cả các div chứa ảnh
    var imgContainer = document.querySelector('.img');
    var imgItems = imgContainer.getElementsByTagName('div');
    var picture = document.querySelector('.picture img'); // Hình ảnh trong phần picture

    // Lặp qua các phần tử imgItems và lắng nghe sự kiện click
    for (var i = 0; i < imgItems.length; i++) {
        imgItems[i].addEventListener('click', function() {
            // Loại bỏ class 'G' khỏi tất cả các phần tử
            for (var j = 0; j < imgItems.length; j++) {
                imgItems[j].classList.remove('G');
            }

            // Thêm class 'G' vào phần tử đã click
            this.classList.add('G');

            // Thay đổi ảnh trong phần picture thành ảnh đã click
            var src = this.querySelector('img').src;
            picture.src = src;
        });
    }
});

// số lượng 
const choose = document.querySelectorAll('.choose');

choose.forEach((item) => {
    const minus = item.querySelector('span:first-child'); // Chọn dấu trừ
    const plus = item.querySelector('span:last-child');  // Chọn dấu cộng
    const quality = item.querySelector('.quality');     // Chọn phần tử p có class "quality"

    // Khi click vào dấu trừ
    minus.addEventListener('click', function() {
        let currentValue = parseInt(quality.textContent); // Lấy giá trị hiện tại
        if (currentValue > 1) { // Đảm bảo giá trị không nhỏ hơn 1
            quality.textContent = currentValue - 1; // Giảm giá trị
        }
    });

    // Khi click vào dấu cộng
    plus.addEventListener('click', function() {
        let currentValue = parseInt(quality.textContent); // Lấy giá trị hiện tại
        quality.textContent = currentValue + 1; // Tăng giá trị
    });
});
