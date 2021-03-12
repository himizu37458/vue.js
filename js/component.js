// コンポーネント名はハイフンを１つ以上含むケバブケースを利用する必要がある（htmlタグと衝突しないようにするため）

// グローバル登録のvuecomponentはvueインスタンスの作成より前に以下の構文
// Vue.component('コンポーネントの名前', {コンポーネントの定義})
Vue.component('hello-g-component', {
  // template構文でタグごと挿入できる
  template: '<p>hello-global</p>'
})

// コンポーネントのオプション
// コンポーネントはvueインスタンスと同じためdataオプションやライフサイクルフックやメソッドが定義できる
// しかし、dataなどは関数で定義する必要がある！function(){return}の形でないといけない！
// template構文ないは単要素出なくてはいけない！要素がふたつある場合は、divなどでまとめると使用できる
Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<div><span>count: </span><button v-on:click="count++">{{ count }}</button></div>'
})

// ローカル登録のvuecomponentはvueインスタンスの作成より前に変数として定義してインスタンスの中で呼び出す形
var helloLocalComponent = {
  template: '<p>hello-local</p>'
}

var app = new Vue ({
  el: '#app',
  // ローカルコンポーネントを定義するにはcomponentsオプション
  // 'コンポーネント名' : 定義した変数
  components: {
    'hello-l-component' : helloLocalComponent
  }
})
