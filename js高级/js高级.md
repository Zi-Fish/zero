js高级

####　编程思想

#####　面向对象编程

​	把事务分解成一个一个的对象，然后对象间分工和合作

面向对象的特性：封装性，继承性，多态性

思维特点:1.抽取(抽象)公用的属性和行为阻止（封装）成一个类（模板）

2.对类进行实例化，获取类的对象

对象是由属性和方法组成的

1.属性：事物的特征；

2.方法：事物的行为。

 

##### 面向过程编程

​	就是分析出解决问题所需要的步骤，一步一步的实现，再一步一步调用

#### 类与对象

​	类抽象了对象的公共部分，它泛指某一大类（class），对象特指某一个，通过类实例化一个具体的对象

​	constructor() 方法是类的构造函数(默认方法)，用于传递参数,返回实例对象，通过 new 命令生成对象实例时，自动调用该方法。如果没有显示定义, 类内部会自动给我们创建一个constructor()

​	(1) 通过class 关键字创建类, 类名习惯性定义首字母大写

​    (2) 类里面有个constructor 函数,可以接受传递过来的参数,同时返回实例对象

​    (3) constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自动生成这个函数

​    (4) 生成实例 new 不能省略

​    (5) 最后注意语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加function

```js
    class Star {
      constructor(uname, age) {
        this.uname = uname;
        this.age = age;
      }
    }

    // 2. 利用类创建对象 new
    var ldh = new Star('刘德华', 18);
    var zxy = new Star('张学友', 20);
    console.log(ldh);
    console.log(zxy);
```

​	(6).多个函数方法不需要添加逗号分隔

##### 类的继承

​	 super关键字用于访问和调用对象父类上的函数，

​	 可以调用父类的构造函数，也可以调用父类的普通函数

```js
 super(x,y)//调用了父类的构造函数
```

   1.在继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的

   2.如果子类没有，就去查找父类，有就执行

```js
console.log(super.say()+"son");
// super.say() 就是调用父类中的普通函数
```

```js
 class Father{
      constructor(x,y){
        this.x=x
        this.y=y
      }
      sum(){
        console.log(this.x+this.y)
      }
    }
    class Son extends Father{
      constructor(x,y){
      // 利用super 调用父类的构造函数,必须写在，子类之前
        super(x,y)
        this.x=x
        this.y=y

      }
      sub(){
        console.log(this.x-this.y)
      }
    }
    let son = new Son(8,5)
    son.sub()
    son.sum()
```

类的注意事项

```js
      <button>点击</button>
    <script>
        var that;
        var _that;
        class Star {
            constructor(uname, age) {
                // constructor 里面的this 指向的是 创建的实例对象
                that = this;
                console.log(this);

                this.uname = uname;
                this.age = age;
                // this.sing();
                this.btn = document.querySelector('button');
                this.btn.onclick = this.sing;
            }
            sing() {
                // 这个sing方法里面的this 指向的是 btn 这个按钮,因为这个按钮调用了这个函数
                console.log(this);

                console.log(that.uname); // that里面存储的是constructor里面的this
            }
            dance() {
                // 这个dance里面的this 指向的是实例对象 ldh 因为ldh 调用了这个函数
                _that = this;
                console.log(this);

            }
        }

        let ldh = new Star('刘德华');
        console.log(that === ldh);
        ldh.dance();
        console.log(_that === ldh);

        // 1. 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象

        // 2. 类里面的共有的属性和方法一定要加this使用.
//3.注意this的指向问题
```

```js
var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section 父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
            this.updateNode();
            // init 初始化操作让相关的元素绑定事件
            this.add.onclick = this.addTab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;

            }
        }
        // 因为我们动态添加元素 需要从新获取对应的元素
    updateNode() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        }
        // 1. 切换功能
    toggleTab() {
            // console.log(this.index);
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        // 清除所有li 和section 的类
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        // 2. 添加功能
    addTab() {
            that.clearClass();
            // (1) 创建li元素和section元素 
            var random = Math.random();
            var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '<section class="conactive">测试 ' + random + '</section>';
            // (2) 把这两个元素追加到对应的父元素里面
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        // 3. 删除功能
    removeTab(e) {
            e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
            var index = this.parentNode.index;
            console.log(index);
            // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
            if (document.querySelector('.liactive')) return;
            // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
            index--;
            // 手动调用我们的点击事件  不需要鼠标触发
            that.lis[index] && that.lis[index].click();
        }
        // 4. 修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //=======================================================
        // alert(11);
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当我们离开文本框就把文本框里面的值给span 
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }
    }

}
new Tab('#tab');
```

