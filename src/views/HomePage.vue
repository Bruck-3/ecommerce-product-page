<!-- src/views/Home.vue -->
<script setup>
import { ref, defineComponent } from 'vue'
import VueEasyLightbox from "vue-easy-lightbox";
const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([]);
const onShow = () => {
  visibleRef.value = true;
};
const showSingle = () => {
  imgsRef.value = "http://via.placeholder.com/350x150";
  // or
  // imgsRef.value  = {
  //   title: 'this is a placeholder',
  //   src: 'http://via.placeholder.com/350x150'
  // }
  onShow();
};
const showMultiple = () => {
  imgsRef.value = [
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
  ];
  // or
  // imgsRef.value = [
  //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
  //   'http://via.placeholder.com/350x150'
  // ]
  indexRef.value = 0; // index of imgList
  onShow();
};
const onHide = () => (visibleRef.value = false);
</script>
<template>
  <div>
    <h1 class="text-black"></h1>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>
