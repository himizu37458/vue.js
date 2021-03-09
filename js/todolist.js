var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    /* todos配列 */
    todos: [],
  },
  methods: {
    addItem : function(event) {
      /* alert(); */
      /* もしvalueが未入力だっった場合、returnで処理を終わらせる */
      if(this.newItem == '') return;
      /* todoオブジェクトを作成 */
      var todo = {
        item: this.newItem,
        /* 真偽値でチェックの有無を判定 */
        isDone: false
      };
      /*  todos配列にtodoを挿入 */
      this.todos.push(todo);
      /*  タスク追加後にinput内を空に戻す */
      this.newItem = '';
    },
    /* 何個目のdeleteボタンかわかるように配列のindexで判別する */
    deleteItem: function(index) {
      /* alert(index); */
      /* jsのspliceメソッドで削除、splice（削除を始めるindex, そこからいくつやるのか） */
      this.todos.splice(index, 1);
    }
  }
})
