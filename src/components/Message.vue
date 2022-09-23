<template>
  <div class="message">
    <p>Message component -- {{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

};
</script>

<style scoped>
.message {
  text-align: center;
  padding: 15px;
}
p {
  color: red;
}
</style>
