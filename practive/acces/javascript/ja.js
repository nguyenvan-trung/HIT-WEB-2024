// tất cả các sản phẩm 
const allProduct = [
    `acces/img/1-1000x1000.jpg`,
    `acces/img/2-1000x1000.jpg`,
    `acces/img/3-1000x1000.jpg`,
    `acces/img/4-1000x1000.jpg`,
    `acces/img/5-1000x1000.jpg`,
    `acces/img/6-1000x1000.jpg`,
    `acces/img/7-1000x1000.jpg`,
    `acces/img/8-1000x1000.jpg`,
    `acces/img/9-1000x1000.jpg`,
    `acces/img/10-1000x1000.jpg`,
    `acces/img/11-1000x1000.jpg`,
    `acces/img/12-1000x1000.jpg`,
    `acces/img/13-1000x1000.jpg`,
    `acces/img/14-1000x1000.jpg`,
    `acces/img/15-1000x1000.jpg`,
    `acces/img/16-1000x1000.jpg`,
    `acces/img/17-1000x1000.jpg`,
    `acces/img/18-1000x1000.jpg`,
    `acces/img/19-1000x1000.jpg`,
    `acces/img/20-1000x1000.jpg`
]
const allProduct_solve = [
    'Bông Cải Trắng',
    'Quả Thanh Long',
    'Táo Xanh Nữ',
    'Củ Gừng Ta ',
    'Quả Đu Đủ',
    'Dứa Vàng Nhập Khẩu Mỹ',
    'Súp Lơ Xanh',
    'Dâu Tây Đà Lạt',
    'Lựu đỏ Nam Phi nhập khẩu',
    'Quả Na Miền Bắc',
    'Cà rốt nhập khẩu',
    'Rau xanh đặc biệt',
    'Củ Hành Nhập Khẩu',
    'Cà chua nhập khẩu',
    'Hành tây đặc biệt',
    'Chuối Laba Nhập Khẩu Thái Lan',
    'Măng Cụt Chín Miền Nam',
    'Sầu Riêng Miền Nam',
    'Khoai lang ta',
    'Khoai tây đỏ'
]
const allProduct_price = [
    '45.000₫',
    '45.000₫',
    '55.000₫',
    '160.000₫',
    '355.000₫',
    '70.000₫',
    '40.000₫',
    '30.000₫',
    '45.000₫',
    '45.000₫',
    '55.000₫',
    '160.000₫',
    '355.000₫',
    '70.000₫',
    '40.000₫',
    '30.000₫',
    '80.000₫',
    '30.000₫',
    '80.000₫',
    '45.000₫'
]
const allProduct_price_start = [
    '80.000₫',
    '90.000₫',
    '160.000₫',
    '220.000₫',
    '665.000₫',
    '180.000₫',
    '79.000₫',
    '45.000₫',
    '80.000₫',
    '90.000₫',
    '160.000₫',
    '220.000₫',
    '665.000₫',
    '180.000₫',
    '79.000₫',
    '45.000₫',
    '',
    '90.000₫',
    '165.000₫',
    '60.000₫'
]

const allPro = document.querySelector('.table-all-sp')
for (let i = 0; i < 12; i++) {
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="box">
            <img src="${allProduct[i]}" alt="${allProduct_solve[i]}" width="100%">
            <div class="box-pair">
                <a href="#"><i class="fa-solid fa-eye"></i></a>
                <br>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        <p style="text-align: center;">${allProduct_solve[i]}</p>
        <div style="display: flex; justify-content: center; gap: 10px;">
            <span style="color: #3b9048;">${allProduct_price[i]}</span>
            <del style="color: rgb(173, 175, 177);">${allProduct_price_start[i]}</del>
        </div>
    `;

    allPro.appendChild(div); // Thêm vào DOM
}

function changeColorAll(e) {
    const allElements = document.querySelectorAll('.cricle-one');
    allElements.forEach(el => {
        el.classList.remove('sp-color'); // Không có dấu chấm
    });

    // Thêm class 'sp-color' vào phần tử được click
    e.classList.add('sp-color');

    // Clear current content
    allPro.innerHTML = ''; // Xóa hết nội dung hiện tại trong 'chooce'

    // Dựa vào việc phần tử nào được click (nội dung là '1' hay '2'), hiển thị phần tử tương ứng
    if (e.innerHTML.trim() === '1') {
        for (let i = 0; i < 12; i++) {
            const div = document.createElement('div');

            div.innerHTML = `
                <div class="box">
                    <img src="${allProduct[i]}" alt="${allProduct_solve[i]}" width="100%">
                    <div class="box-pair">
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                        <br>
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                </div>
                <p style="text-align: center;">${allProduct_solve[i]}</p>
                <div style="display: flex; justify-content: center; gap: 10px;">
                    <span style="color: #3b9048;">${allProduct_price[i]}</span>
                    <del style="color: rgb(173, 175, 177);">${allProduct_price_start[i]}</del>
                </div>
            `;

            allPro.appendChild(div); // Thêm vào DOM
        }
    } else {
        for (let i = 12; i < 20; i++) {
            const div = document.createElement('div');

            div.innerHTML = `
                <div class="box">
                    <img src="${allProduct[i]}" alt="${allProduct_solve[i]}" width="100%">
                    <div class="box-pair">
                        <a href="#"><i class="fa-solid fa-eye"></i></a>
                        <br>
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                </div>
                <p style="text-align: center;">${allProduct_solve[i]}</p>
                <div style="display: flex; justify-content: center; gap: 10px;">
                    <span style="color: #3b9048;">${allProduct_price[i]}</span>
                    <del style="color: rgb(173, 175, 177);">${allProduct_price_start[i]}</del>
                </div>
            `;

            allPro.appendChild(div); // Thêm vào DOM
        }
    }
}