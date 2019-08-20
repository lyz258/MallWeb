<template>
  <div>
      <cart v-on:getValue="upCart($event)"></cart>
      <site v-bind:allPay="allPay"></site>
  </div>
</template>

<script>
import site from './site'
import cart from './cart'
import bus from '../assets/iconfont/bus'
export default {
  name: 'fuzujian',
  data () {
    return {
      allPay: ''
    }
  },
  components: {
    site,
    cart
  },
  methods: {
    getValue (val) {
      this.allPay = val
    }
  }
}
</script>

<style>
</style>
