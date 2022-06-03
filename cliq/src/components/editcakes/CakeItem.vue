<template>
  <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        :model-value="name"
        @update:model-value="modifyField($event,'name')"
        label="Название"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Должно быть обязательно']"
      />

      <q-input
        :model-value="description"
        @update:model-value="modifyField($event,'description')"
        filled
        type="textarea"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import {useStore} from "vuex";
import { useQuasar } from 'quasar'
import {computed, onMounted, onUnmounted, ref} from 'vue'

export default {
  name: "CakeItem",
  setup () {
    const $q = useQuasar();
    const store = useStore();
    const id = computed(()=>store.state.qcakem.editedItem.id);
    const name = computed(()=>store.state.qcakem.editedItem.name);
    const description = computed(()=>store.state.qcakem.editedItem.description);
    function modifyField(value,name){
      store.commit('qcakem/modifyEditedItem',{value,name});
    };
    function onSubmit () {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      });
      store.dispatch('qcakem/saveEditedItem');
    }
    onUnmounted(()=>{
      store.commit('qcakem/cleanEditedItem')
    })
    return {
      id,
      name,
      description,
      modifyField,
      onSubmit,
      onReset () {
        name.value = null
        description.value = null
      }
    }
  }
}
</script>

<style scoped>

</style>
