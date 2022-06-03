const defaultItem = {
  name: '',
  code: '',
  buyRate: '',
  spotRate: '',
  sellRate: '',
  symbol: '',
  status: ''
}

const statuses = [
  'Active', 'Inactive'
]

const currencyColumns = [
  {
    name: "name",
    align: "left",
    label: "Currency Name",
    field: "name",
    sortable: true
  },
  {
    name: "buyRate",
    align: "center",
    label: "Buy Rate",
    field: "buyRate",
    sortable: true,
    classes: 'text-green'
  },
  {
    name: "sellRate",
    align: "left",
    label: "Sell Rate",
    field: "sellRate",
    sortable: true,
    classes: 'text-red'
  },
  {
    name: "symbol",
    align: "center",
    labelalign: "left",
    label: "Symbol",
    field: "symbol",
    sortable: true
  },
  {
    name: "status",
    align: "center",
    label: "Status",
    field: "status",
    sortable: true
  },
  {
    name: "action",
    align: "center",
    label: "Action",
    field: ""
  }
]

const currencies = [
  {
    name: "Malaysian Rinngit",
    code: "MYR",
    buyRate: "4.097(-2.5%)",
    spotRate: "4.19",
    sellRate: "4.238(+0.5%)",
    symbol: "RM",
    status: "Active"
  },
  {
    name: "Singapore Dollar",
    code: "SGD",
    buyRate: "xxxx(-2.5%)",
    spotRate: "x.xx",
    sellRate: "x.xxx(+0.5%)",
    symbol: "$",
    status: "Active"
  },
  {
    name: "Chinese Yuan",
    code: "CNY",
    buyRate: "xxxx(-2.5%)",
    spotRate: "x.xx",
    sellRate: "x.xxx(+0.5%)",
    symbol: "¥",
    status: "Inactive"
  },
  {
    name: "Malaysian Rinngit",
    code: "MYR",
    buyRate: "4.097(-2.5%)",
    spotRate: "4.19",
    sellRate: "4.238(+0.5%)",
    symbol: "RM",
    status: "Active"
  },
  {
    name: "Singapore Dollar",
    code: "SGD",
    buyRate: "xxxx(-2.5%)",
    spotRate: "x.xx",
    sellRate: "x.xxx(+0.5%)",
    symbol: "$",
    status: "Inactive"
  },
  {
    name: "Chinese Yuan",
    code: "CNY",
    buyRate: "xxxx(-2.5%)",
    spotRate: "x.xx",
    sellRate: "x.xxx(+0.5%)",
    symbol: "¥",
    status: "Active"
  }
]

const { ref, computed, reactive, toRefs, onMounted } = Vue
const { useQuasar } = Quasar

const app = Vue.createApp({
  setup () {
    const q$ = useQuasar()
    const fd = reactive({
      grid: false,
      selected: [],
      statusOpts: statuses,
      inFs: false,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'actions', label: 'Actions', field: '', align:'center' },
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ],
      noti: () => {},
      show_dialog: false,
      editedIndex: -1,
      editedItem: defaultItem,
      filter: "",
      mode: "list",
      currencyColumns: currencyColumns,
      currencyData: currencies,
      pagination: {
        page: 1,
      },
      page: 1,
      totalRecord: 0,
      pageCount: 1,
    })

    function editRow(props) {
      fd.noti()
      // do something
      fd.noti = q$.notify({
        type: 'info',
        textColor: 'grey-10',
        multiLine: true,
        message: `I'll edit row data => ${JSON.stringify(props.row).split(',').join(', ')}`,
        timeout: 2000
      })
    }

    function editRow(props) {
      fd.noti()
      // do something
      fd.noti = q$.notify({
        type: 'info',
        textColor: 'grey-10',
        multiLine: true,
        message: `I'll edit row data => ${JSON.stringify(props.row).split(',').join(', ')}`,
        timeout: 2000
      })
    }

    function deleteRow(props){
      fd.noti()
      // do something
      fd.noti = q$.notify({
        type: 'negative',
        multiline: true,
        message: `I'll delete row data => ${JSON.stringify(props.row).split(',').join(', ')}`,
        timeout: 2000
      })
    }

    function addRow() {
      if (fd.editedIndex > -1) {
        Object.assign(fd.currencyData[fd.editedIndex], fd.editedItem);
      } else {
        fd.currencyData.push(fd.editedItem);
      }
      fd.close()
    }

    function deleteItem(item) {
      const index = fd.currencyData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
      fd.currencyData.splice(index, 1);
    }

    function editItem(item) {
      fd.editedIndex = fd.currencyData.findIndex((v, i) =>v.__index === item.__index)
      fd.editedItem = Object.assign({}, item);
      fd.show_dialog = true;
    }

    function close () {
      fd.show_dialog = false
      setTimeout(() => {
        fd.editedItem = defaultItem
        fd.editedIndex = -1
      }, 300)
    }

    function setFs(props){
      props.toggleFullscreen()
      fd.inFs = props.inFullscreen
    }

    function updateRow() {
      fd.currencyData.splice(fd.editedIndex, 1, fd.editedItem)
      q$.notify({type:"positive", message: `Item '${fd.editedItem.name}' updated.`, timeout: 500 })
    }

    onMounted(() => {
      // add indices
      fd.currencyData = fd.currencyData.map((v, i) => ({ ...v, __index: i}))
    })

    return {
      ...toRefs(fd),
      editRow,
      editRow,
      deleteRow,
      addRow,
      deleteItem,
      editItem,
      close,
      setFs,
      updateRow,
    }
  },

})

app.component('table-wrapper', {
  template: '#table-wrapper',
  emits: ['update:filter', 'grid'],
  setup(props, { attrs, slots, emit }){
    console.log({slots})
    const customSlots = Object.keys(slots).filter(v => {
      if (v.startsWith('grid-item-') || v.startsWith('for-both-') || v.startsWith('body-cell-')) {
        return true
      }
    })
    const filter = computed({
      get:_ => attrs.filter,
      set: v => { emit('update:filter', v) }
    })

    const mode = ref('grid')
    const isGrid = computed(() => {
      const grid = mode.value === 'grid'
      emit('grid', grid)
      return grid
    })

    return {
      setFs(props){
        props.toggleFullscreen()
      },
      isGrid,
      mode,
      filter,
      customSlots,
      bodySlotName(name){
        return 'body-cell-' + name
      }
    }
  }
})

app.use(Quasar, { config: {} });
app.mount("#q-app");
