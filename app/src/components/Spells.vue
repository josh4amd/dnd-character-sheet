<template>
  <div class="spells">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          Spellcasting Class
          <input type="text" v-model="spellcastingClass" class="form-control" placeholder="Spellcasting Class">
        </div>
        <div class="col-md-2"/>
        <div class="col-md-1">
          Spell Casting Ability
          <input type="number" v-model="spellcastingAbility" class="form-control">
        </div>
        <div class="col-md-1">
          Spells Save DC
          <input type="number" v-model="spellSaveDC" class="form-control">
        </div>
        <div class="col-md-1">
          Spell Attack Bonus
          <input type="number" v-model="spellAttackBonus" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Cantrips
          <textarea type="text" v-model="cantrips" class="form-control"/>
        </div>
        <div class="col-md-4">
          Slot 1
          <textarea type="text" v-model="slot1" class="form-control"/>
        </div>
        <div class="col-md-4">
          Slot 2
          <textarea type="text" v-model="slot2" class="form-control"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Slot 3
          <textarea type="text" v-model="slot3" class="form-control"/>
        </div>
        <div class="col-md-4">
          Slot 4
          <textarea type="text" v-model="slot4" class="form-control"/>
        </div>
        <div class="col-md-4">
          Slot 5
          <textarea type="text" v-model="slot5" class="form-control"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Slot 6
          <textarea type="text" v-model="slot6" class="form-control"/>
        </div>
        <div class="col-md-4">
          Slot 7
          <textarea type="text" v-model="slot7" class="form-control"/>
        </div>
        <div class="col-md-4">
          Slot 8
          <textarea type="text" v-model="slot8" class="form-control"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Slot 9
          <textarea type="text" v-model="slot9" class="form-control"/>
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
          spellcastingClass: "",
          spellcastingAbility: 0,
          spellSaveDC: 0,
          spellAttackBonus: 0,
          cantrips: "",
          slot1: "",
          slot2: ""
        }
    },
    methods: {
        getData() {
          var payload = {
            spellcastingClass: this.$data.spellcastingClass,
            spellcastingAbility: this.$data.spellcastingAbility,
            spellSaveDC: this.$data.spellSaveDC,
            spellAttackBonus: this.$data.spellAttackBonus,
            cantrips: this.$data.cantrips,
            slot1: this.$data.slot1,
            slot2: this.$data.slot2,
            slot3: this.$data.slot3,
            slot4: this.$data.slot4,
            slot5: this.$data.slot5,
            slot6: this.$data.slot6,
            slot7: this.$data.slot7,
            slot8: this.$data.slot8,
            slot9: this.$data.slot9
          }

          return payload;
        },
        loadData(data) {
          this.spellcastingClass = data.spellcastingClass;
          this.spellcastingAbility = data.spellcastingAbility;
          this.spellSaveDC = data.spellSaveDC;
          this.spellAttackBonus = data.spellAttackBonus;
          this.cantrips = data.cantrips;
          this.slot1 = data.slot1;
          this.slot2 = data.slot2;
          this.slot3 = data.slot3;
          this.slot4 = data.slot4;
          this.slot5 = data.slot5;
          this.slot6 = data.slot6;
          this.slot7 = data.slot7;
          this.slot8 = data.slot8;
          this.slot9 = data.slot9;
        }
    }
}
</script>

<style>
  .spells {
    background-image: url('../assets/layne-lawson-101816-unsplash.jpg');
    border-radius: 10px;
    border: 3px solid #784413;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 2px;
  }
</style>
