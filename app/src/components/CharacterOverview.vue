<template>
  <div class="characterOverview">
    <div class="container-fluid">
      <div class="row">
          <!-- <div class="col-lg">
            <img src="../assets/dnd_dragon.jpg"/>
          </div> -->
          <div class="col-md-4">
            Character Name
            <input type="text" class="form-control" v-model="characterName" placeholder="Character Name"/>
          </div>
          <div class="col-md-3">
            Class
            <input type="text" class="form-control" v-model="dndClass" placeholder="Class"/>
          </div>
          <div class="col-md-1">
            Level
            <input type="number" class="form-control input-sm"  v-model="level" placeholder="1"/>
          </div>
          <div class="col-md-2"/>
          <div class="col-md-1">
            Inspiration
            <input type="number" class="form-control input-sm" v-model="inspiration" placeholder="1"/>
          </div>
      </div>
      <div class="row">
          <div class="col-md-3">
            Race
            <input type="text" class="form-control" v-model="race" placeholder="Race"/>
          </div>
          <div class="col-md-1">
            Alignment
            <input type="text" class="form-control" v-model="alignment" placeholder="Alignment"/>
          </div>
          <div class="col-md-3"/>
          <div class="col-md-1">
            Experience
            <input type="number" class="form-control" v-model="experience" placeholder="0"/>
          </div>
          <div class="col-md-2"/>
          <div class="col-md-1">
            Proficiency Bonus
            <input type="number" class="form-control input-sm" v-model="proficiencyBonus" placeholder="1"/>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>
<script>

    export default {
        name: 'CharacterOverview',
        data () {
            return {
              characterName: "",
              dndClass: "",
              level: 0,
              inspiration: 0,
              race: "",
              alignment: "",
              experience: 0,
              proficiencyBonus : 0
            }
        },
        methods: {
            getData() {
              var payload = {
                characterName: this.$data.characterName,
                dndClass: this.$data.dndClass,
                level: this.$data.level,
                inspiration: this.$data.inspiration,
                race: this.$data.race,
                alignment: this.$data.alignment,
                experience: this.$data.experience,
                proficiencyBonus : this.$data.proficiencyBonus
              }

              return payload;
            },
            loadData(data) {
                this.characterName = data.characterName;
                this.dndClass = data.dndClass;
                this.level = data.level;
                this.inspiration = data.inspiration;
                this.race = data.race;
                this.alignment = data.alignment;
                this.experience = data.experience;
                this.proficiencyBonus = data.proficiencyBonus;
            }
        }
    }
</script>

<style>
  .characterOverview {
    background-image: url('../assets/DnD_MM_Art.jpg');
    border-radius: 10px;
    border: 3px solid #784413;
  }
</style>
