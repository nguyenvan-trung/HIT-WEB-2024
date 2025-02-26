const fruit = [
    `acces/img/2-1000x1000.jpg`,
    `acces/img/3-1000x1000.jpg`,
    `acces/img/5-1000x1000.jpg`,
    `acces/img/6-1000x1000.jpg`,
    `acces/img/8-1000x1000.jpg`,
    `acces/img/10-1000x1000.jpg`,
    `acces/img/13-1000x1000.jpg`,
    `acces/img/16-1000x1000.jpg`,
    `acces/img/17-1000x1000.jpg`,
    `acces/img/18-1000x1000.jpg`
];

const fruit_solve = [
    'Quả Thanh Long',
    'Táo Xanh Nữ',
    'Quả Đu Đủ',
    'Dứa Vàng Nhập Khẩu Mỹ',
    'Dâu Tây Đà Lạt',
    'Quả Na Miền Bắc',
    'Củ Hành Nhập Khẩu',
    'Chuối Laba Nhập Khẩu Thái Lan',
    'Măng Cụt Chín Miền Nam',
    'Sầu Riêng Miền Nam'
];

const fruit_price = [
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
];

const price_start = [
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
];

const container = document.querySelector(".name-price-fruit"); 

for (let i = 0; i < fruit.length; i++) {
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="box">
            <img src="${fruit[i]}" alt="${fruit_solve[i]}" width="100%">
            <div class="box-pair">
                <a href="#"><i class="fa-solid fa-eye"></i></a>
                <br>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        <p style="text-align: center;">${fruit_solve[i]}</p>
        <div style="display: flex; justify-content: center; gap: 10px;">
            <span style="color: #3b9048;">${fruit_price[i]}</span>
            ${price_start[i] ? `<del style="color: rgb(173, 175, 177);">${price_start[i]}</del>` : ""}
        </div>
    `;

    container.appendChild(div); // Thêm vào DOM
}
 // khi click vào các class fruit 
 document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".class-fruit li");

    listItems.forEach(item => {
        item.addEventListener("click", function () {
            // Xóa class 'fruit-color' khỏi tất cả các mục
            listItems.forEach(li => li.classList.remove("fruit-color"));

            // Thêm class 'fruit-color' vào mục được click
            this.classList.add("fruit-color");
        });
    });
});


const belive = [
    `acces/img/1-1000x1000.jpg`,
    `acces/img/2-1000x1000.jpg`,
    `acces/img/3-1000x1000.jpg`,
    `acces/img/5-1000x1000.jpg`,
    `acces/img/6-1000x1000.jpg`,
    `acces/img/8-1000x1000.jpg`,
    `acces/img/10-1000x1000.jpg`,
    `acces/img/13-1000x1000.jpg`,
    `acces/img/16-1000x1000.jpg`,
    `acces/img/17-1000x1000.jpg`,
    `acces/img/18-1000x1000.jpg`,
    `acces/img/5-1000x1000.jpg`
]
const belive_solve = [
    'Bông Cải Trắng',
    'Quả Thanh Long',
    'Táo Xanh Nữ',
    'Quả Đu Đủ',
    'Dứa Vàng Nhập Khẩu Mỹ',
    'Dâu Tây Đà Lạt',
    'Quả Na Miền Bắc',
    'Củ Hành Nhập Khẩu',
    'Chuối Laba Nhập Khẩu Thái Lan',
    'Măng Cụt Chín Miền Nam',
    'Sầu Riêng Miền Nam',
    'Quả Đu Đủ'
]
const belive_price = [
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
const belive_price_start = [
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

const chooce =  document.querySelector('.belive-product-table')
for(let i = 0; i < 6;i++){
    const choo = document.createElement('div');
    choo.classList.add('belive');  
    choo.innerHTML = `
            <div><img src="${belive[i]}" alt="" wight="150px" height="150px"></div>
            <div class="belive-table">
                <p>${belive_solve[i]}</p>
                <br>
                <span style="color: #3b9048;">${belive_price[i]}</span>
                <br>
                <del style="color: rgb(214, 214, 215);">${belive_price_start[i]}</del>
            </div>
    `;
    chooce.appendChild(choo);
}
function changeColor(e) {
    // Xóa class 'chooce-color' khỏi tất cả các phần tử trước
    const allElements = document.querySelectorAll('.chooce-one');
    allElements.forEach(el => {
        el.classList.remove('chooce-color');
    });

    // Thêm class 'chooce-color' vào phần tử được click
    e.classList.add('chooce-color');
    
    // Clear current content
    chooce.innerHTML = ''; // Xóa hết nội dung hiện tại trong 'chooce'

    // Dựa vào việc phần tử nào được click (nội dung là '1' hay '2'), hiển thị phần tử tương ứng
    if (e.innerHTML.trim() === '1') {
        for (let i = 0; i < 6; i++) {
            const choo = document.createElement('div');
            choo.classList.add('belive');  
            choo.innerHTML = `
                <div><img src="${belive[i]}" alt="" width="150px" height="150px"></div>
                <div class="belive-table">
                    <p>${belive_solve[i]}</p>
                    <br>
                    <span style="color: #3b9048;">${belive_price[i]}</span>
                    <br>
                    <del style="color: rgb(214, 214, 215);">${belive_price_start[i]}</del>
                </div>
            `;
            chooce.appendChild(choo);
        }
    } else {
        for (let i = 6; i < 12; i++) {
            const choo = document.createElement('div');
            choo.classList.add('belive');  
            choo.innerHTML = `
                <div><img src="${belive[i]}" alt="" width="150px" height="150px"></div>
                <div class="belive-table">
                    <p>${belive_solve[i]}</p>
                    <br>
                    <span style="color: #3b9048;">${belive_price[i]}</span>
                    <br>
                    <del style="color: rgb(214, 214, 215);">${belive_price_start[i]}</del>
                </div>
            `;
            chooce.appendChild(choo);
        }
    }
}



// cập nhập sản phẩm mua hàng 
const upDate = document.querySelector('#shop');

upDate.addEventListener("click", function () {
    const shopping = document.createElement('div');
    shopping.classList.add('shoping');
    shopping.innerHTML = `
        <div class="shoping-sum" tabindex="0">
            <h1 style="color: #3b9048;">MUA SẮM SẢN PHẨM</h1>
            <h3><i class="fa-solid fa-check" style="color: #3b9048;"></i> Sản Phẩm Đang Mua Sắm Trong Cửa Hàng </h3>
            <div class="sp-div">
                <h1>SẢN PHẨM CHƯA CẬP NHẬP</h1>
            </div>
        </div>
    `;

    document.body.appendChild(shopping);
    
    const suM = shopping.querySelector('.shoping-sum');
    
    // Focus vào phần tử để blur hoạt động
    suM.focus();

    suM.addEventListener("blur", function () {
        shopping.remove();
    });
});
