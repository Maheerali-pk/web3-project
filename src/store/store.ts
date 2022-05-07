import Vuex, { createStore } from "vuex";

interface IState {
   theme: "light" | "dark";
   showWalletPopup: boolean;
   showInformationPopup: boolean;
   isConnected: boolean;
   balance: number;
}

const store = new Vuex.Store<IState>({
   state: {
      theme: "dark",
      showWalletPopup: false,
      showInformationPopup: false,
      isConnected: false,
      balance: 0,
   },
   getters: {},
   mutations: {
      reverseTheme: (state) => {
         state.theme = state.theme === "light" ? "dark" : "light";
      },
      toggleWalletPopup: (state) => {
         state.showWalletPopup = !state.showWalletPopup;
      },
      toggleInformationPopup: (state) => {
         state.showInformationPopup = !state.showInformationPopup;
      },
   },

   modules: {},
});
export type IStore = typeof store;
export default store;
