// 算出プロパティ computed
// 関数によって算出したデータを返すことができるプロパティ

// computedとmethodsの違い
// ①computedはプロパティのため()が不要 / methodsはメソッドののため()が必要
// ②computedはgetter,setter / methodsはgetter
// ③computedはキャッシュさせる / methodsはキャッシュされない
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    basePrice: 100,
  },
  methods: {
    // 文字反転のメソッド
    reversedMessageMethods: function() {
      return this.message.split('').reverse().join('');
    },
    // ランダム数字を表示するメソッド
    // キャッシュされないため違う数字が表示される＋コンソールは毎回
    randomNumberMethods: function() {
      console.log('methods!');
      return Math.random();
    }
  },
  computed: {
    // 文字反転の算出プロパティ
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    },
    // 税込、税抜きの算出プロパティ
    // getterとsetterの書き方
    // getとsetは「値の取得」と「値の変更」をするための処理
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    },
    // ランダム数字を表示する算出プロパティ
    // キャッシュされるため同じ数字が表示される＋コンソールは一回
    randomNumberComputed: function() {
      console.log('computed');
      return Math.random();
    }
  },
})
