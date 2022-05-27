import { DirectiveBinding } from 'vue';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    console.log(el, binding);
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries: any, observer: IntersectionObserver) => {
      if (entries[0].isIntersecting && binding.value.need()) {
        binding.value.run();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'intersection',
};
