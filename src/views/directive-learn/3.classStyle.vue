<template>
  <div>
    <!-- 此处绑定的对象是内联定义在模板里 -->
    <div
      class="obj"
      :class="{ red: isRed, blue: !isRed, font12: isFont12, font18: !isFont12 }"
    >
      hello world
    </div>
    <button @click="changeColor">改变颜色</button>
    <button @click="changeFont">改变大小</button>
    <!-- 对象整体使用的方式 -->
    <div class="obj" :class="classObj">
      你好啊
    </div>
    <!-- 计算属性中的对象使用方式 -->
    <div class="obj" :class="classComputed">
      今日看世界
    </div>
    <!-- 数组方式 -->
    <hr />
    <!-- 1.内联方式，2.三元运算符，3.对象语法:左边是class，右边是Boolean值 -->
    <!-- <div class="obj" :class="[red, font18]"> -->
    <!-- <div class="obj" :class="[isRed ? red : blue]"> -->
    <div class="obj" :class="[{ red: isRed }, font18]">
      绑定的class是一个内联数组
    </div>
    <div class="obj" :class="arrClass">绑定的class是一个数组</div>
    <button @click="addClass">添加class</button>
    <button @click="removeClass">删除class</button>
    <div class="obj">
      <my-hello class="blue"></my-hello>
    </div>
    <div
      class="obj"
      :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
    >
      <span class="item">
        <span>第二层</span>
        <span>第二层</span>
        <span>第二层</span>
      </span>
      <span class="item">hello</span>
      <span class="item">hello</span>
    </div>
  </div>
</template>

<script>
import He from "./child/hello";
export default {
  components: {
    "my-hello": He
  },
  data() {
    return {
      isFont12: true,
      isRed: true,
      classObj: {
        red: true,
        font18: true
      },
      // 数组方式
      red: "red",
      font18: "font18",
      blue: "blue",
      arrClass: []
    };
  },
  methods: {
    changeColor() {
      this.isRed = !this.isRed;
      this.classObj.red = !this.classObj.red;
    },
    changeFont() {
      this.isFont12 = !this.isFont12;
      this.classObj.font18 = !this.classObj.font18;
    },
    addClass() {
      if (this.arrClass.indexOf(this.red) === -1) {
        this.arrClass.push(this.red);
      } else if (this.arrClass.indexOf(this.font18) === -1) {
        this.arrClass.push(this.font18);
      } else {
        alert("Nothing to push into arrClass,please remove some.");
      }
    },
    removeClass() {
      if (this.arrClass.length) {
        this.arrClass.pop();
      } else {
        alert("Nothing to pop in the arrClass,please add some.");
      }
    }
  },
  computed: {
    classComputed() {
      return {
        red: this.classObj.red && !this.classObj.font18,
        blue: !this.isFont12
      };
    }
  }
};
</script>
<style scoped>
.obj {
  width: 100%;
  height: 100px;
  background-color: yellowgreen;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.font12 {
  font-size: 12px;
}
.font18 {
  font-size: 18px;
}
.obj .item {
  flex: 1;
}
.obj .item span {
  display: flex;
  flex-direction: column;
}
</style>
