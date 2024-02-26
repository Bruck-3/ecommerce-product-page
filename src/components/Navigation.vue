<!-- src/views/Home.vue -->
<script setup>
import { ref } from "vue";
const navigationItems = ["Collections", "Men", "Women", "About", "Contact"];
const isMobileNavOpen = ref(false);

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};

</script>
<template>
  <nav class="bg-white border-gray-200 lg:px-[100px] xl:px-[200px]">
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
      <div class="flex w-[100px] lg:w-[100px] items-center justify-between">
        <img
          src="../assets/icon-cart.svg"
          class="h-[20px] w-[20px] cursor-pointer"
          alt=""
        />
        <img
          src="../assets/image-avatar.png"
          class="h-[40px] w-[40px] rounded-[50%] hover:border-solid hover:border-[2px] hover:border-primaryOrange cursor-pointer"
          alt=""
        />
      </div>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 hidden lg:flex" />
    <div v-show="isMobileNavOpen" class="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-50" @click="closeMobileNav"></div>
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
