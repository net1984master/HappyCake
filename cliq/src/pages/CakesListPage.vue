<template>
  <q-page>
    <div class="q-pa-md">
      <cakes-table
        @add="startAddNewCake"
        @edit="startEditCake"
        @delete="deleteCake"
      />

      <modal-edit-dialog :show="isEditMode" @close="isEditMode=false"  :tytle="operationText">
        <cake-item/>
      </modal-edit-dialog>
    </div>
  </q-page>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import CakeItem from "components/editcakes/CakeItem";
import CakesTable from "components/editcakes/CakesTable";
import ModalEditDialog from "components/editcakes/ModalEditDialog";

export default {
  name: 'CakesListPage',
  components: {ModalEditDialog, CakesTable, CakeItem},
  setup() {
    const store = useStore();
    const isEditMode = ref(false);
    const operationText = ref('');
    onMounted(() => {
      store.dispatch('qcakem/getAll');
    });
    function startAddNewCake(){
      store.commit('qcakem/cleanEditedItem');
      operationText.value ='Добавить торт';
      isEditMode.value = true;
    }
    function startEditCake(id) {
      store.commit('qcakem/setEditedItem', id);
      operationText.value ='Редактировать торт';
      isEditMode.value = true;
    };
    function deleteCake(id) {
      console.log('Удалить торт '+id)
      //store.commit('qcakem/setEditedItem',id);
      //openEditDialog();
    };
    return {
      startAddNewCake,
      startEditCake,
      deleteCake,
      isEditMode,
      operationText,
    };

  }
}
</script>

<style scoped lang="scss">
.grid-style-transition {
  transition: transform .28s, background-color .28s
}
</style>
