(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:"1",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060"},{id:"2",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Crying_Face_Emoji_large.png?v=1480481052"},{id:"3",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Wink_Emoji_2_large.png?v=1542436005"},{id:"4",image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Face_With_Rolling_Eyes_Emoji.png?9898922749706957214"},{id:"5",image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Heart_Eyes_Emoji.png?8026536574188759287"},{id:"6",image:"https://cdn.shopify.com/s/files/1/1061/1924/products/Tongue_Out_Emoji_with_Tightly_Closed_Eyes_6ede74f1-0017-45cb-8030-114298f60f5f_large.png?v=1480481057"},{id:"7",image:"https://www.redwoodfalls.org/wp-content/uploads/2017/06/sunglass-emoji.png"},{id:"8",image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585"},{id:"9",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGft7po_XTUck6VaO2OqpoiK1MguTpVZXXK4KO48wGsVuJtws"},{id:"10",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWvPQhG2gwVgoND-z6XWgvFLFlT5YOwbWYWK9gNveyeArjCnT"},{id:"11",image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558b"},{id:"12",image:"http://cdn.shopify.com/s/files/1/1061/1924/products/Hungry_Face_Emoji_grande.png?v=1480481053"}]},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),o=a.n(i),r=(a(15),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),d=(a(17),{color:"white",padding:"20px"});var p=function(e){return c.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-primary"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game"),c.a.createElement("ul",{className:"navbar-nav mx-auto"},c.a.createElement("li",{className:"nav-item",style:d},e.result),c.a.createElement("li",{className:"nav-item",style:d},"Your score: ",e.currentScore),c.a.createElement("li",{className:"nav-item",style:d},"Top score: ",e.topScore)))};var g=function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-3"},"Clicky Game!"),c.a.createElement("p",{className:"lead"},"Click on an emoji to earn points, but don't click on any more than once!")))};var h=function(e){return c.a.createElement("span",{id:e.id,onClick:function(){return e.onClick(e.id)},value:e.id},c.a.createElement("img",{src:e.image,width:"75",alt:"emoji"}))},f=a(1),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={Icons:f,currentScore:0,topScore:0,result:"",clicked:[],gameOver:!1},a.handleClick=function(e){a.state.clicked.includes(e)?a.resetGame():(a.state.clicked.push(e),a.pointIncrease(),a.setState({gameOver:!1}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click an emoji to get started!"})}},{key:"pointIncrease",value:function(){var e=this.state.currentScore+1;e===this.state.Icons.length?this.setState({result:"You win! Start clicking to play again!",topScore:e,currentScore:0,clicked:[],Icons:f,gameOver:!1}):e>this.state.topScore?this.setState({topScore:e,currentScore:e,result:"You guessed correctly! New high score!"}):this.setState({currentScore:e,result:"You guessed correctly!"}),this.resetIconArray()}},{key:"resetGame",value:function(){this.setState({currentScore:0,topScore:this.state.topScore,result:"You guessed incorrectly! You lose!",clicked:[],Icons:f,gameOver:!0}),this.resetIconArray()}},{key:"resetIconArray",value:function(){var e=function(e){for(var t=e.length;t>0;){var a=Math.floor(Math.random()*t),n=e[--t];e[t]=e[a],e[a]=n}return e}(f);this.setState({Icons:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(p,{currentScore:this.state.currentScore,topScore:this.state.topScore,result:this.state.result}),c.a.createElement(g,null),this.state.Icons.map(function(t){return c.a.createElement(h,{key:t.id,id:t.id,image:t.image,onClick:e.handleClick})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.5ee4d3fc.chunk.js.map