#### 构造函数 对象

#####　构造函数创建对象

​     1.构造函数用于创造某一类对象，其首字母要大写

​     2.构造函数要与new一起使用才有意义

​	 3.存在浪费内存的问题

 new 在执行时会做四件事情：

在内存中创建一个新的空对象。

 让 this 指向这个新的对象。

 执行构造函数里面的代码，给这个新对象添加属性和方法。

 返回这个新对象（所以构造函数里面不需要 return ）

```js
   // 1. 利用 new Object() 创建对象

        var obj1 = new Object();

        // 2. 利用 对象字面量创建对象

        var obj2 = {};

        // 3. 利用构造函数创建对象 公共部分
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
            this.sing = function () {
                console.log('我会唱歌');

            }
        }
        // 创建一个实例对象
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        console.log(ldh);
        // 调用公共的方法
        ldh.sing();
        zxy.sing();
```

##### 静态成员和实例成员

```js
 // 构造函数中的属性和方法我们称为成员, 成员可以添加
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
            this.sing = function() {
                console.log('我会唱歌');

            }
        }
        var ldh = new Star('刘德华', 18);
        // 1.实例成员就是构造函数内部通过this添加的成员 uname age sing 就是实例成员
        // 实例成员只能通过实例化的对象来访问
        console.log(ldh.uname);
        ldh.sing();
        // console.log(Star.uname); // 不可以通过构造函数来访问实例成员
        // 2. 静态成员 在构造函数本身上添加的成员  sex 就是静态成员
        Star.sex = '男';
        // 静态成员只能通过构造函数来访问
        console.log(Star.sex);
        console.log(ldh.sex);//undefined
        // 不能通过对象来访问
```

##### 构造函数原型

构造函数通过原型分配的函数是所有对象所共享的，protype 原型对象，所有实例实现共享

```js
        // 1. 构造函数的问题. 
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
            // this.sing = function() {
            //     console.log('我会唱歌');

            // }
        }
		//追加prototype对象，就不会多开辟内存空间去存放每个实例对象的相同方法
        Star.prototype.sing = function() {
            console.log('我会唱歌');
        }
	  //===============================
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        console.log(ldh.sing === zxy.sing);
        // console.dir(Star);
        ldh.sing();
        zxy.sing();
        // 2. 一般情况下,我们的公共属性定义到构造函数里面,
        //  公共的方法我们放到原型对象身上
```

##### 对象原型\__proto__

对象都会有一个属性\____proto\__指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 \__proto__ 原型的存在。

\__proto__对象原型和原型对象 prototype 是等价的

\__proto__对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 prototype

```js
 console.log(ldh.__proto__ ===Star.prototype);//true
        // 方法的查找规则: 首先先看ldh 对象身上是否有 sing 方法,如果有就执行这个对象上的sing
        // 如果没有sing 这个方法,因为有__proto__ 的存在,就去构造函数原型对象prototype身上去查找sing这个方法
```

##### 原型constructor

```js
 function Star(uname, age) {
            this.uname = uname;
            this.age = age;
        }
        // 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数
        // Star.prototype.sing = function() {
        //     console.log('我会唱歌');
        // };
        // Star.prototype.movie = function() {
        //     console.log('我会演电影');
        // }
        // ================================
        //对象的赋值操作会覆盖原来的
        Star.prototype = {
            // 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数
            constructor: Star,//手动添加
            sing: function() {
                console.log('我会唱歌');
            },
            movie: function() {
                console.log('我会演电影');
            }
        }
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        console.log(Star.prototype);
        console.log(ldh.__proto__);
        console.log(Star.prototype.constructor);
        console.log(ldh.__proto__.constructor);
```

prototype 构造函数指向原型对象 constructor 又指向构造函数

\__proto__ 对象实例指向原型对象

##### 原型链

1. 只要是对象就有__proto__ 原型, 指向原型对象

​    console.log(Star.prototype);

​    console.log(Star.prototype.__proto__ === Object.prototype);

   2.我们Star原型对象里面的__proto__原型指向的是 Object.prototype

​    console.log(Object.prototype.__proto__);

   3. 我们Object.prototype原型对象里面的__proto__原型  指向为 null

