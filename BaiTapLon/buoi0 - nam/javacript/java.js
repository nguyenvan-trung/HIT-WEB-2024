let sp = [
    ' <img src="catelist/image_cate_1.webp" alt="">  <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_2.webp" alt=""> <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_3.webp" alt=""> <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_4.webp" alt=""> <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_5.webp" alt=""> <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_6.webp" alt=""> <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_7.webp" alt=""> <h3>ÁO NỮ</h3>',
    ' <img src="catelist/image_cate_8.webp" alt=""> <h3>ÁO NỮ</h3>'
];

const big = document.querySelector('.big');
const small = document.querySelector('.small');
const ground = document.querySelector('.around');
let k = 0;

function toggleMorebig() {
    const around = document.querySelectorAll('.around_one');
    const div = document.createElement('div');
    div.setAttribute('class', 'around_one');
    around[4].remove(); 
    k--;
    if (k === -1) k = 7; 
    div.innerHTML = sp[k];
    ground.prepend(div); 
}

function toggleMoresmall() {
    const around = document.querySelectorAll('.around_one');
    const div = document.createElement('div');
    div.setAttribute('class', 'around_one');
    k++;
    k %= 8;
    around[0].remove(); 
    div.innerHTML = sp[(k + 4) % 8]; 
    ground.appendChild(div);
}

// hình ảnh nữ và chuyển đổi 

const table =  document.querySelector('.table')
// let img =  [
//     '../spGril/sp1-4-ba1c4d0e-d23a-406e-9c3e-15f4ed2dac6e.webp',
//     '../spGril/sp2-0f2d71f7-df2d-4dcf-a86c-9f931835aab5.webp',
//     '../spGril/sp2-2-65effe83-351e-4261-97a9-28bfc9aa6d83.webp',
//     '../spGril/sp3-09851ea2-f541-42f7-a962-2c02055d85df.webp',
//     '../spGril/sp4-2-1931699b-b36c-40ae-860b-2dcc012223e8.webp',
//     '../spGril/sp5-2-75657af6-6df6-41c1-8188-9d75a667e1af.webp',
//     '../spGril/sp6-2.webp',
//     '../spGril/sp6-5-bb38dbce-8efa-4a6c-95b6-684081454564.webp',
//     '../spGril/sp7-2-f3707173-ee72-411d-9951-a6224371e55f.webp',
//     '../spGril/sp8-2-b6da4946-d566-436c-bb78-02b179755959.webp',
//     '../spGril/sp3-7.webp',
//     '../spGril/sp2-5-9a379524-7b69-4bcb-a49d-9bf90040bca7.webp'
// ];
// let img_replace = [
//     '../spGril/sp1-eb7d6df8-76b2-42e8-849a-11c363c09695.webp',
//     '../spGril/sp2-2-fde09577-feb4-47ee-9881-8ced01eca8a3.webp',
//     '../spGril/sp2-ffe1c9a1-2f7f-4848-a868-10f02aa00824.webp',
//     '../spGril/sp3-2-c140d0a9-b56c-4166-8f5b-3da0c917eba6.webp',
//     '../spGril/sp4-2-ae406784-4fe5-426e-bf10-5e884a86ada9.webp',
//     '../spGril/sp5-3-89d36e7b-ea48-4b24-875e-a43a374a34be.webp',
//     '../spGril/sp6-4-d2d36b00-f058-45fb-b5b1-487a5bb97f06.webp',
//     '../spGril/sp6-5.webp',
//     '../spGril/sp7-4c6b2fac-bdfe-40a9-b7bc-b40b15425bc9.webp',
//     '../spGril/sp8-4069b06d-4ec4-4029-9124-ef50cbd0cbd9.webp',
//     '../spGril/sp3-4-9a862a85-3d84-4806-bd56-dc3218b5259e.webp',
//     '../spGril/sp2-6-edab2c49-8c75-4344-b3e4-84c90a5d211a.webp'
// ];
// for(let i = 0; i < 12;i++){
    
// }
let note =  [
    'Áo Sơ Mi Nam dài Tay Dáng Suông',
    'Áo sơ mi nam dài tay dáng suông form regular',
    'Áo Khoác Bomber Nam Da Lộn',
    'Áo Khoác Da Lộn Nam 2 Lớp',
    'Áo sơ mi nam cotton dài tay ND003',
    'Áo len polo nam cộc tay ND004',
    'Áo Polo Nam ND005',
    'Quần Dài Nam Dáng Suông',
    'Quần Jeans ',
    'Quần Jeans Nam Slim Denim Like Cơ Bản',
    'Quần Jeans Nam Slim Denim Like Cơ Bản ND006',
    'Áo sơ mi nam dài tay dáng suông '
];
let price = [
    '868.000₫',
    '868.000₫ <del>680.000₫</del>',
    '486.000₫ <del>686.000₫</del>',
    '1.486.000₫ <del>2.000.000₫</del>',
    '268.000₫ <del>368.000₫</del>',
    '628.000₫ <del>868.000₫</del>',
    '680.000₫',
    '680.000₫ <del>860.000₫</del>',
    '780.000₫',
    '368.000₫ <del>680.000₫</del>',
    '468.000₫ <del>628.000₫</del>',
    '480.000₫'
];
for(let i = 0; i < 12; i++){
    const div =  document.createElement('div')
    div.setAttribute('class', 'row')
    div.innerHTML = `
       <div class="imge help${i}">
                        <div class="can">
                            <div class="tron"><i class="fa-solid fa-heart"></i></div>
                            <div class="tron"><i class="fa-solid fa-arrows-rotate"></i></div>
                        </div>
                        <button>Thêm Vào Giỏ Hàng</button>
                    </div>
                    <h4>${note[i]}</h4>
                    <h4 style="color:#ff6347 ;">${price[i]}</h4>
    `;

    table.appendChild(div)
}

