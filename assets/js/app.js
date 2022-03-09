// const { default: Vue } = require("vue");




var vm = new Vue({
    el: '#program',
    data: {
      categories: [
       {imgUrl:'assets/images/c-trend.jpg', body: 'トレンドスタイルや技術のこだわりをご紹介',  title: 'トレンド'},
       {imgUrl:'assets/images/c-study.jpg', body: '技術や理論、実験などの学びを提供',  title: 'スタディ'},
       {imgUrl:'assets/images/c-reality.jpg', body: 'インタビューや密着など「リアルを配信」',  title: 'リアリティ'},
       {imgUrl:'assets/images/c-variety.jpg', body: '色々な企画の対談やバトルなどを配信',  title: 'バラエティ'},
       {imgUrl:'assets/images/c-special.jpg', body: '感性を刺激する特別な映像を配信',  title: 'スペシャル'},
       {imgUrl:'assets/images/c-entertainment.jpg', body: 'ヘアショーやイベント映像を配信',  title: 'エンターテインメント'},
       {imgUrl:'assets/images/c-kamicharisma.jpg', body: 'KAMI CHARISMAの授賞式等の関連画像を紹介',  title: 'カミカリスマ'},
      ]
    }
  });
