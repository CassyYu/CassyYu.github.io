(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(7),a=c.n(r),i=c(2),o=c(3),l=c(5),s=c(4),h=c(8),u=(c(13),c(0)),d=function(e){Object(l.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleKeyUp=function(t){var c=t.keyCode,n=t.target;if(13===c){if(""===n.value.trim())return alert("\u8f93\u5165\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"),void(n.value="");e.props.addChoice(n.value),n.value=""}},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.choices,c=e.clearAll;return Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("h2",{children:"Write Down Choices"}),Object(u.jsx)("input",{className:"input",type:"text",placeholder:"Please input your choice",onKeyUp:this.handleKeyUp}),Object(u.jsx)("ul",{className:"list",children:t.map((function(e){return Object(u.jsxs)("li",{style:{backgroundColor:e.color},children:["\xa0",e.value]},e.id)}))}),Object(u.jsx)("button",{onClick:c,children:"Clear"})]})}}]),c}(n.Component),j=(c(15),function(e){Object(l.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={timerId:null,currentChoosenId:-1},e.handleClickStart=function(){var t=e.props.choices;if(0!==t.length){if(null===e.state.timerId){var c=0,n=setInterval((function(){e.setState({currentChoosenId:c++%t.length})}),200);e.setState({timerId:n}),console.log(1)}}else alert("\u65e0\u9009\u9879")},e.handleClickStop=function(){clearInterval(e.state.timerId),e.setState({timerId:null})},e}return Object(o.a)(c,[{key:"renderCurrent",value:function(){var e=this.props.choices,t=this.state.currentChoosenId;if(0===e.length||-1===t)return Object(u.jsx)("div",{className:"final-choice",style:{backgroundColor:"#ddd"},children:Object(u.jsx)("div",{className:"final-choice-text",children:"\u70b9\u51fbStart\u5f00\u59cb"})});var c=e[t],n=c.value,r=c.color;return Object(u.jsx)("div",{className:"final-choice",style:{backgroundColor:r},children:Object(u.jsx)("div",{className:"final-choice-text",children:n})})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"right",children:[Object(u.jsx)("h2",{className:"right-header",children:"Your Final Choice"}),Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)("button",{className:"start",onClick:this.handleClickStart,children:"Start"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"stop",onClick:this.handleClickStop,children:"Stop"})]}),this.renderCurrent()]})}}]),c}(n.Component)),b=(c(16),function(e){Object(l.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={choices:[]},e.addChoice=function(t){var c="0123456789abcdefg",n="#"+c[Date.now()%16]+c[Date.now()%13]+c[Date.now()%10],r={id:Date.now(),value:t,color:n};e.setState((function(e){var t=e.choices;return{choices:[].concat(Object(h.a)(t),[r])}}))},e.clearAll=function(){0!==e.state.choices.length?window.confirm("\u786e\u5b9a\u5168\u90e8\u6e05\u695a\u5417\uff1f")&&e.setState({choices:[]}):alert("\u65e0\u9009\u9879")},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.choices;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Get Your Choice"}),Object(u.jsx)(d,{choices:e,addChoice:this.addChoice,clearAll:this.clearAll}),Object(u.jsx)(j,{choices:e})]})}}]),c}(n.Component)),v=function(e){Object(l.a)(c,e);var t=Object(s.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{})})}}]),c}(n.Component);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.083990c2.chunk.js.map