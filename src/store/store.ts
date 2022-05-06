import Vuex, { createStore } from "vuex";

interface IState {
   theme: "light" | "dark";
}

const store = new Vuex.Store<IState>({
   state: {
      theme: "dark",
   },
   getters: {},
   mutations: {
      reverseTheme: (state) => {
         state.theme = state.theme === "light" ? "dark" : "light";
      },
   },

   modules: {},
});
export type IStore = typeof store;
export default store;
