<!-- src/views/Home.vue -->
<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}

const navigationItems = ["Collections", "Men", "Women", "About", "Contact"];
const isMobileNavOpen = ref(false);

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};
let cart = ref({
  
})
</script>
<template>
  <nav class="bg-white border-gray-200">
    <div
      class="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-[70px]"
    >
      <div class="flex justify-between items-center">
        <img
          src="../assets/icon-menu.svg"
          class="mr-[20px] pt-[4px] flex lg:hidden"
          alt=""
          @click="toggleMobileNav"
        />
        <img src="../assets/logo.svg" class="w-[138px] h-[20px]" alt="Logo" />
        <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex justify-between lg:w-[350px] xl:w-[400px] items-center"
          >
            <li
              class="list-none text-gray-500 cursor-pointer"
              v-for="(nav, index) in navigationItems"
              :key="index"
            >
              <p
                class="hover:border-0 hover:border-spacing-2 hover:border-b-[5px] hover:border-primaryOrange hover:border-solid transitio py-[72px]"
              >
                {{ nav }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex w-[100px] lg:w-[100px] items-center justify-between relative"
      >
        <img
          src="../assets/icon-cart.svg"
          class="h-[20px] w-[20px] cursor-pointer"
          alt=""
          @click="setIsOpen(true)"
        />
        <img
          src="../assets/image-avatar.png"
          class="h-[40px] w-[40px] rounded-[50%] hover:border-solid hover:border-[2px] hover:border-primaryOrange cursor-pointer"
          alt=""
        />
        <Dialog
          class="font-kumbh-sans shadow-md w-[350px] xl:w-[375px] absolute top-[100px] right-[10px] lg:right-[150px] bg-white rounded-[10px] min-h-[180px]"
          :open="isOpen"
          @close="setIsOpen"
        >
          <DialogPanel>
            <DialogTitle class="text-[16px] px-[20px] pt-2">Cart</DialogTitle>
            <hr class="h-px my-4 bg-gray-200 border-0" />
            <div v-if="Object.keys(cart).length > 0" class="px-[20px]">
              <DialogDescription class="flex">
                <img src="" alt="" loading="lazy">
              </DialogDescription>
              <button
             
                @click="setIsOpen(false)"
                class="my-2 w-full h-[46px] rounded-[10px] border-0 bg-primaryOrange text-white font-bold text-14px"
              >
                Checkout
              </button>
            </div>
             <div v-else class="py-[15px] flex items-center justify-center text-grayishBlue font-bold text-[16px]">
              <DialogDescription class="">
                Your cart is empty.
              </DialogDescription>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 hidden lg:flex" />
    <div
      v-show="isMobileNavOpen"
      class="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-50"
      @click="closeMobileNav"
    ></div>
    <div
      v-show="isMobileNavOpen"
      id="drawer-example"
      class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-50 w-[40%] py-[50px] px-[30px] rounded-r"
      aria-labelledby="drawer-label"
    >
      <!-- Close Navigation Icon -->
      <div class="flex justify-start mb-[60px]">
        <img
          src="../assets/icon-close.svg"
          alt=""
          @click="toggleMobileNav"
          class
        />
      </div>

      <!-- Navigation Items for Mobile -->
      <div
        class="list-none text-black font-semibold cursor-pointer"
        v-for="(nav, index) in navigationItems"
        :key="index"
      >
        <p class="my-[25px]">
          {{ nav }}
        </p>
      </div>
    </div>
  </nav>
</template>
