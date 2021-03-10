// グローバルフィルタ
// グローバルフィルタを指定する場合はVueインスタンスより前
// Vue.filter('フィルタ名', フィルタの動作)が構文
Vue.filter('priceFormat', function(value) {
  return value.toLocaleString();
})
Vue.filter('toUSD', function(jpy) {
  return jpy / 100;
})
// フィルタに引数を複数渡す suffixは接尾辞の意味
Vue.filter('readMore', function(text, length, suffix) {
  // substringメソッドで表示数を変えて、最後に接尾辞を付与
  return text.substring(0, length) + suffix;
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    // 値のhtmlを評価したい時はv-htmlを使用
    colorMessage: 'Hello <span style="color:red">Vue.js!</span>',
    number: 100,
    ok: true,
    price: 2980000000000,
    jpyPrice: 123000,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'https://www.youtube.com/watch?v=6EM0NnAD1-g'
  },
  methods: {
    clickhandler: function(event) {
      // 文字列を反転させる
      this.message = this.message.split('').reverse().join('');
    }
  },
  // ローカルフィルタ
  // filters: {
  //   priceFormat: function(value) {
  //     return value.toLocaleString();
  //   }
  // }
})