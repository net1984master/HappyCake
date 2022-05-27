import { defineComponent } from 'vue';

const mixin = defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
  },
});

export default mixin;
