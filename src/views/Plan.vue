<template>
  <div class="plan-page">
    <h2 class="plan-page__title">
      Your Warehousing &amp; Fulfillment Subscription Plan
    </h2>

    <h6 class="plan-page__note">No Credit Card Required</h6>

    <div class="row">
      <div class="col-md-12 col-lg-5 mt-5 order-sm-4">
        <div class="plan-page__submit-the-plan">
          <h5 class="plan-page__form-title"> Start your 7-Day FREE trial </h5>
          <div class="plan-page__input">
            <b-form-input
              v-model="name"
              placeholder="Name"
            ></b-form-input>
          </div>

          <div class="plan-page__input">
            <b-form-input
              v-model="email"
              placeholder="Email"
            ></b-form-input>
          </div>

          <div class="plan-page__input">
            <b-form-input
              v-model="phone"
              placeholder="Phone"
            ></b-form-input>
          </div>

          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            :value="true"
            unchecked-value="not_accepted"
          >
              I agree to the Terms of Service
          </b-form-checkbox>

          <router-link tag="button" :to="'/success'" class="plan-page__submit"> Submit </router-link>

        </div>
      </div>

      <div class="col-md-12 col-lg-7 order-sm-3">
        <div class="plan-page__invoice">
          <div class="plan-page__logo" >
            <img src="@/assets/imgs/logo.svg" alt="">
          </div>

            <h5 class="plan-page__invoice-title">Invoice</h5>

            <h6> <b> Provided by: </b> WeStore Technology Limited </h6>
            <h6> <b> Order Number: </b> {{ currPlan.id }} </h6>


            <table class="main-table">
              <thead>
                <tr>
                  <td> Services </td>
                  <td> Quantity </td>
                  <td> Price </td>
                </tr>
              </thead>
              <tr v-for="(plan, index) in Object.entries(currPlan)" :key="index">
                <template v-if="plan[0] != 'id'">
                  <td> {{ plan[0] }} </td>
                  <td> {{ plan[1] }} </td>
                  <td> - </td>
                </template>
              </tr>

              
              
            </table>


            <table class="small-table">
              <tr>
                <td>
                   Your Warehousing and Fulfillment Services
                </td>
                <td>
                   {{currPlan.price}} AED
                </td>
              </tr>
              <tr>
                <td>
                   <i>VAT</i>
                </td>
                <td>
                   5%
                </td>
              </tr>
              <tr>
                <td>
                   <i>TOTAL</i>
                </td>
                <td>
                   {{ currPlan.price + (currPlan.price * 0.05 ) }} AED
                </td>
              </tr>
            </table>


            <h6>
              <b>Additional Value-added services</b>
            </h6>

            <div class="row">
              <div class="col-md-6 col-6">
                <div>
                  <ul>
                    <li>Last Mile Delivery</li>
                    <li>Cash On Delivery</li>
                    <li>Returns</li>
                  </ul>
                </div>
              </div>


              <div class="col-md-6 col-6">
                <div>
                  <ul>
                    <li>Customizing Packaging</li>
                    <li>Transporting inventory to facility</li>
                  </ul>
                </div>
              </div>


            </div>



            <div class="plan-page__footer">

              <div class="row">
              <div class="col-md-12">
                <div>
                  <h6> WeStore </h6>
                </div>
              </div>
              <div class="col-md-3 col-4 border-right border-left">
                <div>
                  
                  
                  <div class="plan-page__address">
                    <p>
                      30 <sup>th</sup> floor, Office 30-11,
                      Reef Tower 
                      Jumeriah Lake Towers
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>


              <div class="col-md-6 col-4 border-right">
                <div>
                  
                  <div class="plan-page__address">
                    <p>
                      T. +971 58 585  1340
                      <br>
                      connect@westore.ai
                    </p>
                  </div>
                </div>
              </div>



              <div class="col-md-3 col-4 ">
                <div>
                  
                  <div class="plan-page__address">
                    <p>
                      www.westore.ai
                    </p>
                  </div>
                </div>
              </div>
            </div>


            </div>
        </div>
      </div>

      

      
    </div>
  </div>
</template>
<script>
import plansMixins from "@/mixins/plans.js";
export default {
  mixins: [plansMixins],
  methods:{
    getSelectedPlan(){
      this.currPlan = this.plans.find(ele =>ele.id == this.$route.params.id);
      if(!this.currPlan || !this.currPlan.id){
        this.$router.push('/')
      }
    }
  },
  mounted(){
    this.getSelectedPlan();
  },
  data(){
    return {
      currPlan: {},
      name :"",
      email: "",
      phone: "",
      status: true
    }
  }
}
</script>
<style lang="scss">

</style>