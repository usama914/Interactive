import { createStore } from "vuex";
import DataModule from "./modules/DataModule.js";
const store = createStore({
  modules: {
    DataModule,
  },
});
export default store;
