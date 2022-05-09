<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
   <div class="page-wrapper">
      <Header></Header>
      <div class="card-wrapper">
         <div class="card-title">Fiat On-Ramp</div>
         <div class="subheading">Select Currency And Payment Method</div>
         <div class="input-label">Currency</div>
         <div class="inputs">
            <select>
               <option value="USD">USD</option>
               <option value="EUR">EUR</option>
            </select>
            <input placeholder="0" class="input" />
         </div>
         <div class="purchase-details subheading">Purchase Details</div>

         <div class="input-label">About Estimated</div>
         <div class="inputs">
            <input class="input" />
            <input placeholder="0" class="input" />
         </div>
         <div class="card-footer">
            <div>exchange rate</div>
            <div class="badge">1ESDC = 1,023 EUR</div>
            <div>you will get</div>
            <div class="badge">234 USDC</div>
         </div>
         <div class="d-flex justify-center w-100">
            <button class="connect-button">Connect Wallet</button>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>

<style scoped lang="scss">
.card-title {
   margin-bottom: 1.5rem;
   color: var(--text-main);
}
.subheading {
   font-size: 1.25rem;
   font-weight: 600;
   margin-bottom: 2.75rem;
   color: var(--text-main);
}
.purchase-details {
   margin-top: 5.75rem;
}

.input-label {
   margin-bottom: 0.5rem;
   font-size: 1.125rem;
   color: var(--text-main);
}

.connect-button {
   background: #080a3e;
   border-radius: 219px;
   color: var(--button-text);
   background: var(--button-background);
   border: 1px solid #e20267;
   font-weight: 600;
   font-size: 1.25rem;
   padding: 0.7rem 2rem;
   outline: none;
   cursor: pointer;
}

.inputs {
   display: grid;
   grid-template-columns: 20% 80%;
   gap: 0.55rem;
   width: 100%;
}

.input,
select {
   background-color: var(--input-background);
   color: var(--text-main);
   font-size: 0.925rem;
   padding: 1rem 1.25rem;
   border-radius: 0.625rem;
   border: none;
   outline: none;
   width: 100%;
}
.card-footer {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1rem;
   color: var(--text-main);
   font-weight: 600;
   font-size: 0.9375rem;
   text-transform: uppercase;
   align-items: center;
   margin: 5rem 0;
   .badge {
      border-radius: 0.375rem;

      padding: 0.375rem 1.5rem;
      background: var(--input-background);
   }
   & > div:not(.badge) {
      text-align: right;
   }
}
</style>
