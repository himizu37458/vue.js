<template>
<div>
  <div class="container">
    <p class="location">{{ location }}</p>
    <p class="date">{{ year }}/{{ month }}/{{ day }}</p>
    <div class="time">
      <p class="time-item hours">{{ hours }}</p>
      <p class="time-item minutes">{{ minutes }}</p>
      <p class="time-item seconds">{{ seconds }}</p>
    </div>
  </div>
</div>

</template>

<script>
// ゼロパディングとは、書式の桁数に満たない数値の場合に、足りない桁数だけ 0 を追加して桁数を合わせること
const zeroPadding = function(num, digit) {
  return (Array(digit).join('0') + num).slice(-digit)
}

export default {
  // propsとは親コンポーネント(App.vue)から値を受け取るもの App.vueに引数のように値を記述する
  props: ["location", "diff"],

  // コンポーネントの data は関数でなければいけない data: function() {} または data() {}
  data: function() {
    return {
      date: new Date()
    }
  },

  computed: {
    year: function() {
      return this.date.getFullYear()
    },
    month: function() {
      return zeroPadding(this.date.getMonth()+1, 2)
    },
    day: function() {
      return zeroPadding(this.date.getDate(), 2)
    },
    hours: function() {
      return zeroPadding(this.date.getHours(), 2)
    },
    minutes: function() {
      return zeroPadding(this.date.getMinutes(), 2)
    },
    seconds: function() {
      return zeroPadding(this.date.getSeconds(), 2)
    },
  },

  mounted: function() {
    this.setDate()
    // 1秒に1回dateを更新
    setInterval(() => {
      this.setDate()
    }, 1000);
  },

  methods: {
    setDate() {
      this.date = new Date()
      // 親コンポーネントから渡されたdiffを使って時差を加算
      this.date.setHours(this.date.getHours() + this.diff)
    }
  }

}

</script>

<style scoped>
.container {
  background-color: #3a4a5e;
  padding: 2%;
}
.location {
  color: #48b883;
  font-family: 'Teko', sans-serif;
  font-size: 5rem;
  letter-spacing: .05em;
  line-height: 1;
}
.date {
  text-align: right;
  color: #fff;
  font-family: 'Teko', sans-serif;
  font-size: 4rem;
  letter-spacing: .1em;
  margin: .0em 0;
  line-height: 1;
}
.time {
  display: flex;
}
.time-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  height: 100px;
  position: relative;
  z-index: 1;
  padding: 0.5em;
  margin: 3px;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 1;
  background-color: #48b883;
  box-sizing: border-box;
}
.time-item:before {
  position: absolute;
  right: 5px;
  bottom: 1px;
  z-index: 1;
  color: #3a4a5e;
  font-family: 'Teko', sans-serif;
  font-size: 1.4rem;
  letter-spacing: .05em;
}
.hours:before {
  content: "Hours";
}
.minutes:before {
  content: "Minutes";
}
.seconds:before {
  content: "Seconds";
}
</style>
