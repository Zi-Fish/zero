// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function(){
    //import 函数返回的结果是一个promise对象
    import('./111hello.js').then(module => {
        module.hello();
    });
}