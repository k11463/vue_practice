var rooms = [
    {
        "name": "經濟雙人房",
        "price": 7000,
        "amount": 0,
        "cover": "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
        "discount": 0.81,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "溫泉高級房",
        "price": 6600,
        "amount": 0,
        "cover": "http://images.travelnow.com/hotels/6000000/5070000/5061800/5061738/5061738_336_z.jpg",
        "discount": 0.96,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "蠢牛幹話房",
        "price": 5300,
        "amount": 0,
        "cover": "http://pic.pimg.tw/serena888/5cb6915c6553bd3c956eab2bff564832.jpg?v=1304495521",
        "discount": 0.75,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "海陸特級房",
        "price": 8900,
        "amount": 0,
        "cover": "https://i.ytimg.com/vi/B_be9gCx0K0/maxresdefault.jpg",
        "discount": 0.66,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "霸王總統房",
        "price": 11000,
        "amount": 0,
        "cover": "http://blog.taiwan66.com.tw/wp-content/uploads/HLIC/600xNxb2b19bfa4467ccaa6035b25bc055b0ec.jpg.pagespeed.ic.0l6h-jjEz2.jpg",
        "discount": 0.39,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "商業菁英房",
        "price": 14400,
        "amount": 0,
        "cover": "http://pic.pimg.tw/naunausu128/1376323071-2357140689_l.jpg",
        "discount": 0.95,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "家庭歡樂房",
        "price": 2350,
        "amount": 0,
        "cover": "https://i.ytimg.com/vi/fc5LZhYW3iA/maxresdefault.jpg",
        "discount": 0.73,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    }
];

Vue.component("room", {
    template: "#room",
    props: ["roomdata", "hotel_service_price"],
    computed: {
        dis: function () {
            return parseInt(this.roomdata.discount * 100);
        },
        final_price: function () {
            return parseInt((this.roomdata.price * this.hotel_service_price) + (this.roomdata.price * this.roomdata.discount));
        },
        hotel_picture: function () {
            return {
                "background-image": "url('" + this.roomdata.cover + "')"
            }
        }
    }
});

var vm = new Vue({
    el: "#app",
    data: {
        rooms: rooms,
        service_price: 0.1
    },
    methods: {
        addroom: function(){
            this.rooms.push({
                "name": "新增房間",
                "price": 0,
                "amount": 0,
                "cover": "",
                "discount": 0,
                "equipment": {
                    "wifi": false,
                    "bathtub": true,
                    "breakfast": true
                }
            })
        }
    }
});