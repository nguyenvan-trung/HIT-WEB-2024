let arr = new Array(8);
        arr[0] = document.querySelectorAll('.list')[0].innerHTML;
        arr[1] = document.querySelectorAll('.list')[1].innerHTML;
        arr[2] = document.querySelectorAll('.list')[2].innerHTML;
        arr[3] = document.querySelectorAll('.list')[3].innerHTML;
        arr[4] = document.querySelectorAll('.list')[4].innerHTML;
        arr[5] = `
            <img src="catelist/image_cate_6.webp" alt="">
            <h3>ÁO NỮ</h3>
        `;
        arr[6] = `
            <img src="catelist/image_cate_7.webp" alt="">
            <h3>ÁO NỮ</h3>
        `;
        arr[7] = `
            <img src="catelist/image_cate_8.webp" alt="">
            <h3>ÁO NỮ</h3>
        `;

        let k = 0;
        
        function toggleMoreItems() {
            const main = document.querySelector('.list_clothes');
            const Home = document.querySelectorAll('.list');
        
            // Xóa phần tử đầu tiên
            Home[4].remove();
        
            // Thêm phần tử mới vào cuối danh sách
            const p = document.createElement('div');
            p.setAttribute('class', 'list');
            k--;
            if(k === -1) k = 7
            p.innerHTML = arr[k];
            main.prepend(p);
        }
        function togglePreviousItem() {
            const main = document.querySelector('.list_clothes');
            const Home = document.querySelectorAll('.list');
            k++;
            k%=8
            // Xóa phần tử cuối cùng
            Home[0].remove();
        
            // Thêm phần tử mới vào đầu danh sách
            const p = document.createElement('div');
            p.setAttribute('class', 'list');
            p.innerHTML = arr[(k + 4) % 8];
            main.appendChild(p);
}
const lists = document.querySelectorAll('.lit');

lists.forEach(list => {
    const toggleButton = list.querySelector('.lit_sp_mot button'); 
    const ul = list.querySelector('ul'); 
    const icon = toggleButton.querySelector('i'); 

    toggleButton.addEventListener('click', () => {
        // Đóng các danh sách khác
        lists.forEach(otherList => {
            if (otherList !== list) {
                otherList.classList.remove('open');
                otherList.querySelector('.lit_sp_mot button i').classList.remove('rotate');
            }
        });

        // Toggle trạng thái của danh sách hiện tại
        list.classList.toggle('open');
        icon.classList.toggle('rotate');
    });
});
function toggleList(button) {
    const priceList = button.closest('.price').querySelector('.price-lit');
    const icon = button.querySelector('i');

    // Toggle ẩn/hiện danh sách
    priceList.classList.toggle('hidden');

    // Xoay biểu tượng
    icon.classList.toggle('rotate');
}

function toggleCheck(button) {
    button.classList.toggle('checked');
}
// Toggle ẩn/hiện danh sách kích thước
function toggleSizes() {
    const sizeHead = document.querySelector('.size_head');
    const icon = document.querySelector('.size_top button i');

    // Thay đổi trạng thái ẩn/hiện
    sizeHead.classList.toggle('hidden');

    // Đổi hướng mũi tên
    icon.classList.toggle('fa-caret-up');
    icon.classList.toggle('fa-caret-down');
}

// Xử lý khi chọn kích thước
function selectSize(element) {
    const allSizes = document.querySelectorAll('.size_head div');

    // Nếu phần tử đang được chọn, bỏ chọn
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        // Xóa active khỏi tất cả các phần tử khác
        allSizes.forEach(size => size.classList.remove('active'));
        // Đánh dấu phần tử hiện tại
        element.classList.add('active');
    }
}

function toggleColors() {
    const colorHead = document.querySelector('.color_head');
    const icon = document.querySelector('.color_top button i');

    // Toggle ẩn/hiện danh sách màu
    colorHead.classList.toggle('hidden');

    // Đổi hướng mũi tên
    icon.classList.toggle('fa-caret-up');
    icon.classList.toggle('fa-caret-down');
}


// Toggle ẩn/hiện danh sách kiểu áo
function toggleThen() {
    const items = document.querySelector('.fom_head');
    const icon = document.querySelector('.fom_top button i');
    
    items.classList.toggle('hidden');
    icon.classList.toggle('fa-caret-up');
    icon.classList.toggle('fa-caret-down');
}

// Toggle ẩn/hiện danh sách "Xem Thêm"
function toggleThens() {
    const thenItems = document.querySelector('.fom_then_head');
    const icon = document.querySelector('.fom_then_top button i');
    
    thenItems.classList.toggle('hidden');
    icon.classList.toggle('fa-caret-up');
    icon.classList.toggle('fa-caret-down');
}

// Xử lý khi chọn kiểu áo
function selectItem(element) {
    if (element.classList.contains('active')) {
        element.classList.remove('active'); // Bỏ trạng thái active
    } else {
        element.classList.add('active'); // Thêm trạng thái active
    }
}