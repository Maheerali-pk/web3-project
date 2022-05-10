<script lang="ts">
import { defineComponent, PropType } from "vue";
interface IOption {
   value: string;
   img: string;
   text: string;
}
interface IState {
   options: IOption[];
   selected: string;
}

export default defineComponent({
   props: {
      params: {
         type: Object as PropType<IState>,
         required: true,
      },
   },
   data() {
      return {
         selected: this.params.selected,
      };
   },
   computed: {
      selectedOption: function () {
         const option = this.params.options.find((x) => x.value === this.selected) as IOption;
         return option;
      },
   },
});
</script>
<template>
   <div class="dropdown">
      <button
         class="btn btn-secondary dropdown-toggle f-14"
         type="button"
         id="dropdownMenuButton1"
         data-bs-toggle="dropdown"
         aria-expanded="false"
      >
         <img :src="selectedOption.img" />
         <div>{{ selectedOption.text }}</div>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
         <li @click="$data.selected = opt.value" class="dropdown-item f-14" v-for="opt in params.options">
            <img :src="opt.img" />
            <div>{{ opt.text }}</div>
         </li>
      </ul>
   </div>
</template>

<style lang="scss" scoped>
.btn {
   background-color: var(--input-background);
   color: var(--text-main);
   display: flex;
   gap: 0.75rem;
   border-radius: 0.75rem;
   border: none;
   outline: none;
   align-items: center;
   padding: 0 1rem;
   height: 100%;
   width: 100%;
   &:after {
      display: none;
   }
}
.dropdown-menu {
   background-color: var(--input-background);
   color: var(--text-main);

   .dropdown-item {
      color: var(--text-main);
      display: flex;
      gap: 0.75rem;
      align-items: center;
      padding: 0.75rem 1rem;
      img {
         width: 1.875rem;
         height: 1.875rem;
      }
      &:hover {
         background-color: var(--input-background);

         color: var(--text-main);
         cursor: pointer;
      }
   }
}
</style>
