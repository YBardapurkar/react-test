(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(3),o=n.n(r),s=(n(12),n(4)),a=n(5),u=n(7),p=n(6),f=(n.p,n(13),n(1)),j=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={projects:[{id:0,title:"",description:[],links:[{id:0,type:"",label:"",url:""}],tags:[]}]},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:JSON.stringify(this.state.projects)})}},{key:"componentDidMount",value:function(){var t=this;fetch("/api/projects").then((function(t){return t.json()})).then((function(e){t.setState({projects:e})}),(function(e){t.setState({error:e})}))}}]),n}(c.Component),l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.90281c63.chunk.js.map