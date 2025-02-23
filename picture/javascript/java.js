const notification = document.querySelector('.notification');

function tologin() {
    const input = document.querySelectorAll('input');

    // Kiểm tra xem tất cả input có giá trị hay không
    if (input[0].value !== '' && input[1].value !== '' && input[2].value !== '') {
        showNotification("Đăng Nhập Thành Công", "green", "fa-check");
    } else {
        showNotification("Đăng Nhập Không Thành Công", "red", "fa-circle-xmark");
    }
}

function showNotification(message, colorClass, iconClass) {
    const div = document.createElement('div');
    div.classList.add('noti', colorClass);
    div.innerHTML = `
        <span>${message}</span>
        <i class="fa-solid ${iconClass}"></i>
    `;

    // Thêm thông báo vào `notification`
    notification.appendChild(div);

    // Xóa thông báo sau 3 giây
    setTimeout(() => {
        div.classList.add('fade-out')
        div.remove();
    }, 3000);
}
