(this.webpackJsonpitemcart=this.webpackJsonpitemcart||[]).push([[0],{14:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(2),r=a.n(c),o=a(5),i=a.n(o),l=a(4),s=a.n(l),d=a(6),u=a(7);function j(t){var e=t.item,a=t.index,c=t.dispatch;return Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(n.jsxs)("div",{style:{display:"flex",margin:"2rem"},children:[Object(n.jsx)("img",{src:e.img,style:{height:"10rem"}}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{style:{textTransform:"capitalize"},children:e.title}),Object(n.jsxs)("h4",{children:["$",e.price]}),Object(n.jsx)("button",{style:{background:"transparent",border:"none",cursor:"pointer"},onClick:function(){c({type:"REMOVE_ITEM",payload:a})},children:"Remove"})]})]}),Object(n.jsxs)("div",{style:{margin:"2rem"},children:[Object(n.jsx)("button",{style:{backgroundColor:"blue"},onClick:function(){return c({type:"ADD_SINGLE_ITEM",payload:a})},children:"Inc."}),Object(n.jsx)("h3",{children:e.amount}),Object(n.jsx)("button",{style:{backgroundColor:"red"},onClick:function(){return c({type:"DECREASE_SINGLE_ITEM",payload:a})},children:"Dec."})]})]},a)}var b=a(1);function p(t){var e=0;return t.map((function(t){var a=t.price*t.amount;e+=a})),void 0===e&&console.log("72"),e=parseFloat(e.toFixed(2)),console.log(t,e),e}var h=function(t,e){switch(e.type){case"REMOVE_ITEM":var a=t.data[e.payload].amount,n=t.data.filter((function(t,a){return a!==e.payload}));return Object(b.a)(Object(b.a)({},t),{},{data:n,total:t.total-a,totalAmnt:p(n)});case"ADD_ALL_ITEMS":var c=p(e.payload);return{loading:!1,data:e.payload,total:e.payload.length,totalAmnt:c};case"ADD_SINGLE_ITEM":var r=t.data.map((function(t,a){return a===e.payload?Object(b.a)(Object(b.a)({},t),{},{amount:t.amount+1}):t}));return Object(b.a)(Object(b.a)({},t),{},{data:r,total:t.total+1,totalAmnt:p(r)});case"DECREASE_SINGLE_ITEM":if(1===t.data[e.payload].amount){var o=t.data.filter((function(t,a){return a!==e.payload}));return Object(b.a)(Object(b.a)({},t),{},{data:o,total:t.total-1,totalAmnt:p(o)})}var i=t.data.map((function(t,a){return a===e.payload?Object(b.a)(Object(b.a)({},t),{},{amount:t.amount-1}):t}));return Object(b.a)(Object(b.a)({},t),{},{data:i,total:t.total-1,totalAmnt:p(i)});default:return t}},y={data:[],loading:!0,total:0,totalAmnt:0},O=function(){var t=Object(c.useReducer)(h,y),e=Object(u.a)(t,2),a=e[0],r=e[1],o=function(){var t=Object(d.a)(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://course-api.com/react-useReducer-cart-project");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,r({type:"ADD_ALL_ITEMS",payload:a});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),a.loading?Object(n.jsx)("h1",{children:"Loading..."}):Object(n.jsxs)("div",{style:{margin:"0"},children:[Object(n.jsx)("nav",{style:{background:"#2680c0",padding:"2rem"},children:Object(n.jsxs)("div",{style:{maxWidth:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",color:"white"},children:[Object(n.jsx)("h1",{children:"MyCart"}),Object(n.jsxs)("h3",{children:["Total Items: ",a.total]})]})}),a.data.map((function(t,e){return Object(n.jsx)(j,{item:t,index:e,dispatch:r})})),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{style:{padding:"1rem",display:"flex",justifyContent:"center"},children:Object(n.jsxs)("nav",{style:{width:"55%",display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)("h3",{children:"Total"}),Object(n.jsxs)("h3",{children:["$",a.totalAmnt]})]})})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4797e7b1.chunk.js.map