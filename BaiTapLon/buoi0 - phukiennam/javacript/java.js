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
let img =  [
    '../spGril/sp-1.webp',
    '../spGril/sp8-2-3ebccc0b-e13e-43a5-a632-2589544dd273.webp',
    '',
    '../spGril/sp7-4-0c5388ec-d407-4278-8d74-5bbe41ee9356.webp',
    '../spGril/sp6-7f574097-3b9b-458d-becf-2e0e47e7a4b1.webp',
    '../spGril/sp5-2-5927c587-23e5-4baa-a0f7-cb13cf4e423d.webp',
    '../spGril/sp4-ceae09b5-3e76-47ed-9ff7-e63f8bbad6d7.webp',
    '../spGril/sp3-9d43f0ba-32f5-4488-a14f-bf4f6ff6e04a.webp',
    '../spGril/sp2-2fe29987-73db-472e-a30e-48379172c671.webp'
];
let img_replace = [
    '../spGril/sp1-2-94af1f45-8b85-412c-8ebf-f3f75c41d9dd.webp',
    '../spGril/sp8-cc2dfef7-6d19-4c03-ac59-32ad42a21589.webp',
    '',
    '../spGril/sp7-b7493e19-ed59-4e84-a899-7f2e0f049b58.webp',
    '../spGril/sp6-2-da76e4ea-155c-4191-b8ee-e88dced5a449.webp',
    '../spGril/sp5-675b885f-c509-4788-8a9c-d26587a531b8.webp',
    '../spGril/sp4-3-8757d1ba-572b-4763-acc6-c38643695467.webp',
    '../spGril/sp3-4-dc7f8405-b1ff-4c33-902d-53d0b4824021.webp',
    '../spGril/sp2-3-65770afd-4805-4370-9703-c95ded095f07.webp'
];
let note =  [
    'Túi Unisex Đeo Chéo Nắp Nam Châm',
    'Mũ Lưỡi Trai Phối Màu Thêu Chữ P',
    '',
    'Mũ Lưỡi Trai Thêu Space Màu Navy',
    'Mũ Lưỡi Trai Thêu Space Màu Đỏ',
    'Thắt Lưng Nam Khoá Tự Động Phối Sọc',
    'Thắt Lưng Nam Khoá Tự Động Mặt Kim Loại',
    'Thắt Lưng Nam Khoá Tự Động Phối Nhám',
    'Thắt Lưng Nam Khoá Cài Kim Loại Viền Vuông'
];
let price = [
    '868.000₫',
    '268.000₫',
    '',
    '138.000₫',
    '138.000₫',
    'Liên Hệ',
    '480.000₫',
    '680.000₫',
    '368.000₫'
];
for(let i = 0; i < 9; i++){
    if(i == 2) continue;
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
