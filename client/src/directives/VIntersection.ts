import { DirectiveBinding } from 'vue';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    console.log(el, binding);
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPage) {
    //     binding.value();
    //   }
    // };
    // const callback = (entries: any, observer: IntersectionObserver) => {
    //   console.log(binding);
    //   if (
    //     entries[0].isIntersecting &&
    //     binding.value.page < binding.value.total
    //   ) {
    //     console.log(binding);
    //     binding.value.run();
    //   }
    // };
    const callback = (entries: any, observer: IntersectionObserver) => {
      console.log(binding);
      if (
        entries[0].isIntersecting
      ) {
        binding.value.run();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
