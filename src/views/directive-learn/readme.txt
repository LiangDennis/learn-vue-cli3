

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