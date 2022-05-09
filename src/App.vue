<script lang="ts">
import { storeKey } from "vuex";
import Governance from "./views/Governance.vue";

import { ethers } from "ethers";
import { defineComponent, VueElement } from "vue";
import store from "./store/store";
import WalletPopup from "./components/WalletPopup.vue";
import { connect } from "http2";
export default defineComponent({
   name: "App",
   computed: {
      theme: {
         get() {
            this.$store.state.theme;
         },
         set() {},
      },
   },
   setup: () => {
      window.addEventListener("click", (e: MouseEvent) => {
         e.stopPropagation();
         const tar = e.target as HTMLElement;
         const infoPopup = document.querySelector("#info-popup") || false;
         const walletPopup = document.querySelector("#wallet-popup") || false;
         const connectWallet = document.querySelector(".connect-wallet") || false;
         const userIcon = document.querySelector(".user-icon");
         console.log(walletPopup, connectWallet, tar);
         if (!(walletPopup && walletPopup.contains(tar)) && !(connectWallet && connectWallet.contains(tar))) {
            store.state.showWalletPopup = false;
         }
         if (!(infoPopup && infoPopup.contains(tar)) && !(userIcon && userIcon.contains(tar))) {
            store.state.showInformationPopup = false;
         }
      });
   },
   methods: {},
   components: { WalletPopup },
});
</script>

<template>
   <div class="app" :class="{ light: $store.state.theme === 'light', dark: $store.state.theme === 'dark' }">
      <router-view />
      <WalletPopup v-if="$store.state.showWalletPopup"></WalletPopup>
   </div>
</template>

<style lang="scss">
:root {
   --background-main: white;
   --card-background: #f3f3f3;
   --input-background: #e6e6e6;
   --button-background: #00032a;
   --button-background-contrast: #00032a;
   --button-text-contrast: white;
   --text-main: #080a3e;
   --text-dark: #00032a;
   --header-icon: #05074b;
   --button-text: #ffffff;
   --button-border: #e20267;
   --email-input-background: #c7c7ce;
   /* --subscribe-btn-background: #080a3e; */
}
.dark {
   --header-icon: white;
   --background-main: #00032a;
   --card-background: #080a3e;
   --input-background: #00032a;
   --button-background: #00032a;
   --button-background-contrast: white;
   --button-text-contrast: #080a3e;
   --text-main: #ffffff;
   --text-dark: #ffffff;
   --button-text: #ffffff;
   --button-border: #e20267;
   --email-input-background: #c7c7ce;
   /* --subscribe-btn-background: #080a3e; */
}
.app {
   height: 100%;
   width: 100%;
   background-color: var(--background-main);
   background-image: url("./assets/background.png");
   background-position-y: 13.5625rem;
   background-repeat: no-repeat;
   transition: all 0.15s ease-in-out;
}
.light {
   background-image: url("./assets/background-light.png");
}
.d-flex {
   display: flex;
}
.flex-col {
   flex-direction: column;
}
.justify-center {
   justify-content: center;
}
.justify-end {
   justify-content: end;
}
.w-100 {
   width: 100%;
}
w-fit {
   width: fit-content;
}

.f-10 {
   font-size: 0.625rem;
}
.f-11 {
   font-size: 0.6875rem;
}
.f-12 {
   font-size: 0.75rem;
}
.f-13 {
   font-size: 0.8125rem;
}
.f-14 {
   font-size: 0.875rem;
}
.f-15 {
   font-size: 0.9375rem;
}
.f-16 {
   font-size: 1rem;
}
.f-18 {
   font-size: 1.125rem;
}
.f-20 {
   font-size: 1.25rem;
}
.f-36 {
   font-size: 2.25rem;
}
.text-main {
   color: var(--text-main);
}
.cursor-pointer {
   cursor: pointer;
}

.light {
   font-weight: 300;
}
.regular {
   font-weight: 400;
}
.medium {
   font-weight: 500;
}
.semibold {
   font-weight: 600;
}
.extrabold {
   font-weight: 800;
}
html,
body {
   height: 100%;
   width: 100%;
}
* {
   margin: 0;
   box-sizing: border-box;
}
body,
* {
   font-family: "Kanit";
}

.card-wrapper {
   margin-top: 9.375rem;
   margin-bottom: 9.375rem;
   padding: 5rem 6.9375rem 8.125rem;
   background: var(--card-background);
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   max-width: 62.5rem;
   width: 70%;
   border-radius: 1.375rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   -moz-box-pack: start;
   justify-content: flex-start;
}
.page-wrapper {
   width: 100%;
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
}
.card-title {
   font-weight: 600;
   font-size: 36px;
   color: var(--text-main);
}
</style>
