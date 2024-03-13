<!-- src/views/Home.vue -->
<script>
import { mapActions, mapGetters } from "vuex";
import ImageCarousel from "../components/ImageCarousel.vue";
export default {
  components: {
    ImageCarousel,
  },
  methods: {
    ...mapActions(["increaseCartNumber", "decreaseCartNumber", "addToCart"]),
  },
  computed: {
    ...mapGetters(["getCartNumber"]),
  },
};
</script>
<template>
  <div>
    <div class="w-full h-full grid grid-cols-2 xl:gap-x-[60px]">
      <div class="col-span-2 md:col-span-1  md:h-[87vh]">
        <ImageCarousel />
      </div>
      <div
        class="col-span-2 md:col-span-1 md:h-[87vh] flex items-center justify-center px-[20px]"
      >
        <div>
          <p class="text-paleOrange font-bold text-[16px] uppercase">
            Sneaker Company
          </p>
          <h2 class="text-[32px] md:text-[46px] my-0">
            Fall Limited Edition Sneakers
          </h2>
          <p class="max-w-[450px] text-gray-500 leading-7 mt-3 mb-1">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div class="flex items-center gap-x-[20px]">
            <p class="text-[27px] font-bold my-3">$ 125.00</p>
            <div
              class="bg-paleOrange w-[50px] h-[30px] rounded bg-opacity-20 text-paleOrange font-semibold text-center text-[16px] flex items-center justify-center"
            >
              50%
            </div>
          </div>
          <p class="text-gray-300 my-0 line-through">$ 250.00</p>
          <div
            class="flex flex-col md:flex-row mt-[30px] gap-x-[14px] gap-y-[14px]"
          >
            <div
              class="flex items-center justify-between w-full md:w-[120px] h-[50px] md:h-[57px] bg-lightGrayishBlue rounded-[10px]"
            >
              <img
                src="../assets/icon-minus.svg"
                class="w-[15px] h-[5px] pl-[15px] cursor-pointer"
                @click="decreaseCartNumber"
              />
              <span class="text-[16px] font-bold">{{
                $store.getters.getCartNumber
              }}</span>
              <img
                src="../assets/icon-plus.svg"
                class="w-[15px] h-[15px] pr-[15px] cursor-pointer"
                @click="increaseCartNumber"
              />
            </div>
            <button
              class="flex justify-center items-center text-white font-bold text-[15px] w-full md:w-[240px] h-[50px] md:h-[57px] border-none rounded-[5px] bg-paleOrange shadow-primaryButton hover:shadow-primaryButtonHover hover:transition duration-500 ease-in-out cursor-pointer"
              @click="addToCart"
            >
              <img
                src="../assets/icon-cart-button.svg"
                alt=""
                class="h-[15px] w-[15px] mr-[5px] mb-[3px]"
              />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
