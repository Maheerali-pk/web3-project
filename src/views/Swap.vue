<script lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { defineComponent } from "vue";
export default defineComponent({
   methods: { onClickMax: () => console.log("Max clicked") },
   components: { Header, Footer },
});
</script>
<template>
   <div class="page-wrapper">
      <Header></Header>
      <div class="card-wrapper">
         <div class="card-title">Swap</div>
         <div class="inputs">
            <div class="input-wrapper">
               <div class="input-label">From</div>
               <input class="input" />
            </div>
            <div class="input-wrapper">
               <div class="input-label"></div>
               <input class="input" placeholder="0" />
            </div>
         </div>
         <div class="max cursor-pointer" @click="onClickMax">Max</div>
         <div class="icons-row">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M6 6.00024H3.275C4.12474 4.77721 5.34303 3.85768 6.75216 3.37579C8.16129 2.89389 9.68753 2.87485 11.1082 3.32144C12.529 3.76803 13.7698 4.65689 14.6498 5.85834C15.5298 7.0598 16.0028 8.51099 16 10.0002H18C18.0009 8.13874 17.4245 6.32276 16.3503 4.80248C15.2761 3.2822 13.7569 2.13241 12.002 1.5115C10.2471 0.890599 8.3428 0.829127 6.55151 1.33556C4.76022 1.84199 3.17003 2.8914 2 4.33924V2.00024H0V8.00024H6V6.00024Z"
                  fill="#080A3E"
               />
               <path
                  d="M12 14H14.725C13.8753 15.223 12.657 16.1426 11.2478 16.6245C9.83871 17.1063 8.31247 17.1254 6.89176 16.6788C5.47105 16.2322 4.2302 15.3434 3.35021 14.1419C2.47023 12.9404 1.99716 11.4892 2 10H9.55917e-07C-0.00085677 11.8615 0.575521 13.6775 1.64974 15.1978C2.72395 16.718 4.24315 17.8678 5.99805 18.4887C7.75295 19.1096 9.6572 19.1711 11.4485 18.6647C13.2398 18.1583 14.83 17.1088 16 15.661V18H18V12H12V14Z"
                  fill="#080A3E"
               />
            </svg>
            <div>
               <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M11 0.875C5.417 0.875 0.875 5.417 0.875 11C0.875 16.583 5.417 21.125 11 21.125C16.583 21.125 21.125 16.583 21.125 11C21.125 5.417 16.583 0.875 11 0.875ZM11 18.875C6.658 18.875 3.125 15.342 3.125 11C3.125 6.658 6.658 3.125 11 3.125C15.342 3.125 18.875 6.658 18.875 11C18.875 15.342 15.342 18.875 11 18.875Z"
                     fill="#080A3E"
                  />
                  <path d="M12 6H10V10H6V12H10V16H12V12H16V10H12V6Z" fill="#080A3E" />
               </svg>
               <div class="add-a-send">Add A Send (Optional)</div>
            </div>
         </div>
         <div class="inputs">
            <div class="input-wrapper">
               <div class="input-label">To</div>
               <input class="input" />
            </div>
            <div class="input-wrapper">
               <div class="input-label"></div>
               <input class="input" placeholder="0" />
            </div>
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
   margin-bottom: 5rem;
}
.max {
   display: flex;
   width: 100%;
   justify-content: flex-end;
   font-weight: 600;
   size: 1.125rem;
   margin-top: 0.55rem;
   margin-bottom: 2.5rem;
   color: var(--text-main);
}
.icons-row {
   margin-bottom: 3rem;
   display: flex;
   justify-content: space-between;
   width: 100%;
   path {
      fill: var(--text-main);
   }
   svg {
      cursor: pointer;
   }
   & > div {
      display: flex;
      cursor: pointer;
   }
   .add-a-send {
      color: var(--text-main);
      margin-left: 0.75rem;
   }
}

.connect-button {
   background: #080a3e;
   border-radius: 219px;
   color: var(--button-text);
   background: var(--button-background);
   border: none;
   border: 1px solid #e20267;
   font-weight: 600;
   font-size: 1.25rem;
   padding: 0.7rem 2rem;
   outline: none;
   cursor: pointer;
   margin-top: 5.5rem;
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
   grid-template-columns: 20% 80%;
   gap: 0.55rem;
   width: 100%;
   align-items: end;
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
   font-size: 1.125rem;
   color: var(--text-main);
}
</style>
