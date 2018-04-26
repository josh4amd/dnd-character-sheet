<template>
  <div class="proficiencies">
    <div class="container-fluid">
      <div class="row">
            <div class="col-lg-1">
              <span style="white-space: nowrap">Strength <b>{{strengthModifier}}</b></span>
              <input type="number" v-model="strength" class="form-control" placeholder="0">

              <span style="white-space: nowrap">Dexterity <b>{{dexterityModifier}}</b></span>
              <input type="number" v-model="dexterity" class="form-control" placeholder="0">

              <span style="white-space: nowrap">Constitution <b>{{constitutionModifier}}</b></span>
              <input type="number" v-model="constitution" class="form-control" placeholder="0">

              <span style="white-space: nowrap">Intelligence <b>{{intelligenceModifier}}</b></span>
              <input type="number" v-model="intelligence" class="form-control" placeholder="0">

              <span style="white-space: nowrap">Wisdom <b>{{wisdomModifier}}</b></span>
              <input type="number" v-model="wisdom" class="form-control" placeholder="0">

              <span style="white-space: nowrap">Charisma <b>{{charismaModifier}}</b></span>
              <input type="number" v-model="charisma" class="form-control" placeholder="0">
            </div>
        <div class="col-md-1"/>
        <div class="col-md-2">
          <u>Saving Throws</u> <br />
          <label>Strength<input type="checkbox" v-model="strengthProf"/></label><br />
          <label>Dexterity<input type="checkbox" v-model="dexterityProf"></input></label><br />
          <label>Constitution<input type="checkbox" v-model="constitutionProf"></input></label><br />
          <label>Intelligence<input type="checkbox" v-model="intelligenceProf"></input></label><br />
          <label>Wisdom<input type="checkbox" v-model="wisdomProf"></input></label><br />
          <label>Charisma<input type="checkbox" v-model="charismaProf"></input></label><br />
          <br />
          Passive Wisdom (Perception)
          <input type="number" class="form-control" v-model="passiveWisdom" placeholder="0"><br />
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label>Acrobatics(Dex) {{dexterityModifier + getBonus(this.acrobaticsProf)}}<input type="checkbox" v-model="acrobaticsProf"/></label><br />
            <label>Animal Handling(Wis) {{wisdomModifier + getBonus(this.animalHandlingProf)}}<input type="checkbox" v-model="animalHandlingProf"></input></label><br />
            <label>Arcana(Int) {{intelligenceModifier + getBonus(this.arcanaProf)}}<input type="checkbox" v-model="arcanaProf"></input></label><br />
            <label>Athletics(Str) {{strengthModifier + getBonus(this.athleticsProf)}}<input type="checkbox" v-model="athleticsProf"></input></label><br />
            <label>Deception(Cha) {{charismaModifier + getBonus(this.deceptionProf)}}<input type="checkbox" v-model="deceptionProf"></input></label><br />
            <label>History(Int) {{intelligenceModifier + getBonus(this.historyProf)}}<input type="checkbox" v-model="historyProf"></input></label><br />
            <label>Insight(Wis) {{wisdomModifier + getBonus(this.insightProf)}}<input type="checkbox" v-model="insightProf"></input></label><br />
            <label>Intimidation(Cha) {{charismaModifier + getBonus(this.intimidationProf)}}<input type="checkbox" v-model="intimidationProf"></input></label><br />
            <label>Investigation(Int) {{intelligenceModifier + getBonus(this.investigationProf)}}<input type="checkbox" v-model="investigationProf"></input></label><br />
          </div>
        </div>
        <div class="col-md-2">
          <label>Medicine(Wis) {{wisdomModifier + getBonus(this.medicineProf)}}<input type="checkbox" v-model="medicineProf"></input></label><br />
          <label>Nature(Int) {{intelligenceModifier + getBonus(this.natureProf)}}<input type="checkbox" v-model="natureProf"></input></label><br />
          <label>Perception(Wis) {{wisdomModifier + getBonus(this.perceptionProf)}}<input type="checkbox" v-model="perceptionProf"></input></label><br />
          <label>Performance(Cha) {{charismaModifier + getBonus(this.performanceProf)}}<input type="checkbox" v-model="performanceProf"></label><br />
          <label>Persuasion(Cha) {{charismaModifier + getBonus(this.persuasionProf)}}<input type="checkbox" v-model="persuasionProf"></input></label><br />
          <label>Religion(Int) {{intelligenceModifier + getBonus(this.religionProf)}}<input type="checkbox" v-model="religionProf"></input></label><br />
          <label>Sleigh of Hand(Dex) {{strengthModifier + getBonus(this.slightOfHandProf)}}<input type="checkbox" v-model="slightOfHandProf"></input></label><br />
          <label>Stealth(Dex) {{strengthModifier + getBonus(this.stealthProf)}}<input type="checkbox" v-model="stealthProf"></input></label><br />
          <label>Survival(Wis) {{wisdomModifier + getBonus(this.survivalProf)}}<input type="checkbox" v-model="survivalProf"></input></label>
        </div>
        <div class="col-md-1">
          Armor Class
          <input type="number" v-model="armorClass" class="form-control" placeholder="0">
          Initiative
          <input type="number" v-model="initiative" class="form-control" placeholder="0">
          Speed
          <input type="number" v-model="speed" class="form-control" placeholder="0">
        </div>
        <div class="col-md-2" style="text-align:center;">
          <label>Successes
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
          </label>
          <br />
          <label>Failures
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
          </label>
          <br />
          Death Saves
        </div>
        <div class="col-md-1">
          Current Hit Points
          <input type="number" v-model="currentHitPoints" class="form-control" placeholder="0">
          Temp Hit Points
          <input type="number" v-model="tempHitPoints" class="form-control" placeholder="0">
          Hit Dice
          <input type="text" v-model="hitDice" class="form-control" placeholder="0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Proficiencies',
  data () {
      return {
        strength:0,
        dexterity:0,
        constitution:0,
        intelligence:0,
        wisdom:0,
        charisma:0,

        passiveWisdom:0,

        strengthProf:false,
        dexterityProf:false,
        constitutionProf:false,
        intelligenceProf:false,
        wisdomProf:false,
        charismaProf:false,
        acrobaticsProf:false,
        animalHandlingProf:false,
        arcanaProf:false,
        athleticsProf:false,
        deceptionProf:false,
        historyProf:false,
        insightProf:false,
        intimidationProf:false,
        investigationProf:false,
        medicineProf:false,
        natureProf:false,
        perceptionProf:false,
        performanceProf:false,
        persuasionProf:false,
        religionProf:false,
        slightOfHandProf:false,
        stealthProf:false,
        survivalProf:false,

        armorClass:0,
        initiative:0,
        speed:0,
        currentHitPoints:0,
        tempHitPoints:0,

        hitDice:"",
      }
  },
  props: ['proficiencyBonus'],
  methods: {
      getData() {
        var payload = {
          strength: this.$data.strength,
          dexterity: this.$data.dexterity,
          constitution: this.$data.constitution,
          intelligence: this.$data.intelligence,
          wisdom: this.$data.wisdom,
          charisma: this.$data.charisma,

          passiveWisdom: this.$data.passiveWisdom,

          strengthProf: this.$data.strengthProf,
          dexterityProf: this.$data.dexterityProf,
          constitutionProf: this.$data.constitutionProf,
          intelligenceProf: this.$data.intelligenceProf,
          wisdomProf: this.$data.wisdomProf,
          charismaProf: this.$data.charismaProf,
          acrobaticsProf: this.$data.acrobaticsProf,
          animalHandlingProf: this.$data.animalHandlingProf,
          arcanaProf: this.$data.arcanaProf,
          athleticsProf: this.$data.athleticsProf,
          deceptionProf: this.$data.deceptionProf,
          historyProf: this.$data.historyProf,
          insightProf: this.$data.insightProf,
          intimidationProf: this.$data.intimidationProf,
          investigationProf: this.$data.investigationProf,
          medicineProf: this.$data.medicineProf,
          natureProf: this.$data.natureProf,
          perceptionProf: this.$data.perceptionProf,
          performanceProf: this.$data.performanceProf,
          persuasionProf: this.$data.persuasionProf,
          religionProf: this.$data.religionProf,
          slightOfHandProf: this.$data.slightOfHandProf,
          stealthProf: this.$data.stealthProf,
          survivalProf: this.$data.survivalProf,

          armorClass: this.$data.armorClass,
          initiative: this.$data.initiative,
          speed: this.$data.speed,
          currentHitPoints: this.$data.currentHitPoints,
          tempHitPoints: this.$data.tempHitPoints,

          hitDice: this.$data.hitDice
        }

        return payload;
      },
      getBonus(val) {
        if(!val) {
          return 0;
        } else {
          return this.proficiencyBonus;
        }
      },
      loadData(data) {
        this.strength = data.strength;
        this.dexterity = data.dexterity;
        this.constitution = data.constitution;
        this.intelligence = data.intelligence;
        this.wisdom = data.wisdom;
        this.charisma = data.charisma;

        this.passiveWisdom = data.passiveWisdom;

        this.strengthProf = data.strengthProf;
        this.dexterityProf = data.dexterityProf;
        this.constitutionProf = data.constitutionProf;
        this.intelligenceProf = data.intelligenceProf;
        this.wisdomProf = data.wisdomProf;
        this.charismaProf = data.charismaProf;
        this.acrobaticsProf = data.acrobaticsProf;
        this.animalHandlingProf = data.animalHandlingProf;
        this.arcanaProf = data.arcanaProf;
        this.athleticsProf = data.athleticsProf;
        this.deceptionProf = data.deceptionProf;
        this.historyProf = data.historyProf;
        this.insightProf = data.insightProf;
        this.intimidationProf = data.intimidationProf;
        this.investigationProf = data.investigationProf;
        this.medicineProf = data.medicineProf;
        this.natureProf = data.natureProf;
        this.perceptionProf = data.perceptionProf;
        this.performanceProf = data.performanceProf;
        this.persuasionProf = data.persuasionProf;
        this.religionProf = data.religionProf;
        this.slightOfHandProf = data.slightOfHandProf;
        this.stealthProf = data.stealthProf;
        this.survivalProf = data.survivalProf;

        this.armorClass = data.armorClass;
        this.initiative = data.initiative;
        this.speed = data.speed;
        this.currentHitPoints = data.currentHitPoints;
        this.tempHitPoints = data.tempHitPoints;
      },
      getModifier: function(skill) {
        return Math.floor((skill - 10) / 2)
      }
  },
  computed: {
    strengthModifier:  function() {
      return this.getModifier(this.strength);
    },
    dexterityModifier:  function() {
      return this.getModifier(this.dexterity);
    },
    constitutionModifier:  function() {
      return this.getModifier(this.constitution);
    },
    intelligenceModifier:  function() {
      return this.getModifier(this.intelligence);
    },
    wisdomModifier:  function() {
      return this.getModifier(this.wisdom);
    },
    charismaModifier:  function() {
      return this.getModifier(this.charisma);
    }
  }
}
</script>

<style>
  .proficiencies {
    background-image: url('../assets/johannes-plenio-317653-unsplash.jpg');
    //background: linear-gradient(to right, black, #663300);
    border-radius: 10px;
    border: 3px solid #784413;
    padding-top: 10px;
    margin-top: 2px;
  }
</style>
