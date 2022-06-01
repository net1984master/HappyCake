<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="Торты"
        :rows="cakes"
        :columns="columns"
        row-key="name"
        flat
        bordered
      />
    </div>
  </q-page>
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

export default {
  name: 'CakesListPage',
  setup() {
    const store = useStore();
    const cakes = computed(()=>store.state.qcakem.cakes);
    const columns = [
      {
        name: 'name',
        required: true,
        label: 'id',
        align: 'left',
        field: 'id',
        format: val => `${val}`,
        sortable: true
      },
      { name: 'name', align: 'left', label: 'Название', field: 'name', sortable: true },
      { name: 'description', align: 'left', label: 'Описание', field: 'description', sortable: true },
    ];
    onMounted(()=>{
      store.dispatch('qcakem/getAll');
    });
    return {
      columns,
      cakes
    };

  }
}
</script>

<style scoped>

</style>
