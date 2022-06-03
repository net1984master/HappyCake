<template>
  <q-page>
    <div class="q-pa-md">
      <cakes-table
        @add="addNewCake"
        @edit="editCake"
        @delete="deleteCake"
      />

      <modal-edit-dialog :show="isEditMode" @close="isEditMode=false">
        <h1>JJJJJJJ</h1>
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
    const isEditMode = ref(true);
    onMounted(() => {
      store.dispatch('qcakem/getAll');
    });
    function addNewCake(){
      console.log("Добавить новый пост");
    }
    function editCake(id) {
      console.log('Редактировать торт '+id)
      //store.commit('qcakem/setEditedItem',id);
      //openEditDialog();
    };
    function deleteCake(id) {
      console.log('Удалить торт '+id)
      //store.commit('qcakem/setEditedItem',id);
      //openEditDialog();
    };
    function openEditDialog() {
      //dialog.value = true;
    };
    return {
      addNewCake,
      editCake,
      deleteCake,
      isEditMode,
      openEditDialog,
    };

  }
}
</script>

<style scoped lang="scss">
.grid-style-transition {
  transition: transform .28s, background-color .28s
}
</style>
