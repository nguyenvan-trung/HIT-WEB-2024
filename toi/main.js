// html DOM
// W3C
// có 3 thành phần 
/*
1. element
+ thẻ tap : VD h1 , div, ...
2.attribute: id, class, herf, ....
3.text: chữ 
*/
// node : điểm giao nhau
// sử dụng javascpirt ta có thể thay đổi các thành phần (3 thành phần)
/*
+ core DOM tạo quy chuẩn chung cho tất cả tài liệu 
+ xml DOM dựa trên Core --->
+ html Dom dựa trên core --> ra html
*/
// DOM không thuộc trong javascript 
// javascript: Browser(trình duyệt ) | Server (NodeJs)
// back-end : server
// application programing interface
// Browser: HTML --> DOM ---> DOM API: WEB API


/*
+ nếu gọi document : từ nhánh chính 
+ nếu cần nhiều cái nhỏ hơn gọi từ nhánh phụ
*/


/*
*node attribute and text 
+ node attribute is methods like src, href, name , ... 
+ node text is letters in methods

-node attribute
*/

/*
+text 
SD -  innerText, textContext 
+ innerText :  trả về những điều giống như bạn nhìn thấy 
thuộc tính của element node 
+ textContent: trả về nội dung thật bên trong
thuộc tính của text
cả hai luôn  tạo ra text và không tạo ra một element 
*/

/*
+ innerHTML, outerHTML thuộc tính của elementNode

*/

/*
+DOM style :  
- hai cách viết 
1: document.nam.style
2: Object.assign(boxElement.style, {
width: ....,
height: ...,
})
*/


/* 
classList property: DOMTokenList
+ add: thêm class vào element
+ contains: kiểm tra class có nằm trong element 
+ remove: dùng để xóa bỏ 
+ toggle:  TH1: nếu có class đó trong element thì xóa nó
           Th2: nếu không có thì xóa bỏ 
. công dụng của toggle: tạo hiệu ứng đóng mở 
+setInteral: thời gian chạy lặp đi lặp lại 
+setOnTime: thời gian chạy một lần 
*/


/*
  DOM events: sự kiện người dùng 
  1: Attribute events:
  có hai cách để code sự kiện : TH1: cho vào giống như attribute
                                TH2: tạo ra gán một cái function
  2: assgin event using the element node 
  - muốn clickAll thì 
  -e : mouseEvent
  -e.target trả về chính cái element mà mình click vào 
 */