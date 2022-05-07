<script lang="ts">
import { ethers } from "ethers";
import { defineComponent } from "vue";
export default defineComponent({
   methods: {
      async connectMetaMask() {
         if ((window as any).ethereum) {
            const eth = (window as any).ethereum;
            try {
               const accounts = await eth.request({ method: "eth_requestAccounts" });
               const provider = new ethers.providers.Web3Provider(eth);
               const balance = await provider.getBalance(accounts[0]);
               this.$store.state.balance = balance.toNumber();
               this.$store.state.isConnected = true;
               this.$store.state.showWalletPopup = false;
            } catch (err) {
               alert("Unable to connect to the account");
            }
         } else {
            alert("Meta Mask not found.");
         }
      },
   },
});
</script>
<template>
   <div class="popup-wrapper">
      <div class="card-title">Connect Wallet</div>
      <br />
      <div class="paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nesciunt quam. Laudantium, eveniet odio itaque
         iusto eos laboriosam beatae, repellat nisi earum deserunt natus quos, dolorum temporibus optio excepturi
         voluptatem.
      </div>
      <div class="icons-wrapper">
         <img @click="connectMetaMask()" src="../assets/Images/popup-icons/Group3.png" alt="" />
         <img src="../assets/Images/popup-icons/Group2.png" alt="" />
         <img src="../assets/Images/popup-icons/Group1.png" alt="" />
      </div>
   </div>
</template>
<style scoped lang="scss">
.card-title {
   color: var(--text-main);
   font-size: 1.875rem;
}
.paragraph {
   font-size: 0.75rem;
   margin-bottom: 3.5rem;
   color: var(--text-main);
}
.icons-wrapper {
   display: flex;
   width: 100%;
   gap: 2.25rem;
}

.popup-wrapper {
   padding: 3rem 4rem;
   background: var(--card-background);
   font-family: Kanit;
   font-size: inherit;
   border-radius: 1.375rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 31rem;
   box-shadow: 2px 2px 28px rgba(0, 0, 0);
}
img {
   cursor: pointer;
}
</style>
