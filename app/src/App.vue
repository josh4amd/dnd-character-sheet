<template>
  <div id="app">
    <div class="container-fluid" style="background: linear-gradient(to right, black, #990000); border-radius: 5px; padding: 5px;">
      <div class="row">
        <div class="col-md-12">
          <h2>5e Character Sheet</h2>
        </div>
      </div>
    </div>

    <b-dropdown id="ddown1" right text="Menu" class="m-md-2" style="position: absolute; right:0; top: 0; opacity: 0.9; z-index: 2; padding: 2px;">
      <b-dropdown-item><b-button v-on:click='save' class="form-control">Save</b-button></b-dropdown-item>
      <b-dropdown-item><b-button v-on:click='load' class="form-control">Load</b-button></b-dropdown-item>
      <b-dropdown-item><b-button v-on:click='showNotes' class="form-control">Notes</b-button></b-dropdown-item>
    </b-dropdown>

    <NotesModal ref="notesModal"/>

    <b-tabs style="margin-top: 20px; padding-left: 5px; padding-right: 5px;">
      <b-tab title="Overview" active>
        <CharacterOverview ref="characterOverview"/>
      </b-tab>
      <b-tab title="Traits" >
        <Traits ref="traits"/>
      </b-tab>
      <b-tab title="Proficiencies" >
        <Proficiencies v-bind:proficiencyBonus="proficiencyBonus" ref="proficiencies"/>
      </b-tab>
      <b-tab title="Others" >
        <Others ref="others"/>
      </b-tab>
      <b-tab title="Spells" >
        <Spells ref="spells"/>
      </b-tab>
    </b-tabs>
    <p>Wizards of the Coast, Dungeons and Dragons, DnD, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. © 2018 Wizards. All Rights Reserved. This project is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.</p>
  </div>
</template>

<script>
import CharacterOverview from './components/CharacterOverview.vue'
import Traits from './components/Traits.vue'
import Proficiencies from './components/Proficiencies.vue'
import Others from './components/Others.vue'
import Spells from './components/Spells.vue'
import NotesModal from './components/NotesModal.vue'

const dialog = require('electron').remote.dialog
const fs = require('fs')
var win = require('electron').remote.getCurrentWindow()

var characterOverview = null;
var traits = null;
var proficiencies = null;
var others = null;
var spells = null;
var notesModal = null;

export default {
  name: 'App',
  components: {
    CharacterOverview,
    Traits,
    Proficiencies,
    Others,
    Spells,
    NotesModal
  },
  data() {
    return {
      proficiencyBonus: 0
    }
  },
  mounted() {
    characterOverview = this.$refs.characterOverview;
    traits = this.$refs.traits;
    proficiencies = this.$refs.proficiencies;
    others = this.$refs.others;
    spells = this.$refs.spells;
    notesModal = this.$refs.notesModal;

    this.proficiencyBonus = this.$refs.characterOverview.proficiencyBonus;
  },
  methods: {
    save() {
      dialog.showSaveDialog(win, {
          title: 'Save Dnd Character Sheet',
          filters: [{ name: 'Json', extensions: ['json'] }]
        }, function(result){
          let saveData = [];

          saveData.push(characterOverview.getData());
          saveData.push(traits.getData());
          saveData.push(proficiencies.getData());
          saveData.push(others.getData());
          saveData.push(spells.getData());
          saveData.push(notesModal.getData());

          fs.writeFile(result, JSON.stringify(saveData), function(err) {
            if(err) {
              dialog.showMessageBox({
                type: 'error',
                message: err,
                buttons: ['OK']
              });
              return;
            }

            dialog.showMessageBox({
              type: 'info',
              message: 'File Saved',
              buttons: ['OK']
            });
          });

      });
    },
    load() {
      dialog.showOpenDialog(win, {
          title: 'Save Dnd Character Sheet',
          filters: [{ name: 'Json', extensions: ['json'] }]
        }, this.loadData );
    },
    showNotes() {
      notesModal.showModal();
    },
    loadData(file) {
      let content = String(fs.readFileSync(file[0]));
      let loadedCharacter = JSON.parse(content);

      characterOverview.loadData(loadedCharacter[0]);
      traits.loadData(loadedCharacter[1]);
      proficiencies.loadData(loadedCharacter[2]);
      others.loadData(loadedCharacter[3]);
      spells.loadData(loadedCharacter[4]);
      notesModal.loadData(loadedCharacter[5]);

      this.proficiencyBonus = parseInt(characterOverview.proficiencyBonus);

      dialog.showMessageBox({
        type: 'info',
        message: 'Loaded',
        buttons: ['OK']
      });
    }
  }
}
</script>
<style>
  @import'../../node_modules/bootstrap/dist/css/bootstrap.css';

  .nav-tabs {
    border-bottom: 0px;
  }

  .nav-tabs .nav-link.active {
    color: #e60000;
    background-color: #030002;
  }

  .nav-tabs .nav-link {
    border-top: 1px solid #784413;
    border-right: 2px solid #784413;
  }

  .nav-link {
    color: white;
  }

  body {
    background-color: #030002;
    color: white;
  }
</style>
