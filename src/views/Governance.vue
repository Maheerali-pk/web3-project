<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
   <div class="page-wrapper">
      <Header></Header>
      <div class="card-wrapper">
         <div class="card-header">
            <div class="card-title">Governance</div>
            <button class="card-button">Create New</button>
         </div>
         <div class="proposals">Proposals</div>
         <div class="inputs">
            <div class="input-wrapper">
               <div class="input-label desc-label">Description</div>
               <input class="input" />
            </div>
            <div class="input-wrapper">
               <div class="input-label">Status</div>
               <input class="input" />
            </div>

            <div class="input-wrapper">
               <div class="input-label">Start Date</div>
               <input class="input" type="date" />
            </div>
            <div class="input-wrapper">
               <div class="input-label">End Date</div>
               <input class="input" type="date" />
            </div>
            <div class="input-wrapper">
               <div class="input-label">Author</div>
               <input class="input" />
            </div>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>

<style scoped lang="scss">
.card-header {
   display: flex;
   justify-content: space-between;
   width: 100%;
}
.card-title {
   font-weight: 600;
   font-size: 36px;
   color: var(--text-main);
}
.card-button {
   background: #080a3e;
   border-radius: 219px;
   color: var(--button-text-contrast);
   background: var(--button-background-contrast);
   font-weight: 600;
   font-size: 0.9375rem;
   padding: 0.55rem 1.1rem;
   height: fit-content;
   transform: translateY(1.5rem);
   outline: none;
   border: none;
   cursor: pointer;
}
.proposals {
   font-weight: 600;
   size: 1.25rem;
   margin-top: 1.5rem;
   margin-bottom: 4.5rem;
   color: var(--text-main);
}
.inputs {
   display: grid;
   grid-template-columns: auto 5rem 10rem 10rem 5rem;
   gap: 1rem;

   width: 100%;
}
.input-wrapper {
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
   width: 100%;
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
   &:not(.desc-label) {
      padding-left: 0.25rem;
   }
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
