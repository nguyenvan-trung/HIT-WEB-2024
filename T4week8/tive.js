

const buttons = document.querySelectorAll('.between button');
const head_two = document.querySelector('.head_two')
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const parent = button.parentElement;
        // Tạo phần tử <p> chứa các nút +, số lượng, và -
        const pro = document.createElement('p');
        pro.innerHTML = `
            <button class="increase">+</button>
            <span>1</span>
            <button class="decrease">-</button>
        `;
        pro.setAttribute('class', 'can');
        const product = document.createElement('p');
        product.innerHTML = ' '
        // Xóa nút hiện tại
        button.remove();

        // Thêm phần tử <p> vào vị trí của nút cũ
        parent.appendChild(pro);

        // Gắn sự kiện động cho các nút mới
        addCanEvents(pro);
    });
});

// Hàm gắn sự kiện cho các phần tử trong `.can`
function addCanEvents(canElement) {
    const increaseButton = canElement.querySelector('.increase');
    const decreaseButton = canElement.querySelector('.decrease');
    const span = canElement.querySelector('span');
    const parent = canElement.parentElement; // Lấy cha của `canElement`

    increaseButton.addEventListener('click', () => {
        span.textContent = parseInt(span.textContent) + 1;
    });

    decreaseButton.addEventListener('click', () => {
        const currentCount = parseInt(span.textContent) - 1;
        span.textContent = currentCount;

        // Nếu số lượng bằng 0, xóa phần tử cha
        if (currentCount === 0) {
            canElement.remove();

            // Tạo lại nút "Add to Cart"
            const addButton = document.createElement('button');
            addButton.innerHTML = "☕ Add to Cart";

            // Thêm nút vào phần tử cha
            parent.appendChild(addButton);

            // Gắn sự kiện click cho nút "Add to Cart" mới
            addButton.addEventListener('click', () => {
                const pro = document.createElement('p');
                pro.innerHTML = `
                    <button class="increase">+</button>
                    <span>1</span>
                    <button class="decrease">-</button>
                `;
                pro.setAttribute('class', 'can');
                addButton.remove();
                parent.appendChild(pro);
                addCanEvents(pro);
            });
        }
    });
}

// Gắn sự kiện ban đầu cho các phần tử `.can` có sẵn
const canElements = document.querySelectorAll('.can');
canElements.forEach(addCanEvents);

