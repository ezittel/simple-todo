(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),l=(n(24),n(7)),i=n(3),d=function(e){var t=e.todo,n=t.completed,r=t.id,c=t.title;return Object(a.useEffect)((function(){return function(){alert("item about to be deleted")}}),[]),o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.handleChangeProps(r)}}),o.a.createElement("button",{onClick:function(){return e.deleteTodoProps(r)}},"Delete"),o.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},c))},u=function(e){return o.a.createElement("div",null,e.todos.map((function(t){return o.a.createElement(d,{key:t.id,todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps})})))},m=function(e){var t=Object(a.useRef)(!0);return Object(a.useEffect)((function(){var e="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";t.current?t.current=!1:document.getElementById("inH1").style.color=e}),[e.headerSpan]),o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},o.a.createElement("span",{id:"inH1"},"Sample dodo App ")),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},s=n(5),p=n(6),f=function(e){var t=Object(a.useState)({title:""}),n=Object(i.a)(t,2),r=n[0],c=n[1];return o.a.createElement("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),e.addTodoProps(r.title),c({title:""})}},o.a.createElement("input",{className:"input-text",name:"title",type:"text",placeholder:"Add dodo...",value:r.title,onChange:function(e){c(Object(p.a)(Object(p.a)({},r),{},Object(s.a)({},e.target.name,e.target.value)))}}),o.a.createElement("input",{className:"input-submit",type:"submit",value:"Add It!"}))},h=n(18),b=n.n(h),E=n(44),g=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],d=Object(a.useState)(!1),s=Object(i.a)(d,2),p=s[0],h=s[1];return Object(a.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return c(e.data)}))}),[]),o.a.createElement("div",{className:"container"},o.a.createElement(m,{headerSpan:p}),o.a.createElement(f,{addTodoProps:function(e){var t={id:Object(E.a)(),title:e,completed:!1};c([].concat(Object(l.a)(r),[t]))}}),o.a.createElement(u,{todos:r,handleChangeProps:function(e){c(r.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))),h(!p)},deleteTodoProps:function(e){c(Object(l.a)(r.filter((function(t){return t.id!==e}))))}}))};c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5e7a0d2a.chunk.js.map