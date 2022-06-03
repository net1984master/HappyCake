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
        <template v-slot:top-left>
          <!--          https://codepen.io/Pratik__007/pen/eYNvvva?editors=1010-->
          <div style="display: flex">
            <q-btn
              color="primary"
              icon-right="add"
              no-caps
              @click="dialog = true"
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
                @click="editItem(props.row.id)"
              ></q-btn>
            </q-td>
            <q-td :props="props">
              <q-btn
                color="negative"
                dense
                flat
                round
                icon="delete"
                @click="deleteItem(props.row.id)"
              ></q-btn>
            </q-td>
          </div>
        </template>
      </q-table>

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

export default {
  name: 'CakesListPage',
  components: {CakeItem},
  setup() {
    const store = useStore();
    const cakes = computed(() => store.state.qcakem.cakes);
    const filter = ref('');
    const dialog = ref(false);
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
      {name: "action", align: "center", label: "Действия", field: ""}
    ];
    onMounted(() => {
      store.dispatch('qcakem/getAll');
    });
    function editItem(id) {
      store.commit('qcakem/setEditedItem',id);
      openEditDialog();
    };
    function deleteItem(id) {
      store.commit('qcakem/setEditedItem',id);
      openEditDialog();
    };
    function openEditDialog() {
      dialog.value = true;
    };
    return {
      columns,
      cakes,
      filter,
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
