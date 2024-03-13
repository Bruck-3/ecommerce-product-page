<template>
  <div class="h-full relative flex flex-col items-center justify-center">
    <img
      class="w-full h-full max-h-[400px] max-w-[400px] rounded"
      :src="`${srcUrl}-${index}.jpg`"
      alt=""
    />
    <div class="absolute md:hidden top-[50%] left-[10px]">
      <img @click="nextItem" src="../assets/icon-previous.svg" alt="" />
    </div>
    <div class="absolute md:hidden top-[50%] right-[10px]">
      <img @click="previousItem" src="../assets/icon-next.svg" alt="" />
    </div>
    <div
      class="hidden md:flex justify-between w-[400px] items-center mt-[20px]"
    >
      <img
        v-for="i in 4"
        class="max-h-[90px] max-w-[80px] rounded hover:opacity-[40%]"
        :src="`${thumbnailUrl}-${i}-thumbnail.jpg`"
        alt=""
        @click="index = i"
        :class="
          i == index ? 'border-[2px] border-primaryOrange border-solid' : ''
        "
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Image Carousel",
  data() {
    return {
      thumbnailUrl: "/src/assets/shoes/image-product",
      srcUrl: "/src/assets/shoes/image-product",
      index: 1,
    };
    },
methods: {
    nextItem() {
        if (this.index < 4) {
            this.index = this.index + 1;
        } else if (this.index === 4) {
            this.index = 1;
        }
    },
    previousItem() {
        if (this.index > 1) {
            this.index = this.index - 1;
        } else if (this.index === 1) {
            this.index = 4;
        }
    }
}
};
</script>
