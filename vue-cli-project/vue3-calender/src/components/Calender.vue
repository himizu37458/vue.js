<template>
  <div>
    <h2>カレンダー{{ currentDate }}</h2>
    <button @click="prevMonth">前の月</button>
    <button @click="nextMonth">次の月</button>
    <div style="max-width:900px; border-top:1px solid gray;">
      <div v-for="(week, index) in calenders" :key="index" style="display:flex; border-left:1px solid gray;">
        <div v-for="(day, index) in week" :key="index" style="flex:1; min-height:125px; border-right:1px solid gray; border-bottom:1px solid gray;">{{ day.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  data() {
    return {
      currentDate: moment()
    }
  },
  methods: {
    // カレンダーに表示させる最初の日を取得
    getStartDate() {
      let date = moment(this.currentDate)
      date.startOf("month")
      const youbiNum = date.day()
      return date.subtract(youbiNum, "days")
    },
    // カレンダーに表示させる最後の日を取得
    getEndDate() {
      let date = moment(this.currentDate)
      date.endOf("month")
      const youbiNum = date.day()
      return date.add(6 - youbiNum, "days")
    },
    // カレンダーの日付を保存する
    getCalender() {
      let startDate = this.getStartDate()
      const endDate = this.getEndDate()
      // カレンダーの高さ
      const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7)
      let calenders = []
      for (let week = 0;  week<weekNumber; week++) {
        let weekRow = []
        for (let day = 0; day<7; day++) {
          weekRow.push({
            date: startDate.get("date")
          })
          startDate.add(1, "days")
        }
        calenders.push(weekRow)
      }
      return calenders
    },
    prevMonth() {
      this.currentDate = moment(this.currentDate).subtract(1, "month")
    },
    nextMonth() {
      this.currentDate = moment(this.currentDate).add(1, "month")
    }
  },
  computed: {
    calenders() {
      return this.getCalender()
    }
  },
  mounted() {
    console.log(this.getCalender())
  }
}
</script>
