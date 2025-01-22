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
    '../spGril/sp1-2-994d2b9b-4bd3-4498-b1c5-377d7dda8b67.webp',
    '../spGril/sp2-0f2d71f7-df2d-4dcf-a86c-9f931835aab5.webp'
];
let img_replace = [
    '../spGril/sp1-42662c1d-db5b-4b24-90f0-5c99e9d904e8.webp',
    '../spGril/sp2-2-fde09577-feb4-47ee-9881-8ced01eca8a3.webp'
];
for(let i = 0; i < 12;i++){
    
}
let note =  [
    'Túi Xách Nữ Công Sở ',
    'Túi Xách Nữ Da PU Cao Cấp',
];
let price = [
    '868.000₫',
    '1.368.000₫'
];
for(let i = 0; i < 2; i++){
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
