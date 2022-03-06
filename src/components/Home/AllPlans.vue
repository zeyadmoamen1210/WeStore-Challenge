<template>
  <section class="home-page__plans">
        <Plan :details="plan" v-for="(plan,index) in plans" :key="index" >
          <div slot="plan-features">
            <ul class="home-page__plan-features">
              <li v-for="(planEntry, index) in Object.entries(plan)" :key="index">
                <template v-if="index >= 3">
                  <img class="home-page__plan-icon" :src="require(`@/assets/imgs/plan/icon-${index-2}.png`)" alt="">
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

        <Plan :isCustomPlan="true">
          <div slot="plan-features">
            <ul class="home-page__custom-plan-ul">
              <li class="home-page__custom-plan" v-for="(feature,index) in customPlanFeatures" :key="index">
                <span> <img src="@/assets/imgs/plan/Vector.png" alt=""> </span>
                <span> {{feature}} </span>
              </li>
            </ul>
          </div>
        </Plan>
      </section>
</template>

<script>
import Plan from './Plan.vue'
import plansMixins from '@/mixins/plans.js';
export default {
    mixins: [plansMixins],
    components:{Plan},
    data(){
        return {
            
        }
    }
}
</script>

<style>

</style>