// danh mục sản phẩm
const span =  document.querySelectorAll('.product_nam span')

span.forEach(spa =>{
    spa.addEventListener('click', function() {
        const ul = this.closest('.product').querySelector('ul');

        // Thêm hoặc loại bỏ class 'active' trên mũi tên
        this.classList.toggle('active');

        // Thêm hoặc loại bỏ class 'show' trên <ul> để hiển thị hoặc ẩn nó
        ul.classList.toggle('show');
    });
});

// chọn mức giá sản phẩm 
const butget =  document.querySelectorAll('.list_price ul li .button_price')

butget.forEach(butgets => {
    butgets.addEventListener('click', function() {
        // Lấy phần tử <ul> trong cùng một product
        const span =  butgets.querySelector('span')

        // Thêm hoặc loại bỏ class 'show' trên <ul> để hiển thị hoặc ẩn nó
        span.classList.toggle('gia');
    });
})


function click_menu_span() {
    const list_price = document.querySelector('.list_price ul');
    const menu_span = document.querySelector('.menu_price span');
    menu_span.classList.toggle('but');
    list_price.classList.toggle('butget');
}


// chọn màu thích hợp, phổ biến 
//chọn size 
// kiểu dáng quần áo 

const categoryList = document.getElementById("categoryList");
const additionalItems = `
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Bộ Nỉ</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Đầm Liền Nữ</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Đầm Ren Nữ</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Quần Dài</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Quần jeans</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Túi Xách</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Váy</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Váy Liền</a>
</li>
<li class="additional">
    <div class="button_style"><span><i class="fa-solid fa-check"></i></span></div>
    <a href="#">Váy Liền Nữ</a>
</li>
`;

categoryList.addEventListener("click", function (e) {
    const target = e.target.closest(".i_cate");
    if (target) {
        const buttonText = target.querySelector("p");

        if (buttonText.textContent === "Xem Thêm") {
            // Thêm các mục mới trước nút "Xem Thêm/Thu Gọn"
            target.insertAdjacentHTML("beforebegin", additionalItems);
            buttonText.textContent = "Thu Gọn";
            target.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up");
        } else {
            // Xóa các mục đã thêm
            const additionalElements = document.querySelectorAll(".additional");
            additionalElements.forEach(el => el.remove());
            buttonText.textContent = "Xem Thêm";
            target.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
        }
    }
});

// thêm vào và rut gọn 
document.getElementById('categoryList').addEventListener('click', function(event) {
    // Kiểm tra nếu phần tử click vào là .button_style
    if (event.target.closest('.button_style')) {
        const styles = event.target.closest('.button_style'); // Lấy phần tử .button_style

        // Toggle class "cate" cho .button_style
        styles.classList.toggle('cate');

        // Tìm <span> bên trong .button_style
        const span = styles.querySelector('span');
        if (span) {
            // Toggle class "cate_block" cho <span>
            span.classList.toggle('cate_block');
        }
    }
});
// click vào kiểu dáng 
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".style_top span");
    const categoryList = document.getElementById("categoryList");

    toggleButton.addEventListener("click", function () {
        // Toggle class để hiển thị/ẩn ul
        categoryList.classList.toggle("show");

        // Thêm/lớp rotate cho nút
        this.classList.toggle("rotate");
    });
});
// click size
document.addEventListener("DOMContentLoaded", function () {
    const sizeToggleButton = document.querySelector(".size_top span");
    const sizeContain = document.querySelector(".size-contain");

    sizeToggleButton.addEventListener("click", function () {
        // Toggle class để hiển thị/ẩn container
        sizeContain.classList.toggle("show");

        // Thêm/lớp rotate cho nút
        this.classList.toggle("rotate");
    });
});
// màu 
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các nút toggle (mũi tên) trong danh sách màu
    const toggleButtons = document.querySelectorAll(".menu_color span");

    toggleButtons.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            // Tìm danh sách màu tương ứng với nút vừa được nhấn
            const colorList = this.closest(".list_color").querySelector(".color-list");

            // Toggle class để ẩn/hiện danh sách màu
            colorList.classList.toggle("show");

            // Toggle class để xoay mũi tên
            this.classList.toggle("rotate");
        });
    });
});



//comunicat
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".comunicate .improt");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    let currentIndex = 0;

    function updateActiveItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    prev.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateActiveItem(currentIndex);
        }
    });

    next.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateActiveItem(currentIndex);
        }
    });

    // Initial setup
    updateActiveItem(currentIndex);
});
