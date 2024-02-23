<!-- src/views/Home.vue -->
<script setup>
const navigationItems = ["Collections", "Men", "Women", "About", "Contact"];
</script>
<template>
  <nav class="bg-white border-gray-200 md:px-[200px]">
    <div class="max-w-screen-xl flex justify-between mx-auto p-4">
      <div class="flex gap-x-[90px] items-center">
        <img src="../assets/logo.svg" class="w-[138px] h-[20px]" alt="Logo" />
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex gap-x-[40px] items-center">
            <li
              class="list-none text-gray-500 cursor-pointer"
              v-for="(nav, index) in navigationItems"
              :key="index"
            >
              <p class>{{ nav }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex gap-x-[30px] md:gap-x-[60px] items-center">
        <img
          src="../assets/icon-cart.svg"
          class="h-[20px] w-[20px] cursor-pointer"
          alt=""
        />
        <img
          src="../assets/image-avatar.png"
          class="h-[40px] w-[40px]"
          alt=""
        />
      </div>
    </div>
    <div class=" w-full">
        <span class="border-t border-gray-300"></span>
    </div>
  </nav>
</template>
