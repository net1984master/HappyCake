import { createLogger, createStore } from 'vuex';
import cakem from '@/store/modules/cakem';
const debug = true;
export default createStore({
  modules: {
    cakem
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
