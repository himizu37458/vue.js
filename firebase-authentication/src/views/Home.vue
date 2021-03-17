<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Clock class="clock" location="Tokyo" :diff="0"/>
    <Clock class="clock" location="NY" :diff="-14"/>
    <Clock class="clock" location="LA" :diff="-17"/>
    <Clock class="clock" location="UK" :diff="-9"/>
    <Clock class="clock" location="BRAZIL" :diff="-12"/>
    <Clock class="clock" location="SYDNEY" :diff="1"/>
    <Clock class="clock" location="DUBAI" :diff="-5"/>
    <Clock class="clock" location="JOHANNESBURG" :diff="-7"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Clock from '@/components/Clock.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Clock
  }
}
</script>

<style scoped>
.clock {
  width: 80%;
  max-width: 500px;
  margin: 30px auto;
}
</style>
