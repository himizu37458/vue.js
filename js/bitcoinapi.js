var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  // created, mountedはライフサイクルフックと呼ばれ、vue.jsの初期化の中の決められたタイミングで実行される関数。
  // APIなどを利用して外部からデータを取得してブラウザに表示させたい場合は、ライフサイクルフックの中に外部からデータを取得できるaxios、fetchを利用してデータ取得のプログラムを記述。ライフサイクルフックの中にデータ取得のプログラムを記述することでvue.jsの起動中にデータの取得を開始し取得が完了するとブラウザにそのデータ内容を表示させることができる。
  mounted: function() {
    // axios.getでAPIデータ取得
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //  axio.thenでデータを使用 responseにデータの戻り値が入っている
    .then(function(response) {
      //  console.log(response.data.bpi.USD.rate_float); USDのレートが取得できている
      // bpiプロパティにbpiのデータを挿入
      this.bpi = response.data.bpi;
      //.bind(this)は、windowオブジェクトではなくvueインスタンスのbpiを参照させるために必要=thisの意味合いが変わってくるため必要
    }.bind(this))
    //  axios.catch(function(error){})で通信エラーがあった場合の補足
    .catch(function(error){
      // console.log(error);
      // errorがあった時hasErrorの値を変更し、v-ifで出力文を変更する
      this.hasError = true;
    }.bind(this))
    // axios.finallyは通信に関する全ての処理が終わったら呼び出される
    .finally(function(){
      this.loading = false;
    }.bind(this))
  },
  // filtersオプションでテキストフォーマットに変更を加えられる
  filters: {
    // フィルターの関数を作成
    currencyDecimal(value) {
      // toFixedメソッドで小数点以下を２桁に
      return value.toFixed(2);
    }
  }
})
