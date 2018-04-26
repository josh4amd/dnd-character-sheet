<template>
  <div class="others">
    <div class="container-fluid">
      <div class="row">
          <div class="col-md-4">
            Other Proficiencies and Languages
            <textarea type="text" v-model="otherProficienciesAndLanguages" class="form-control others-text-box" placeholder="Other Proficiencies"/>
          </div>
          <div class="col-md-4">
            <div class="mobile">
              <div class="row">
                Name/AttackBonus/Damage
                <div class="col-md-4">
                  <input type="text" v-model="name1" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="attackBonus1" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="damageAndType1" class="form-control"/>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-4">
                  <input type="text" v-model="name2" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="attackBonus2" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="damageAndType2" class="form-control"/>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-4">
                  <input type="text" v-model="name3" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="attackBonus3" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="damageAndType3" class="form-control"/>
                </div>
              </div>
              <br />
            </div>
            <div class="non-mobile">
              <div class="row">
                <div class="col-md-4">
                  Name
                </div>
                <div class="col-md-4">
                  Attack Bonus
                </div>
                <div class="col-md-4">
                  Damage / Type
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <input type="text" v-model="name1" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="name2" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="name3" class="form-control"/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <input type="text" v-model="attackBonus1" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="attackBonus2" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="attackBonus3" class="form-control"/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <input type="text" v-model="damageAndType1" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="damageAndType2" class="form-control"/>
                </div>
                <div class="col-md-4">
                  <input type="text" v-model="damageAndType3" class="form-control"/>
                </div>
              </div>
            </div>
              Attacks and Spellcasting
              <textarea type="text" class="form-control others-text-box" v-model="attacksAndSpellcasting" placeholder="Attacks and Spellcasting"/>
          </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              GP<input type="number" v-model="GP" class="form-control"/>
              SP<input type="number" v-model="SP" class="form-control"/>
              CP<input type="number" v-model="CP" class="form-control"/>
              EP<input type="number" v-model="EP" class="form-control"/>
              PP<input type="number" v-model="PP" class="form-control"/>
            </div>
            <div class="col-md-8">
              <br />
              Equipment
              <textarea style="height:100%" type="text" v-model="equipment" class="form-control others-text-box" placeholder="Equipment"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Others',
    data () {
        return {
          otherProficienciesAndLanguages: "",
          name1: "",
          name2: "",
          name3: "",
          attackBonus1: 0,
          attackBonus2: 0,
          attackBonus3: 0,
          damageAndType1: "",
          damageAndType2: "",
          damageAndType3: "",
          attacksAndSpellcasting: "",
          GP: 0,
          SP: 0,
          CP: 0,
          EP: 0,
          PP: 0,
          equipment: ""
        }
    },
    methods: {
        getData() {
          var payload = {
            otherProficienciesAndLanguages: this.$data.otherProficienciesAndLanguages,
            name1: this.$data.name1,
            name2: this.$data.name2,
            name3: this.$data.name3,
            attackBonus1: this.$data.attackBonus1,
            attackBonus2: this.$data.attackBonus2,
            attackBonus3: this.$data.attackBonus3,
            damageAndType1: this.$data.damageAndType1,
            damageAndType2: this.$data.damageAndType2,
            damageAndType3: this.$data.damageAndType3,
            attacksAndSpellcasting: this.$data.attacksAndSpellcasting,
            GP: this.$data.GP,
            SP: this.$data.SP,
            CP: this.$data.CP,
            EP: this.$data.EP,
            PP: this.$data.PP,
            equipment: this.$data.equipment
          }

          return payload;
        },
        loadData(data) {
            this.otherProficienciesAndLanguages = data.otherProficienciesAndLanguages;
            this.name1 = data.name1;
            this.name2 = data.name2;
            this.name3 = data.name3;
            this.attackBonus1 = data.attackBonus1;
            this.attackBonus2 = data.attackBonus2;
            this.attackBonus3 = data.attackBonus3;
            this.damageAndType1 = data.damageAndType1;
            this.damageAndType2 = data.damageAndType2;
            this.damageAndType3 = data.damageAndType3;
            this.attacksAndSpellcasting = data.attacksAndSpellcasting;
            this.GP = data.GP;
            this.SP = data.SP;
            this.CP = data.CP;
            this.EP = data.EP;
            this.PP = data.PP;
            this.equipment = data.equipment;
        }
    }
}
</script>

<style>
  .others {
    background-image: url('../assets/johannes-plenio-317653-unsplash.jpg');
    border-radius: 10px;
    border: 3px solid #784413;
    padding-top: 10px;
    margin-top: 2px;
  }

  .others-text-box {
    height: 250px;
  }

  @media (max-width: 767px) {
    div.mobile {
      display: initial;
    }
    div.non-mobile {
      display: none;
    }
  }

  @media (min-width: 768px) {
    div.mobile {
      display: none;
    }
    div.non-mobile {
      display: initial;
    }
  }
</style>
