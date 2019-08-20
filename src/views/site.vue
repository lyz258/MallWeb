<template>
  <div class="div3">
    <div class="div1">
        <form action="" >
          <label for="a">姓名:</label>
          <input type="text" id="a" v-model="name11"><br>
          <label for="b">电话:</label>
          <input type="text" id="b" v-model="phone"><br>
          <label for="c">地址: </label>
          <input type="text" id="c" v-model="site1">
        </form>
        <hr>
        <div class="div2">
          <p>姓名：{{name11}}</p>
          <p>电话:{{phone}}</p>
          <p>地址:{{site1}}</p>
        </div>
        <p>金额：{{this.allPay}}</p>
        <P>结算</P>
    </div>
  </div>
</template>

<script>
import bus from '../assets/iconfont/bus.js'
export default {
  name: 'site',
  data () {
    return {
      name11: '',
      phone: '',
      site1: '',
      btext: ''
    }
  },
  created: function () {
    this.bbtn()
  },
  methods: {
   bbtn: function () {
     bus.$on("getValue", (val)=>{
       this.btext= val
     })
   }
  }
}
</script>

<style scoped>
  .div3{
    width:500px;
    height:500px;
    display:flex;
    align-items: center;
    margin: 0 auto;
  }
  form{
    font-size: 20px;
  }
  form input{
    margin-top: 40px;
    height: 30px;
    width: 300px;
    text-align: center;
  }
</style>
