(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(3),i=n.n(r),a=(n(12),n(4)),s=n(5),u=n(7),p=n(6),d=(n.p,n(13),n(1)),h=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).state={projects:[{id:0,title:"",description:[],links:[{id:0,type:"",label:"",url:""}],tags:[]}]},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:JSON.stringify(this.state.projects)})}},{key:"componentDidMount",value:function(){var t=this;fetch("https://ybardapurkar-data.herokuapp.com/api/projects",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(t){t.json()})).then((function(e){t.setState({projects:e})}),(function(e){t.setState({error:e})}))}}]),n}(c.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.0ec6d935.chunk.js.map