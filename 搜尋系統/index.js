var post_api_url="http://awiclass.monoame.com/api/command.php?type=get&name=post"

Vue.component("postbox", {
    template: "#post",
    props: [
        "post"
    ],
    computed: {
        coverurl (){
            if (this.post.cover.indexOf("http") != -1){
                return this.post.cover
            }
            else{
                return "http://zashare.org" + this.post.cover
            }
        },
        covercss (){
            return {
                "background-image": "url("+this.coverurl+")"
            }
        }
    }
});

var vm = new Vue({
    el: "#app",
    data: {
        posts: [],
        filter: "夢想"
    },
    mounted: function(){
        var vobj = this;
        $.get(post_api_url).then((res)=>{
            vobj.posts = JSON.parse(res);
        })
    },
    computed: {
        filtered_post (){
            var vobj = this;
            return this.posts.filter((post)=>{
                var flag = false;
                var tag = ["title", "description", "name_short"];
                tag.forEach((tag)=>{
                    if (post[tag].toLowerCase().indexOf(vobj.filter) != -1){
                        flag = true;
                    }
                });
                return flag;
            }).map((post)=>{
                //讓沒有輸入任何字的時候不會有反白效果
                var temp_post = JSON.parse(JSON.stringify(post));

                temp_post.description = temp_post.description.substr(0, 60);

                if (vobj.filter == "") return temp_post;

                var tag = ["title", "description", "name_short"];

                tag.forEach((tag)=>{

                    var match_word = temp_post[tag].match(new RegExp(vobj.filter, "i"));

                    //console.log(match_word);
                    
                    if (match_word){
                        temp_post[tag] = temp_post[tag].replace(new RegExp(vobj.filter, "i"), "<span class='hl'>" + match_word + "</span>");
                    }
                })

                return temp_post;
            })
        }
    }
});