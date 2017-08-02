var items = [
    {
        "name": "三色時蔬蛋炒飯",
        "price": 160,
        "discount": 0.9,
        "content": "冷凍蔬菜加上秘傳醬料做成的炒飯",
        "img": "img/6.jpg",
        equipment: {
            shipping: false
        }
    },
    {
        "name": "茶山牛肉麵",
        "price": 510,
        "discount": 0.4,
        "content": "用高級牛骨去熬七七四十九天",
        "img": "img/3.jpg",
        equipment: {
            shipping: false
        }
    },
    {
        "name": "奶油餅(10塊)",
        "price": 300,
        "discount": 0.7,
        "content": "裡面包的奶油香香甜甜",
        "img": "img/5.jpg",
        equipment: {
            shipping: true
        }
    },
    {
        "name": "珍珠奶茶",
        "price": 60,
        "discount": 0.3,
        "content": "台灣特產飲料",
        "img": "img/2.jpg",
        equipment: {
            shipping: true
        }
    },
    {
        "name": "法國麵包",
        "price": 250,
        "discount": 0.5,
        "content": "長棍麵包",
        "img": "img/4.jpg",
        equipment: {
            shipping: false
        }
    },
    {
        "name": "苦茶",
        "price": 300,
        "discount": 0.8,
        "content": "雖然很苦 但是對身體很健康的茶",
        "img": "img/1.jpg",
        equipment: {
            shipping: true
        }
    }
];

Vue.component("item", {
    template: "#item",
    props: [
        "item_data",
        "id",
        "del_item"
    ],
    computed: {
        dis (){
            return this.item_data.discount * 10
        },
        total (){
            return this.item_data.price * this.item_data.discount
        },
        item_image (){
            return {
                "background-image": "url('"+this.item_data.img+"')"
            }
        },
        item_content (){
            return this.item_data.content
        }
    }
});

var it = new Vue({
    el: "#app",
    data: {
        items: items,
        edit_id: 0,
        filter: ""
    },
    methods: {
        add_item (){
            this.items.push({
                "name": "新商品",
                "price": 0,
                "discount": 0,
                "content": "",
                "img": "",
                equipment: {
                    shipping: true
                }
            });

            this.edit_id = this.items.length - 1;
        },
        del_item: (id)=>{
            this.items.splice(id, 1);
            if (this.edit_id > id){
                this.edit_id--;
            }
            else if (this.items.length == 0){
                this.items.push({
                    "name": "新商品",
                    "price": 0,
                    "discount": 0,
                    "content": "",
                    "img": "",
                    equipment: {
                        shipping: true
                    }
                });
            }
        }
    },
    computed: {
        filtered_item (){
            var itemobj = this;
            return this.items.filter((item)=>{
                var tag = ["name", "content"];
                var hasright = false;
                tag.forEach((tag)=>{
                    if (item[tag].toLowerCase().indexOf(itemobj.filter) != -1){
                        hasright = true;
                    }
                });
                return hasright;
            }).map((item)=>{
                item.content = item.content.substr(0, 10);
                
                item.name = item.name.replace(itemobj.filter, "<span class='hl'>" + itemobj.filter + "</span>");
                
                return item;
            })
        }
    }
});