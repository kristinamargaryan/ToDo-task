<template>
  <!-- new note -->
  <div class="new-note">
    <label> Title</label>
    <div class="icons">
    
    </div>
    <input v-model="note.title" type="text" />
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 1em 7em;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 30px;
}
.btnPrimary {
  color: #ffffff;
  border: 1px solid black;
  background-color: black;
}
.new-note {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    border: 1px solid black;
    height: 50px;
    width: 100%;
  }
  textarea {
    border: 1px solid black;
    height: 100px;
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
