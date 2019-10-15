<template>
  <div>
    {{ message }}
    <hr />
    <div class="vif">
      <div v-if="isShow" :class="{ red: showClass }">
        我是vif的文本信息
      </div>
      <div v-else :class="{ blue: showClass }">
        我是velse的文本信息
      </div>
      <div v-show="isShow" :class="{ green: showClass }">
        我是vshow的文本信息
      </div>
      <hr />
      <div>
        以上是通过isShow来改变的，以下的button是改变isShow的<br />
        <button @click="isShow = !isShow">改变</button> |
        <button @click="showClass = !showClass">改变颜色</button>
      </div>
    </div>

    <div class="vfor">
      <div>
        <h3>遍历数组</h3>
        <section v-for="(item, index) in arrList" :key="index">
          索引：{{ index }}---内容：{{ item }}
        </section>
      </div>
      <div>
        <h3>遍历对象</h3>
        <section v-for="(obj_value, obj_key, index) in obj" :key="index">
          索引：{{ index }}---对象key值：{{ obj_key }}---对象value值：{{
            obj_value
          }}
        </section>
      </div>
    </div>

    <div class="vtext">
      <h3>v-text和v-html</h3>
      <section v-text="message"></section>
      <span
        style="display:block;width:100%;height:100px;"
        v-html="vhtmlMessage"
      ></span>
      <p v-html="vhtmlMessage_1"></p>
      <span>{{ message }}</span
      ><span>{{ vhtmlMessage_2 }}</span>
    </div>

    <div class="von">
      <button @click="handleAdd">添加数据</button>
      <div v-for="(item, index) in setIntervalData" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello world",
      vhtmlMessage_2: this.message,
      vhtmlMessage_1: "<h1>" + this.message + "</h1>",
      isShow: true,
      showClass: false,
      arrList: ["张三", "李四", "王五", "Dennis", "David"],
      obj: {
        name: "zizi",
        age: "18",
        what: "he is a dog",
        from: "China",
        owner: "Dennis"
      },
      setIntervalData: []
    };
  },
  computed: {
    vhtmlMessage() {
      return "<h1>" + this.message + "</h1>";
    }
  },
  methods: {
    handleAdd() {
      let index = 0;
      let timer = null;
      timer = setInterval(() => {
        console.log(index);
        this.setIntervalData.push(this.arrList[index++]);
        if (index > this.arrList.length - 1) {
          console.log("清除timer");
          clearInterval(timer);
        }
      }, 1000);
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
</style>
