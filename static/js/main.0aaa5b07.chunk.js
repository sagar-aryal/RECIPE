(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{51:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(20),a=c.n(n),i=(c(51),c(100)),r=c(101),j=c(9),o=c.p+"static/media/home.90cf7479.jpg",d=c(1),l=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(i.a,{className:"header",collapseOnSelect:!0,expand:"sm",bg:"primary",variant:"dark",fixed:"top",children:[Object(d.jsx)(i.a.Brand,{children:Object(d.jsx)("h1",{children:Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("img",{src:o,alt:"about"})})})}),Object(d.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(i.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(d.jsxs)(r.a,{children:[Object(d.jsxs)(j.b,{className:"nav-link",to:"/",children:[Object(d.jsx)("i",{className:"fas fa-home"})," Home"]}),Object(d.jsxs)(j.b,{className:"nav-link",to:"/about",children:[Object(d.jsx)("i",{className:"fas fa-address-book"})," About"]}),Object(d.jsxs)(j.b,{className:"nav-link",to:"/recipes",children:[Object(d.jsx)("i",{className:"fas fa-utensils"})," Recipes"]}),Object(d.jsxs)(j.b,{className:"nav-link",to:"/create",children:[Object(d.jsx)("i",{className:"fab fa-wpforms"})," Create"]})]})})]})})},b=c(4),h=c.p+"static/media/home.47331472.mp4",u=function(){return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsxs)("div",{className:"caption",children:[Object(d.jsx)("h2",{children:"Nothing Brings You Together Like Good Food"}),Object(d.jsx)("h3",{children:"Explore your choices"}),Object(d.jsx)(j.b,{to:"/recipes",className:"btn",children:"Explore"})]}),Object(d.jsx)("video",{loop:!0,muted:!0,autoPlay:!0,preload:"auto",children:Object(d.jsx)("source",{src:h,type:"video/mp4"})})]})},m=function(){return Object(d.jsx)("div",{className:"about",children:Object(d.jsx)("p",{children:"This is my final project for my course React Basics which was organised by Helsinki Business Collage for group REACT21K. This includes all the major topics taught during the course period. Major topics include React components, hooks, event handlers, conditional rendering, lists and keys, forms, routing, get and post method with database, React CSS, React UI and how to deployment react app."})})},p=c(19),O=c(16),x=c.n(O),f=function(e){var t=e.link,c=e.name,s=e.image,n=Object(b.h)().path;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:s,alt:c}),Object(d.jsx)("hr",{}),Object(d.jsx)("b",{children:c}),Object(d.jsx)("hr",{}),Object(d.jsx)(j.b,{to:"".concat(n,"/").concat(t),className:"button",children:"See Details"})]})},g=function(e){var t=e.recipes;return Object(d.jsx)("div",{className:"list-container",children:t.map((function(e){return Object(d.jsx)(f,{name:e.name,image:e.image,description:e.description,ingredients:e.ingredients,video:e.video,link:e.id},e.id)}))})},v=c(46),N=c.n(v),y=function(){var e=Object(s.useState)(),t=Object(p.a)(e,2),c=t[0],n=t[1],a=Object(b.g)().id,i=Object(b.f)();return Object(s.useEffect)((function(){x.a.get("https://nameless-brushlands-31685.herokuapp.com/recipes/".concat(a)).then((function(e){var t=e.data;"string"===typeof t.ingredients&&(t.ingredients=t.ingredients.split(",")),n(t)}))}),[]),Object(d.jsx)("div",{className:"recipe-container",children:c&&c.ingredients.length&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"recipe",children:[Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("h3",{className:"name",children:c.name}),Object(d.jsxs)("h4",{children:["Have you ever heard of ",c.name," ",Object(d.jsx)("i",{className:"far fa-hand-point-down"})]}),Object(d.jsx)("p",{children:c.description}),Object(d.jsx)("img",{src:c.image,alt:c.name})]}),Object(d.jsxs)("div",{className:"ingredients",children:[Object(d.jsxs)("h4",{children:["List of Ingredients ",Object(d.jsx)("i",{className:"far fa-hand-point-down"})]}),Object(d.jsx)("ul",{children:c.ingredients.map((function(e){return Object(d.jsx)("li",{children:e})}))})]}),Object(d.jsxs)("div",{className:"instructions",children:[Object(d.jsxs)("h4",{children:["Instructions ",Object(d.jsx)("i",{className:"far fa-hand-point-down"})]}),Object(d.jsx)(N.a,{className:"video",url:c.video,width:"100%"})]})]}),Object(d.jsx)("button",{type:"button",onClick:function(){return i.goBack()},children:"Get Back"})]})})},k=function(e){var t=e.onChange;return Object(d.jsx)("form",{className:"search",children:Object(d.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search...",onChange:t})})},C=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(" "),i=Object(p.a)(a,2),r=i[0],j=i[1],o=Object(b.h)(),l=o.path,h=o.url;Object(s.useEffect)((function(){x.a.get("http://localhost:3001/recipes").then((function(e){n(e.data)}))}),[]),Object(s.useEffect)((function(){x.a.get("https://nameless-brushlands-31685.herokuapp.com/recipes").then((function(e){n(e.data)}))}),[]);var u=c.filter((function(e){return" "===r||e.name.toLowerCase().includes(r.toLowerCase())?e:void 0}));return Object(d.jsx)("div",{children:Object(d.jsxs)(b.c,{children:[Object(d.jsxs)(b.a,{exact:!0,path:l,children:[Object(d.jsx)(k,{onChange:function(e){j(e.target.value)}}),Object(d.jsx)(g,{recipes:u})]}),Object(d.jsx)(b.a,{path:"".concat(h,"/:id"),children:Object(d.jsx)(y,{})})]})})},w=c(21),S=c(29),R=function(){var e=Object(s.useState)({name:"",image:"",description:"",ingredients:"",video:""}),t=Object(p.a)(e,2),c=t[0],n=t[1],a=function(e){n(Object(S.a)(Object(S.a)({},c),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{className:"create ",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("https://nameless-brushlands-31685.herokuapp.com/recipes",c).then((function(){return x.a.get("https://nameless-brushlands-31685.herokuapp.com/recipes")})).then((function(e){return n(e.data)})),e.target.reset()},children:[Object(d.jsxs)("div",{class:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",onChange:a,required:!0})]}),Object(d.jsxs)("div",{class:"form-group",children:[Object(d.jsx)("label",{htmlFor:"description",children:"Description"}),Object(d.jsx)("input",{type:"text",name:"description",id:"description",onChange:a,required:!0})]}),Object(d.jsxs)("div",{class:"form-group",children:[Object(d.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(d.jsx)("input",{type:"url",name:"image",id:"image",onChange:a,required:!0})]}),Object(d.jsxs)("div",{class:"form-group",children:[Object(d.jsx)("label",{htmlFor:"ingredients",children:"Ingredients"}),Object(d.jsx)("input",{type:"text",name:"ingredients",id:"ingredients",onChange:a,required:!0})]}),Object(d.jsxs)("div",{class:"form-group",children:[Object(d.jsx)("label",{htmlFor:"video",children:"Video URL"}),Object(d.jsx)("input",{type:"url",name:"video",id:"video",onChange:a,required:!0})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"Create"})})]})})},B=function(){return Object(d.jsx)("main",{className:"main",children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",component:u}),Object(d.jsx)(b.a,{path:"/about",component:m}),Object(d.jsx)(b.a,{path:"/recipes",component:C}),Object(d.jsx)(b.a,{path:"/create",component:R})]})})},E=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{children:"copyrights @SagarAryal2021"})})};var F=function(){return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{}),Object(d.jsx)(B,{}),Object(d.jsx)(E,{})]})})};c(96);a.a.render(Object(d.jsx)(F,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.0aaa5b07.chunk.js.map