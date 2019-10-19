<template>
  <div>
    <div v-for="(item, arrIndex) in list" :key="'infoA' + arrIndex">
      {{ item }}------{{ arrIndex }}
    </div>
    <div v-for="(objvalue, objname, objIndex) in obj" :key="objIndex">
      {{ objname }}----{{ objvalue }}
    </div>
    <div>{{ deepObj.profile.userInfo.name.firstName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      obj: {
        name: "Dennis",
        age: "25",
        job: "computer"
      },
      deepObj: {
        profile: {
          userInfo: {
            name: {
              firstName: "hello",
              lastName: "world"
            }
          }
        }
      }
    };
  },
  mounted() {
    this.change();
    this.changeObj();
    this.changeDeepObj();
  },
  methods: {
    change() {
      console.log("hello world");
      setTimeout(() => {
        this.$set(this.list, 2, 100);
        this.list[2] = 100;
        console.log(this.list);
      }, 2000);
    },
    changeObj() {
      setTimeout(() => {
        // 可以修改属性值，可以添加属性
        this.obj.name = "展玮";
        this.obj.hobby = "读书，慢跑";
      }, 3000);
    },
    changeDeepObj() {
      setTimeout(() => {
        Object.assign(this.obj, { birthDay: "1994-12-06" });
        delete this.obj.name;
        this.deepObj.profile.userInfo.name.firstName = "你好";
      }, 5000);
    }
  }
};
</script>
<style scoped></style>
