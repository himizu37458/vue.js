// 監視プロパティ　ウォッチャ
// 特手のデータまたは算出プロパティの状態を監視して、変化があった時に登録した処理を自動的に実行できるもの
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    km: 0,
    m: 0,
    mm: 0,
    firstName: '',
    lastName: '',
    fullName: '',
    colors: [
      // このネスト部分のオブジェクトを評価するかどうかdeepオプションで指定できる
      {name: 'Red'},
      {name: 'white'},
      {name: 'Blue'}
    ]
  },
  computed: {
    // 名前の出力を算出プロパティで
    makeFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    // messageの値に変化があった時に都度実行される処理
    message: function(newValue, oldValue) {
      // console.logに引数をstringで渡すときは%sを使用
      console.log('new: %s, old: %s', newValue, oldValue);
    },
    // 単位変換のwatch
    km: function(value) {
      this.km = value;
      this.m = value * 1000;
      this.mm = value * 1000000;
    },
    m: function(value) {
      this.km = value / 1000;
      this.m = value;
      this.mm = value * 1000;
    },
    mm: function(value) {
      this.km = value / 1000000;
      this.m = value / 1000;
      this.mm = value;
    },
    // 名前の出力を監視プロパティで
    firstName: function(value) {
      this.fullName = value + ' ' + this.lastName;
    },
    lastName: function(value) {
      this.fullName = this.firstName + ' ' + value;
    },
    colors: {
      // オブジェクト、配列を変更する場合、同じものを参照するため、ハンドラの引数で取得できる古い値は、新しい値と同じになるため注意！
      handler: function(newValue, oldValue) {
        console.log('Update!')
        console.log('new: %s, old: %s',
        // JSON.stringifyはjs値をjson文字列に変更する
        JSON.stringify(newValue, null, '\t'),
        JSON.stringify(oldValue, null, '\t'),)
      },
      // deepオプション trueを指定するとネストされたオブジェクトも監視する、falseまたはdeepを記述しないとネスト内のオブジェクトは監視されない
      deep: true,
      // immediateオプション 初期読み込み時にも監視プロパティを呼び出す（上のconsole.logが実行される）
      immediate: true
    },
  }
})
