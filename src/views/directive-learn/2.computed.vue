<template>
  <div>
    {{ message }}
    <br />
    {{ other }}
    <br />
    {{ names }}
    <div class="watch-example">
      <p>
        Ask a yes/no question：
        <input type="text" v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      message: "hello world",
      number: 123456,
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  created() {
    console.log(this);
    this.someData = "你好啊";
    this.debounceGetAnswer = _.debounce(this.getAnswer, 500);
  },
  mounted() {
    console.log(this.someData);
    this.names = "天空";
    console.log(this.names);
  },
  computed: {
    names: {
      // 必须使用function的方式，使用箭头函数无法获取到this的值
      get: function() {
        return this.message
          .split("")
          .reverse()
          .join("");
      },
      // 设置setter 的不需要返回值，而是改变值。
      set: function(newVal) {
        this.message = "newVal：" + newVal;
      }
    },
    other: function() {
      console.log(this);
      return this.number
        .toString()
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    question() {
      this.answer = "Waiting for you to stop typing...";
      this.debounceGetAnswer();
    }
  },
  methods: {
    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark.";
        return;
      }
      this.answer = "Thinking...";
      // https://yesno.wtf/api只是返回一个YES或者NO的随机值
      axios
        .get("https://yesno.wtf/api")
        .then(res => {
          this.answer = _.capitalize(res.data.answer);
        })
        .catch(err => {
          this.answer = "Error! Could not reach the API." + err;
        });
    }
  }
};
</script>
<style scoped></style>
