<template>
  <div>
    <!-- Modal Component -->
    <b-modal ref="notesModal" id="notesModal" hide-footer title="Adventure Notes">
      <textarea type="text" v-model="notes" class="form-control" style="height: 350px"/>
      <b-btn @click="hideModal">Close</b-btn>
    </b-modal>
    <!-- <p>{{value}}</p> -->
  </div>
</template>

<script>

export default {
    name: 'Notes',
    data () {
        return {
          notes: ""
        }
    },
    mounted() {
    },
    methods: {
        showModal () {
          // this.value = "opened modal"
          this.$refs.notesModal.show()
        },
        hideModal () {
          // this.value = "closed modal"
          this.$refs.notesModal.hide()
        },
        getData() {
          var payload = {
            notes: this.$data.notes
          }

          return payload;
        },
        loadData(data) {
          this.notes = data.notes;
        }
    }
}
</script>

<style>
  .modal-header {
    background: linear-gradient(to right, black, #663300);
    border: 2px solid #784413;
  }

  .modal-body {
    background: linear-gradient(to right, black, #663300);
    border: 2px solid #784413;
  }
</style>
