<script lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { defineComponent } from "vue";
export default defineComponent({
   methods: {
      onClickMax: () => {
         console.log("Max clicked");
      },
   },
   components: { Header, Footer },
});
</script>
<template>
   <div class="page-wrapper">
      <Header></Header>
      <div class="card-wrapper">
         <div class="card-title">Farming</div>
         <div class="paragraph">
            Staking your LP tokens (WMATIC - IBZ on quickswap) and get reward from liquidity mining program. When you
            deposit LP token, you get IBZF token and your rewards will start growing.
            <br />
            <br />
            When you add or remove liquidity, your rewards are automatically transfer to your wallet.
         </div>
         <div class="row">
            <div class="row-left">
               <input placeholder="0" class="input" />
               <div>
                  <div>Your LP: 0</div>
                  <div class="cursor-pointer" @click="onClickMax">Max</div>
               </div>
            </div>
            <button class="card-button">Approve LP</button>
         </div>
         <div class="row">
            <div class="row-left">
               <input placeholder="0" class="input" />
               <div>
                  <div>Your IBZF: 0</div>
                  <div @click="onClickMax" class="cursor-pointer">Max</div>
               </div>
            </div>
            <button class="card-button">Approve IBZF</button>
         </div>
         <div class="footer-wrapper f-15">
            <div class="actual-reward">ACTUAL REWARD APR</div>
            <div class="badge">231.61%</div>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>

<style scoped lang="scss">
.card-title {
   font-weight: 600;
   font-size: 36px;
   color: var(--text-main);
   margin-bottom: 2.75rem;
}
.paragraph {
   margin-bottom: 6rem;
   width: 39.25rem;
   color: var(--text-main);
   font-size: 1.125rem;
   font-weight: 400;
   text-transform: capitalize;
}
.row {
   margin-bottom: 4rem;
   width: 100%;
   display: grid;
   grid-template-columns: auto min-content;
   gap: 3.5rem;
   .row-left {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      & > div {
         display: flex;
         justify-content: space-between;
         div {
            color: var(--text-dark);
            font-size: 1.125rem;
            font-weight: 400;
         }
      }
   }
}

.card-button {
   background: #080a3e;
   border-radius: 219px;
   color: var(--button-text);
   background: var(--button-background);
   border: 1px solid #e20267;
   font-weight: 600;
   size: 0.925rem;
   padding: 0.7rem 0;
   outline: none;
   cursor: pointer;
   height: fit-content;
   white-space: nowrap;
   width: 13.125rem;
   text-align: center;
}

.footer-wrapper {
   display: flex;
   align-items: center;
   gap: 1rem;
   color: var(--text-main);
   .badge {
      background-color: var(--input-background);
      color: var(--text-main);
      font-weight: 600;
      padding: 0.5rem 1.6rem;
      border-radius: 0.35rem;
   }
}

.input {
   background-color: var(--input-background);
   color: var(--text-main);
   font-size: 0.925rem;
   padding: 1rem 1.25rem;
   border-radius: 0.625rem;
   border: none;
   outline: none;
   width: 100%;
}
.input-label {
   font-weight: 400;
   font-size: 0.75rem;
   color: var(--text-main);
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
body {
   font-family: "Kanit";
}
</style>
