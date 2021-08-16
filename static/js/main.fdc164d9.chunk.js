(this.webpackJsonpanimalgame=this.webpackJsonpanimalgame||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n.n(a),s=(n(28),n(22)),c=n(2),i=n(7),l=n(8),o=n(10),h=n(9),j=n(1),d=n.n(j),u=n(17),m=n(0);var b=function(e){var t="".concat(window.location.pathname,"/").concat(e.id,".png");return Object(m.jsx)("div",{className:"animal",onClick:e.onClick,children:Object(m.jsx)("img",{src:t})})};var p=function(e){return Object(m.jsx)("div",{className:"player",onClick:e.onClick,children:Object(m.jsx)("img",{src:"/playButton.png"})})},O=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderAnimal",value:function(e){var t=this;return this.props.items[e]?Object(m.jsx)(b,{onClick:function(){t.props.onAnimalClick(e)},id:e}):Object(m.jsx)("div",{className:"animal"})}},{key:"renderPlayer",value:function(e){var t=this;return this.props.items[e]?Object(m.jsx)(p,{onClick:function(){t.props.onPlayerClick(e)}}):Object(m.jsx)("div",{className:"player"})}},{key:"render",value:function(){var e,t=[],n=[],a=Object(u.a)(this.props.animalsOrder);try{for(a.s();!(e=a.n()).done;){var r=e.value;t.push(this.renderAnimal(r))}}catch(h){a.e(h)}finally{a.f()}var s,c=Object(u.a)(this.props.playersOrder);try{for(c.s();!(s=c.n()).done;){var i=s.value;n.push(this.renderPlayer(i))}}catch(h){c.e(h)}finally{c.f()}for(var l=[],o=[];t.length;)l.push(t.splice(0,4)),o.push(n.splice(0,4));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"players-block",children:o.map((function(e){return Object(m.jsx)("div",{className:"row",children:e})}))}),Object(m.jsx)("div",{className:"animals-block",children:l.map((function(e){return Object(m.jsx)("div",{className:"row",children:e})}))})]})}}]),n}(j.Component),f=n(18),v=n(21),x=n.n(v),y={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0},k=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).makeShot=function(e,t){a.animationInstance&&a.animationInstance(Object(f.a)(Object(f.a)({},t),{},{origin:{y:.7},particleCount:Math.floor(200*e)}))},a.fire=function(){a.makeShot(.25,{spread:26,startVelocity:55}),a.makeShot(.2,{spread:60}),a.makeShot(.35,{spread:100,decay:.91,scalar:.8}),a.makeShot(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),a.makeShot(.1,{spread:120,startVelocity:45})},a.getInstance=function(e){a.animationInstance=e},a.animationInstance=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fire()}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(x.a,{refConfetti:this.getInstance,style:y})})}}]),n}(d.a.Component),w=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={renderGame:!1,canRenderGame:a.props.canRenderGame},a}return Object(l.a)(n,[{key:"changeRender",value:function(){this.setState({renderGame:!0})}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.canRenderGame?Object(m.jsx)("a",{onClick:function(){e.changeRender()},className:"button",children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"}):null;return this.state.renderGame?Object(m.jsx)(C,{level:2,rows:this.props.rows}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsxs)("center",{children:[Object(m.jsx)("a",{href:"/",className:"button",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(m.jsx)("a",{href:window.location.pathname,className:"button",children:"\u0417\u0430\u043d\u043e\u0432\u043e"}),t]})]})}}]),n}(j.Component);function g(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e}var C=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(i.a)(this,n);var r=4*e.rows;a=t.call(this,e);for(var s=[],c=0;c<r;c++)s.push(c);for(var l=[],o=0;o<r;o++)l.push(o);return s=g(s),l=g(l),a.state={itemIsSelected:!1,selectedId:null,items:Array(r).fill(!0),animalsOrder:s,playersOrder:l,level:a.props.level},a}return Object(l.a)(n,[{key:"gameIsOver",value:function(){return!this.state.items.includes(!0,0)}},{key:"handlePlayerClick",value:function(e){var t=this;new Audio("".concat(window.location.pathname,"/").concat(this.state.level,"/").concat(e,".mp3")).play(),this.setState((function(n){return{itemIsSelected:!0,selectedId:e,items:t.state.items}}))}},{key:"handleAnimalClick",value:function(e){var t=this;this.state.itemIsSelected&&(this.state.selectedId===e?(new Audio("correct.mp3").play(),this.setState((function(n){var a=t.state.items;return a[e]=!1,{itemIsSelected:!1,selectedClass:null,items:a}}))):(new Audio("incorrect.mp3").play(),this.setState((function(e){return{itemIsSelected:!0,selectedClass:null,items:t.state.items}}))))}},{key:"render",value:function(){var e=this;return this.gameIsOver()?Object(m.jsx)(w,{canRenderGame:2!==this.state.level,rows:this.props.rows}):Object(m.jsx)("div",{children:Object(m.jsx)(O,{items:this.state.items,onPlayerClick:function(t){return e.handlePlayerClick(t)},onAnimalClick:function(t){return e.handleAnimalClick(t)},animalsOrder:this.state.animalsOrder,playersOrder:this.state.playersOrder,rows:this.props.rows})})}}]),n}(j.Component),I=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("center",{children:[Object(m.jsx)("a",{href:"/wild",className:"button",children:"\u0414\u0438\u043a\u0438\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435"}),Object(m.jsx)("a",{href:"/home",className:"button",children:"\u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435"}),Object(m.jsx)("a",{href:"/homebirds",className:"button",children:"\u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0435 \u043f\u0442\u0438\u0446\u044b"}),Object(m.jsx)("a",{href:"/wildbirds",className:"button",children:"\u0414\u0438\u043a\u0438\u0435 \u043f\u0442\u0438\u0446\u044b"})]}),Object(m.jsx)("center",{children:Object(m.jsx)("img",{src:"logo.png",className:"logo"})})]})},N=function(){return Object(m.jsx)(s.a,{children:Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{exact:!0,path:"/",children:Object(m.jsx)(I,{})}),Object(m.jsx)(c.a,{path:"/wild",children:Object(m.jsx)(C,{level:1,rows:1})}),Object(m.jsx)(c.a,{path:"/home",children:Object(m.jsx)(C,{level:1,rows:2})}),Object(m.jsx)(c.a,{path:"/wildbirds",children:Object(m.jsx)(C,{level:1,rows:2})}),Object(m.jsx)(c.a,{path:"/homebirds",children:Object(m.jsx)(C,{level:1,rows:1})})]})})};function S(e){return Object(m.jsx)(N,{})}r.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.fdc164d9.chunk.js.map