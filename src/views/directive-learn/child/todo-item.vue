<template>
  <div>
    <li>
      {{ title }}
      <button @click="emitEvent">Remove</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      value: "default"
    }
  },
  methods: {
    emitEvent() {
      this.$emit("remove");
    }
  }
};
</script>
<style scoped></style>
