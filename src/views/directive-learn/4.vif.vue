<template>
  <div>
    <div class="n1">
      <template v-if="Math.random() > 0.5">
        <h1>hello world</h1>
        <p>title</p>
        <p>content</p>
      </template>
      <template v-else>
        <h1>当Math.random() 的值小于或者等于0.5时</h1>
        <p>我才能被看见</p>
      </template>
    </div>
    <div class="n2">
      <h3>2.1.0新增的v-else-if</h3>
      <div v-if="type === 'A'">
        I am A
      </div>
      <div v-else-if="type === 'B'">
        I am B
      </div>
      <div v-else-if="type === 'C'">
        I am C
      </div>
      <div v-else>
        Not A B C
      </div>
    </div>
    <div class="n3">
      <template v-if="isUser">
        <label for="user">用户名：</label>
        <input
          type="text"
          id="user"
          placeholder="请输入用户名"
          key="user-input"
        />
      </template>
      <template v-else>
        <label for="password">密码：</label>
        <input
          type="password"
          id="password"
          placeholder="请输入密码"
          key="password-input"
        />
      </template>
      <button @click="toggleInput">toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeArr: ["a", "b", "c"],
      isUser: true
    };
  },
  computed: {
    type() {
      // Math.random()产生[0,1)区间的float类型的数值
      return this.typeArr[Math.floor(Math.random() * 3)].toUpperCase();
    }
  },
  mounted() {
    console.log(this.type);
  },
  methods: {
    toggleInput() {
      this.isUser = !this.isUser;
    }
  }
};
</script>
<style scoped>
button {
  display: block;
  margin: 0 auto;
  background-color: transparent;
  /* background-color: red; */
  border: 0;
  outline: none;
  width: 80px;
  height: 80px;
  border: 2px solid black;
  border-left: none;
  border-right: none;
  -webkit-transition: all 0.5s ease-out 0s;
  -moz-transition: all 0.5s ease-out 0s;
  transition: all 0.5s ease-out 0s;
}
button:active {
  background-color: red;
  opacity: 0.5;
}
button:hover {
  height: 100px;
}
</style>
