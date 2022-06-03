<template>
  <q-page>
    <div class="q-pa-md">
      <cakes-table/>

      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card>
          <q-bar>
            <q-space/>

            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
              <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Свернуть</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
              <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Развернуть</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <cake-item/>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import CakeItem from "components/CakeItem";
import CakesTable from "components/CakesTable";

export default {
  name: 'CakesListPage',
  components: {CakesTable, CakeItem},
  setup() {
    const store = useStore();
    const dialog = ref(false);
    onMounted(() => {
      store.dispatch('qcakem/getAll');
    });
    function editItem(id) {
      //store.commit('qcakem/setEditedItem',id);
      //openEditDialog();
    };
    function deleteItem(id) {
      //store.commit('qcakem/setEditedItem',id);
      //openEditDialog();
    };
    function openEditDialog() {
      //dialog.value = true;
    };
    return {
      dialog,
      maximizedToggle: ref(true),
      openEditDialog,
      editItem,
    };

  }
}
</script>

<style scoped lang="scss">
.grid-style-transition {
  transition: transform .28s, background-color .28s
}
</style>
