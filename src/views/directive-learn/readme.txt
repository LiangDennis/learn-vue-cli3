

1.通过事件处理的如@click方式可以不用绑定方法，可以直接改变data中的数据，但是这时不需要用到this或者是mustache语法
2.改变样式的方式
  a) 首先要有class，即需要在style样式中定义一个class
  b) 然后可以在data中绑定一个布尔值来确定是否启用这个class
  c) 在html部分可以使用绑定的属性v-bind来绑定class，格式为：:class="{'类名':dataBoolean}"，当dataBoolean为真时，使用这个类，否则不使用这个类
3.v-for可以遍历对象，即使用是v-for="(value,key,index) in obj" :key="index"，在此处需要注意的是遍历对象的value和key的位置。
4.在data中某个变量定义的值不能在立刻在另一个变量中使用this.变量访问，需要在计算属性中定义这另一个变量。
5.setInterval的使用和清除。
  a) 定义timer，timer变量赋值一个定时器
  b) 在定时器中可以定义一些方式来清除定时器
6.input标签的id属性与label的for属性将两者链接起来。点击label同时可以实现点击input的效果。（限于CheckBox和radio）
7.v-model 绑定的事件默认是input事件。
8.computed计算属性中的每一个属性都需要使用匿名函数返回，而且不能使用箭头函数，否则this的指向会出现问题。补充：也可以使用 () {} 函数增强模式。
9.computed计算属性也可以设置setter的方式，在某些时候可以改变计算属性的值。
10.有一个lodash的插件，即可以实现节流和防抖的功能，https://lodash.com/docs#debounce。不仅仅是防抖和节流。
11.可以在created的生命函数中定义一些参数，使用this进行定义，也可以指向一些methods中的方法。使用方式为：this.someData 会创建一个someData的值，可以在其他地方想data里面的数据进行使用；this.fun = this.method，使得fun指向method 方法。
12.class and style
  a) 绑定的class和style，vue对此作了专门的增强。表达式的结果的类型除了字符串外，还可以是对象或者数组。关键字：表达式，字符串，对象，数组。
  b) 在对象中也可以切换多个class，也可以与非绑定的class共存。
  c) 绑定的class中，样式需要在style中定义，同时也不需要字符串的形式，绑定的判断属性（即data中的属性）也不需要字符串形式。
  d) 使用的方式有：
    1）对象的内联方式
    2）在data中使用对象的方式
    3）在computed中使用计算属性的方式，返回一个对象
    4）数组方式，在data中定义变量指向class名，同时可以在里面使用三元运算符，也可以使用对象语法
    5）给子组件使用父组件的样式。
    6）绑定style，可以为属性绑定多个值的数组，常用于提供多个带前缀的值，但实践没有效果。
    7）使用对象的方式：样式在前面，不需要字符串形式；布尔值在后面，即redClass:isRed。使用数组的方式：使用变量保存样式的名，即redParam: redClass;
13.使用template元素包裹一系列的需要v-if 切换的元素，最终渲染结果不包括template。
14.Math.random()产生[0,1)的float类型的数值，对于数组直接乘以数组的长度，Math.floor()向下取整。
15.v-if与v-else的渲染问题，不添加key值会复用，可以使用唯一的key值，让它们完成独立的渲染，而不是复用。
16.v-for 比 v-if 有更高的优先级。
17.数组有两种情况的修改不是响应式的：1）直接将数组中的某一项的值进行修改。2）直接修改数组的长度
  a）通过this.$set(arr,index,newValue)的方式修改数组，并让其能够在视图层进行渲染。这是解决第一种的情况。
  b）第二种可以通过数组的splice方法去除。
18.对象方面：Vue不能检测对象属性的添加和删除。经检验可以实现添加和删除并且响应式的改变。
19.一个组件中如果有两个v-for时，绑定的key值需要具有唯一性。即在:key="'infoA'+index"，添加infoA作为一个唯一标识的标记。
20.计算属性修改原数组；在嵌套v-for循环中使用方法修改原数组。
21.template标签上使用v-for指令。