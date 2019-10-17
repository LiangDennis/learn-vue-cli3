

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
10.有一个lodash的插件，即可以实现节流和防抖的功能，https://lodash.com/docs#debounce。
11.可以在created的生命函数中定义一些参数，使用this进行定义，也可以指向一些methods中的方法。使用方式为：this.someData 会创建一个someData的值，可以在其他地方想data里面的数据进行使用；this.fun = this.method，使得fun指向method 方法。