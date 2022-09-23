<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="message" :message="message" />
          <new-note :note="note" @addNote="addNote" />
     

          <div class="note-header">
            <div>
              <h1>{{ title }}</h1>
              <span v-if="!notes.length">No Data</span>
            </div>

            <div class="icons">
              <!-- <v-icon large color="green darken-2"> mdi-domain </v-icon> -->
            </div>
          </div>
          <notes :notes="notes" @remove="removeNote" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message.vue";
import NewNote from "./components/NewNote.vue";
import Notes from "./components/Notes.vue";
export default {
  components: {
    message,
    NewNote,
    Notes,
  },
  data() {
    return {
      title: "Note App",
      message: null,
      note: {
        title: "",
        descr: "",
      },
      notes: [
        {
          title: "First note",
          descr: "description for first note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Second note",
          descr: "description for second note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Third note",
          descr: "description for third note",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      let { title, descr } = this.note;
      if (title === "") {
        this.message = "title can`t be nlank! ";
        return false;
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
      });
      this.message = null;
      this.note.title = "";
      this.note.descr = "";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100vh;
  min-height: 100vh;
  margin: 0 auto;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.container {
  width: 100%;
  flex: 0 0 auto;
  position: relative;
  margin: 0 auto;
  padding: 0 rem(40);
}

.container-fluid {
  width: 100%;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
}
.center {
  text-align: center;
}
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
