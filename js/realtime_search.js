var app = new Vue({
  el: '#app',
  data: {
    // APIから取得した検索結果を格納
    items: null,
    // ユーザーが入力した検索キー
    keyword: '',
    // ユーザーに表示するメッセージ
    message: ''
  },
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      // lodashのデバウンス関数を使用
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()

    // lodashのデバウンス関数を使用
    // 指定時間内に同じイベントが発生すると処理は実行されない
    // apiのリクエストを毎回ではなく間引くことができる
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function() {
      // ユーザーの入力がなかった場合、検索結果をnull
      if(this.keyword === '') {
        this.items = null
        this.message = ''
        return
      }

      this.message = 'Loading...'
      // vmは、Vue インスタンスの変数名でViewModelの略 axios内でthisを使用するため変数に代入
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyword}

      // apiデータ取得 getの第二引数に条件のparamを渡す
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response) {
        console.log(response)
        vm.items = response.data
      })
      .catch(function(eror) {
        vm.message = 'Error!' + error
      })
      .finally(function() {
        vm.message = ''
      })
    }
  }
})
