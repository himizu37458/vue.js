/* 基本 */
/* vuecomponentはvueインスタンスの作成より前 */
/* 構文 */
/* Vue.component('コンポーネントの名前', {コンポーネントの定義}) */
/* Vue.component('hello-component', { */
  /* template構文でタグごと挿入できる */
 /*  template: '<p>hello</p>'
  })

  vueインスタンスの作成
  var app = new Vue({ */
  /* オプション:値 */
  /* el: '#app',
  data: {
   dataオプションの中はプロパティ:値
      message: 'Hello Vue.js!',
    count: 0,
    オブジェクトの作成 key: value
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo'
    },
    配列の作成
    colors: ['Red', 'Green', 'Blue'],
    toggle: true,
    now: ''
  },
  イベントハンドラはmethodsオプションに記述する
  methods: {
    onclick関数を作成
      onclick: function() {
        data内のnowを指定して、時刻をいれる
        this.now = new Date().toLocaleString();
      }
    }
  }) */

/*   演習 */
/* var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    languages: ['Javascript', 'Ruby', 'Python'],
  },
  methods: {
    onclick: function() {
      this.message = 'Clicked!'
    }
  }
}) */
