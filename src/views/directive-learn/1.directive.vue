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

    <div class="vmodel">
      <span>{{ value_1 }}</span>
      <input type="text" v-model="value_1" />
      <input type="number" v-model.lazy="value_1" />
      <input type="tel" v-model.number="value_1" />
      <hr />
      <input id="linkFor" type="checkbox" v-model="isOrNo" />
      <label for="linkFor">{{ isOrNo }}</label>
      <fieldset>
        <legend style="text-align:left">多选框</legend>
        <span>{{ names }}</span>
        <input type="checkbox" v-model="names" value="zizi" id="value_1" />
        <label for="value_1">孜孜</label>
        <input type="checkbox" v-model="names" value="zaza" id="value_2" />
        <label for="value_2">咋咋</label>
        <input type="checkbox" v-model="names" value="lolo" id="value_3" />
        <label for="value_3">咯咯</label>
      </fieldset>
      <fieldset>
        <legend>单选框</legend>
        <span>{{ generator }}</span>
        <input id="girl" type="radio" value="1" v-model="generator" />
        <label for="girl">女</label>
        <input id="boy" type="radio" value="0" v-model="generator" />
        <label for="boy">男</label>
      </fieldset>
      <fieldset>
        <legend>v-model默认绑定input事件</legend>
        <input
          type="text"
          v-model="value"
          @keyup.enter="noChange('hello是不能修改的')"
        />
      </fieldset>
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
      setIntervalData: [],
      value_1: "",
      isOrNo: true,
      names: [],
      generator: "",
      value: ""
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
    },
    noChange(val = "hello") {
      this.value = val;
    }
  }
};
</script>
<style scoped>
input {
  display: block;
  margin: 0 auto;
}
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
