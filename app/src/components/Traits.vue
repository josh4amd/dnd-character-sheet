<template>
  <div class="traits">
    <div class="container-fluid">
      <div class="row">
          <div class="col-md-3">
            Personality Traits
            <textarea type="text" class="form-control" v-model="personalityTraits" placeholder="Personality Traits"/>
          </div>
          <div class="col-md-3">
            Ideals
            <textarea type="text" class="form-control" v-model="ideals" placeholder="Ideals"/>
          </div>
          <div class="col-md-3">
            Bonds
            <textarea type="text" class="form-control" v-model="bonds" placeholder="Bonds"/>
          </div>
          <div class="col-md-3">
            Flaws
            <textarea type="text" class="form-control" v-model="flaws" placeholder="Flaws"/>
          </div>
      </div>
      <div class="row" style="text-align: center">
        <div class="col-md-12">
          <hr style="border: 3px solid white">
          Features and Traits
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <textarea type="text" class="form-control" v-model="slot1" placeholder="Slot1"/>
        </div>
        <div class="col-md-3">
          <textarea type="text" class="form-control" v-model="slot2" placeholder="Slot2"/>
        </div>
        <div class="col-md-3">
          <textarea type="text" class="form-control" v-model="slot3" placeholder="Slot3"/>
        </div>
        <div class="col-md-3">
          <textarea type="text" class="form-control" v-model="slot4" placeholder="Slot4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Traits',
    data () {
        return {
          personalityTraits: "",
          ideals: "",
          bonds: "",
          flaws: "",
          slot1: "",
          slot2: "",
          slot3: "",
          slot4: ""
        }
    },
    methods: {
        getData() {
          var payload = {
            personalityTraits: this.$data.personalityTraits,
            ideals: this.$data.ideals,
            bonds: this.$data.bonds,
            flaws: this.$data.flaws,
            slot1: this.$data.slot1,
            slot2: this.$data.slot2,
            slot3: this.$data.slot3,
            slot4 : this.$data.slot4
          }

          return payload;
        },
        loadData(data) {
          this.personalityTraits = data.personalityTraits;
          this.ideals = data.ideals;
          this.bonds = data.bonds;
          this.flaws = data.flaws;
          this.slot1 = data.slot1;
          this.slot2 = data.slot2;
          this.slot3 = data.slot3;
          this.slot4 = data.slot4;
        }
    }
}
</script>

<style>
  .traits {
    background-image: url('../assets/DnD_MM_Art.jpg');
    border-radius: 10px;
    border: 3px solid #784413;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 2px;
  }
</style>
