<template>
  <!-- note list -->
  <div class="notes">
    <div class="note" v-for="(note, index) in notes" :key="index">
      <div class="note-heder">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeNote(index) {
      console.log(index);
      this.$emit('remove', index)
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 16px 20px;
  margin-bottom: 20px;
  background-color: rgb(189, 199, 199);
}
.note-heder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1{
    font-size: 22;
  }
  p {
    color: rgb(15, 67, 180);
    font-size: 22px;
  }
  svg{
    margin-right:12px ;
    color: #999;
    &:last-child {
        margin-right: 0;
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: rgb(42, 100, 100);
  }
}
</style>
