<template>
  <div class="home-page">
    <div class="container-fluid">
      <h1 class="home-page__title">
        Warehouse space for rent &amp; multi-channel fulfillment with same day
        delivery in Dubai, Abu Dhabi, RAK, Sharjah and Ajman
      </h1>

      <section class="home-page__features">
        <div class="home-page__feat">
          <img
            class="home-page__feat-icon"
            src="@/assets/imgs/hand-icon-1.png"
            alt=""
          />
          <h5 class="home-page__feat-title">No Money Upfront</h5>
        </div>

        <div class="home-page__feat">
          <img
            class="home-page__feat-icon"
            src="@/assets/imgs/calender-icon-1.png"
            alt=""
          />
          <h5 class="home-page__feat-title">7-Day Free Trial </h5>
        </div>

        <div class="home-page__feat">
          <img
            class="home-page__feat-icon"
            src="@/assets/imgs/month-icon-1.png"
            alt=""
          />
          <h5 class="home-page__feat-title">Month-To-Month Renewal</h5>
        </div>
      </section>


      <template>
        <AllPlans />
      </template>

    </div>

      <section >

<AllPlansSwiper />
      </section>


  </div>
</template>

<script>
import AllPlans from '@/components/Home/AllPlans.vue'
import AllPlansSwiper from '@/components/Home/AllPlansSwiper.vue'
export default {
  components:{AllPlans, AllPlansSwiper},
  name: "Home",
  data(){
    return {
      
    }
  }
};
</script>
