<template>
  <q-dialog
    :model-value="$props.show"
    @update:model-value="changeValue"
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
        <slot/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ModalEditDialog",
  props: {
    show: Boolean,
    default: false
  },
  emits:['close'],
  setup(props,param){
    console.log(props.show);
    function changeValue(env) {
      if(true){
        param.emit('close');
      }
    };
    return{
      changeValue,
      maximizedToggle: ref(true),
    }
  }
}
</script>

<style scoped>

</style>
