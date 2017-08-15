var items = [
  {
    "title": "美少女1",
    "description": "水喔",
    "cover": "http://comic.people.com.cn/NMediaFile/2013/1024/MAIN201310241547000162636055073.jpg"
  },
  {
    "title": "美少女2",
    "description": "讚喔",
    "cover": "http://www.cnii.com.cn/internetnews/img/attachement/jpg/site2/20131029/00016c58d8d513d9712701.jpg"
  },
  {
    "title": "美少女3",
    "description": "好棒喔",
    "cover": "https://pbs.twimg.com/media/AyuP2sbCUAESK8d.jpg"
  },
  {
    "title": "美少女4",
    "description": "喔~",
    "cover": "http://www.cnii.com.cn/internetnews/img/attachement/jpg/site2/20131029/00016c58d8d513d970713b.jpg"
  },
  {
    "title": "美少女5",
    "description": "不行了~",
    "cover": "http://images.ali213.net/picfile/pic/2012-07-05/584_xiaoh42.jpg"
  }
]

var vm = new Vue({
  el: "#app",
  data: {
    items: items,
    now_index: 0,
    span: 1630
  },
  computed: {
    mv_left (){
      var result = {
        "left": (-this.span * this.now_index) + "px"
      };
      //console.log(result);
      return result;
    }
  },
  methods: {
    total (index){
      // 0 1 2 3 4 len=5
      // 4 -> 0 4在按一次變成5 = 5(leng)%5 = 0
      // 0 -> 4 0在按一次變成-1 = -1(leng)+5 = 4
      // (5(leng) + id) % 5 => id=1  -> 5+1 % 5 = 1
      //                       id=-1 -> 5-1 % 5 = 4
      this.now_index = (this.now_index + index + this.items.length)
                        % this.items.length;
    },
    img (url){
      return {
        "background-image": "url(" + url + ")"
      }
    }
  }
})
