<template>
  <div id="app">
    <div class="container" style="overflow: hidden;">
      <westore-logo />

      <router-view/>
    </div>
  </div>
</template>
<script>
import WestoreLogo from '@/components/WestoreLogo.vue';
export default {
  components:{
    WestoreLogo
  }
  
}
</script>
<style lang="scss">
  // @import './assets/sass/main.scss';

  
</style>
