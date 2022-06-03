<template>
  <q-table
    class="grid-style-transition"
    title="Торты"
    row-key="name"
    flat
    bordered
    :rows="rows"
    :columns="columns"
    :filter="filter"
  >
    <template v-slot:top-left>
      <!--          https://codepen.io/Pratik__007/pen/eYNvvva?editors=1010-->
      <div style="display: flex">
        <q-btn
          color="primary"
          icon-right="add"
          no-caps
          @click="$emit('add')"
        >Добавить
        </q-btn>
      </div>
    </template>
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
    <template v-slot:body-cell-action="props">
      <div>
        <q-td :props="props">
          <q-btn
            color="primary"
            dense
            flat
            round
            icon="edit"
            @click="$emit('edit',props.row.id)"
          ></q-btn>
        </q-td>
        <q-td :props="props">
          <q-btn
            color="negative"
            dense
            flat
            round
            icon="delete"
            @click="$emit('delete',props.row.id)"
          ></q-btn>
        </q-td>
      </div>
    </template>
  </q-table>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";

export default {
  name: "CakesTable",
  setup(){
    const store = useStore();
    const filter = ref('');
    const rows = computed(() => store.state.qcakem.cakes);
    const columns = [
      {name: 'name',required: true,label: 'id',align: 'left',field: 'id',sortable: true},
      {name: 'name', align: 'left', label: 'Название', field: 'name', sortable: true},
      {name: 'description', align: 'left', label: 'Описание', field: 'description', sortable: true},
      {name: "action", align: "center", label: "Действия", field: ""}
    ];
    return{
      rows,
      columns,
      filter
    }
  }
}
</script>

<style scoped>

</style>
