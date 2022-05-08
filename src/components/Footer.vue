<script setup lang="ts"></script>

<template>
   <div class="footer">
      <div class="left">
         <img class="icon" src="../assets/Images/footer-icons/footer-icon-main.png" />
         <div class="paragraph">
            Ibiza Token is a Web3 ecosystem that counts on the utility token $IBZ, the NFT marketplace, and the IbizaPay
            mobile application and aims to turn Ibiza into a “crypto island” benchmark by connecting local businesses
            and artists to a global audience and increasing the adoption of blockchain technology by citizens and
            institutions.
         </div>
      </div>
      <div class="right">
         <div class="follow-us f-13">Follow Us</div>
         <div v-if="$store.state.theme == 'light'" class="icons">
            <img src="../assets/Images/footer-icons/Vector-0.png" />
            <img src="../assets/Images/footer-icons/Vector-1.png" />
            <img src="../assets/Images/footer-icons/Vector-2.png" />
            <img src="../assets/Images/footer-icons/Vector-3.png" />
            <img src="../assets/Images/footer-icons/Vector-4.png" />
            <img src="../assets/Images/footer-icons/Vector-5.png" />
            <img src="../assets/Images/footer-icons/Vector-6.png" />
            <img src="../assets/Images/footer-icons/Vector-7.png" />
         </div>

         <div v-else class="icons">
            <img src="../assets/Images/footer-icons-dark/Vector-0.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-1.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-2.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-3.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-4.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-5.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-6.png" />
            <img src="../assets/Images/footer-icons-dark/Vector-7.png" />
         </div>
         <div class="subscribe-text f-13">Subscribe To The Newsletter</div>
         <div class="email-wrap">
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.footer {
   width: 100%;
   padding-bottom: 7rem;
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   max-width: 37.5rem;
   display: flex;
   flex-direction: row;
   -moz-box-align: center;
   align-items: center;
   -moz-box-pack: start;
   justify-content: flex-start;
   gap: 4.875rem;
}
.left {
   width: 50%;
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   -moz-box-pack: start;
   justify-content: flex-start;
   gap: 1.3125rem;
}
.right {
   width: 50%;
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   -moz-box-pack: end;
   justify-content: flex-end;
   width: fit-content;
}
.icon {
   object-fit: cover;
   transform: translateX(-1rem);
}
.paragraph {
   font-size: 0.6875rem;
   font-weight: 400;
   color: var(--text-main);
}
.follow-us {
   margin-bottom: 0.8125rem;
   font-family: Kanit;
   font-weight: 500;
   color: var(--text-main);
}
.icons {
   width: 100%;
   margin-bottom: 3.125rem;
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   display: flex;
   flex-direction: row;
   -moz-box-align: center;
   align-items: center;
   -moz-box-pack: start;
   justify-content: flex-start;
   gap: 0.75rem;
}
.icons img {
   cursor: pointer;
}
.subscribe-text {
   margin-bottom: 0.9375rem;
   font-family: Kanit;
   font-weight: 500;
   color: var(--text-main);
}

.email-wrap {
   width: 100%;
   font-family: Kanit;
   font-size: inherit;
   font-weight: 500;
   display: flex;
   flex-direction: row;
   -moz-box-align: center;
   align-items: center;
   -moz-box-pack: start;
   justify-content: flex-start;
   gap: 0.5rem;
}

input {
   font-weight: 500;
   font-size: 0.9375rem;
   padding: 1.0625rem 1.5rem;
   color: #080a3e;
   background: var(--email-input-background);
   border-radius: 0.75rem;
   width: 100%;

   padding: 0.3rem 0.5rem;
   font-size: 0.625rem;
   border-radius: 0.25rem;
   border: none;
   font-style: italic;
}
button {
   color: white;
   border-radius: 4px;
   background-color: #080a3e;
   font-size: 0.75rem;
   padding: 0.25rem 0.6rem;
   font-weight: 500;
   outline: none;
   border: none;
   cursor: pointer;
}
</style>
