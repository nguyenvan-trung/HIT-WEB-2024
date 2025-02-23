


function javascript(object) {
    console.log(object)
    object.rules.forEach(rule => {
        var textElement =  document.querySelector(rule.selector)
        if(textElement){
            // khi blur khỏi input 
            textElement.onblur = function(){
                var pareText = textElement.closest(object.group).querySelector(object.form);
                console.log(textElement.value)
                console.log(pareText)
                if(!rule.test(textElement.value)){
                    textElement.classList.remove(object.re)
                    pareText.innerText =  ""
                }else{
                    textElement.classList.add(object.re)
                    pareText.innerText =  rule.test(textElement.value)
                }
            }
            // khi nhập input 
            textElement.oninput = function(){
                var pareText = textElement.closest(object.group).querySelector(object.form);
                console.log(textElement.value)
                textElement.classList.remove(object.re)
                pareText.innerText =  ""
            }
        }
    });
}

javascript.isName = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Xin Hãy Nhập Trường Này";
        }        
    }
}

javascript.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Xin Hãy Nhập Trường Này";
        }        
    }
}
javascript.isPassword = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Xin Hãy Nhập Trường Này";
        }        
    }
}

javascript.isConfirm = function(selector, selec) {
    return {
        selector: selector,
        test: function (value) {
            function fix(value) {
                var password =  document.querySelector(selec)
                return value === password.value ? undefined: "Mật Khẩu Không Khớp Xin Hãy Nhập Lại";
            }
            return value.trim() ?  fix(value) : "Xin Hãy Nhập Trường Này";
        }        
    }
}