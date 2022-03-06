<template>
  <div class="our-plan">
    <h6 v-if="!isCustomPlan" class="our-plan__title"> {{ details.name }} </h6>
    <h6 v-else class="our-plan__title"> Custom </h6>

    <div v-if="!isCustomPlan">
      <div class="our-plan__price-currency">
        <h2 class="our-plan__price"> {{ details.price }} </h2>
        <span class="our-plan__currency"> AED </span>
      </div>
      <h6 class="our-plan__range">monthly</h6>

        <router-link tag="button" class="our-plan__plan-btn" :to="`plans/${details.id}`">Start your FREE trial</router-link>
    </div>

    <div v-else>
      <h6 class="our-plan__custom-plan-title">
        Create a plan for your B2B and B2C needs.
      </h6>

      <div class="our-plan__custom-plan-input">
        <b-form-input
          v-model="phone"
          placeholder="Phone"
        ></b-form-input>
      </div>
      <div class="our-plan__custom-plan-input">
        <b-form-input
          v-model="email"
          placeholder="Email"
        ></b-form-input>
      </div>

      <router-link tag="button" class="our-plan__plan-btn" :to="`/success`">Customize your plan</router-link>
    </div>
    
    <slot name="plan-features"></slot>


    <p v-if="!isCustomPlan" class="our-plan__plan-footer">
        Cost can vary based on the fulfillment center location and shipping destination, as well as other value-added services.
    </p>

  </div>
</template>

<script>
export default {
  props: {
    details: Object,
    isCustomPlan: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      phone: "",
      email: "",
    };
  },
};
</script>

<style>
</style>