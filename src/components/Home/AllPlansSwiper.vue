<template>
  <div class="mobile-slider">
    <swiper ref="mySwiper" :options="swiperOptions">
        <div class="swiper-pagination top-pagination" slot="pagination"></div>

      <swiper-slide v-for="(plan, index) in plans" :key="index">
        <Plan :details="plan">
          <div slot="plan-features">
            <ul class="home-page__plan-features">
              <li
                v-for="(planEntry, index) in Object.entries(plan)"
                :key="index"
              >
                <template v-if="index >= 3">
                  <img
                    class="home-page__plan-icon"
                    :src="require(`@/assets/imgs/plan/icon-${index - 2}.png`)"
                    alt=""
                  />
                  <div class="home-page__feature">
                    <span v-for="(key_val, index2) in planEntry" :key="index2">
                      {{ key_val }}
                    </span>
                  </div>
                </template>
              </li>
            </ul>
          </div>
        </Plan>
      </swiper-slide>
      <swiper-slide>
        <Plan :isCustomPlan="true">
          <div slot="plan-features">
            <ul class="home-page__custom-plan-ul">
              <li
                class="home-page__custom-plan"
                v-for="(feature, index) in customPlanFeatures"
                :key="index"
              >
                <span>
                  <img src="@/assets/imgs/plan/Vector.png" alt="" />
                </span>
                <span> {{ feature }} </span>
              </li>
            </ul>
          </div>
        </Plan>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>

      <div class="swiper-button-prev" slot="button-prev">
        <img src="@/assets/imgs/plan/next.png" alt="" />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="@/assets/imgs/plan/prev.png" alt="" />
      </div>
    </swiper>

    <h6 class="mt-5 text-center">
        Swipe left for more Subscription Plans
    </h6>
  </div>
</template>

<script>
import Plan from "./Plan.vue";
import plansMixins from "@/mixins/plans.js";
export default {
  mixins: [plansMixins],
  components: { Plan },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
        },
        loop: true,

        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style>
</style>