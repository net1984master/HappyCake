<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        class="grid-style-transition"
        title="Торты"
        :rows="cakes"
        :columns="columns"
        row-key="name"
        flat
        bordered
        :filter="filter"
      >
        <template v-slot:top-right="props">
          <!--            Примеры фильтра-->
          <!--            https://codepen.io/b0otable/pen/PozWLYR?editors=1010-->
          <!--          https://codepen.io/metalsadman/pen/ZgKexK-->
          <q-input
            v-model="filter"
            outlined
            denseola
            debounce="300"
            placeholder="Фильтр">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: 'CakesListPage',
  setup() {
    const store = useStore();
    const cakes = computed(() => store.state.qcakem.cakes);
    const filter = ref('');
    const columns = [
      {
        name: 'name',
        required: true,
        label: 'id',
        align: 'left',
        field: 'id',
        sortable: true
      },
      {name: 'name', align: 'left', label: 'Название', field: 'name', sortable: true},
      {name: 'description', align: 'left', label: 'Описание', field: 'description', sortable: true},
    ];
    onMounted(() => {
      store.dispatch('qcakem/getAll');
    });
    return {
      columns,
      cakes,
      filter
    };

  }
}
</script>

<style scoped lang="scss">
.grid-style-transition {
  transition: transform .28s, background-color .28s
}
</style>
