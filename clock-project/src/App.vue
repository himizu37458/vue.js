<template>
<div>
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
// importでClockコンポーネントを読み込み
import Clock from "@/components/Clock"

export default {
  // componentsに登録して使用出来るようにする
  components: {
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
<style>
/* リセット系のスタイル */
html {
  font-size: 62.5%;
}
body {
  margin: 0;
}
p {
  margin: 0;
}
</style>
