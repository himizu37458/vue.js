var app = new Vue ({
  el: '#app',
  data: {
    counter: 0,
    message: '',
    nowTime: '',
    escMessage: ''
  },
  methods: {
    // 引数を渡すとそのイベントオブジェクトが取得できる
    clickHandler: function(event) {
      this.counter++
      console.log(event)
      console.log(event.target.tagName)
      console.log(event.target.innerHTML)
      console.log(event.target.type)
    },
    // イベントハンドラに値を渡す
    addMessage: function($event, message) {
      console.log($event)
      this.message = message
    },
    // 現在時間を取得
    addTime: function() {
      this.nowTime = new Date().toLocaleTimeString()
    },
    clear: function() {
      this.escMessage = ''
    },
    alertClick: function() {
      alert('clicked!')
    }
  }
})
