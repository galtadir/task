(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(32),s=n.n(a),r=(n(41),n(35)),o=n(5),u=(n(42),n(0)),j=function(){return Object(u.jsx)("nav",{children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"/",children:"Q1"}),Object(u.jsx)("span",{children:"   "}),Object(u.jsx)("a",{href:"/Q2",children:"Q2"}),Object(u.jsx)("span",{children:"   "}),Object(u.jsx)("a",{href:"/Q3",children:"Q3"}),Object(u.jsx)("span",{children:"   "}),Object(u.jsx)("a",{href:"/Q4",children:"Q4"})]})})})})},l=n(7),d=n(33),b=n(9),h=n(8),m=n(34),O=n.n(m),p=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Q1"}),Object(u.jsx)(f,{input:e.input})]})},f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(l.a)(this,n),i=t.call(this,e);for(var c=[],a=0;a<1e4;a++)null!=e.input[a]&&void 0!=e.input[a].value&&e.input[a].value>0&&c.push(e.input[a].value);return i.state={series:[{name:"",data:c}],options:{chart:{height:350,type:"heatmap"},plotOptions:{heatmap:{shadeIntensity:.5,radius:0,useFillColorAsStroke:!0,colorScale:{ranges:[{from:0,to:24,name:"low",color:"#00ff00"},{from:25,to:75,name:"medium",color:"#ffff00"},{from:75,to:100,name:"high",color:"#ff0000"}]}}},dataLabels:{enabled:!0},title:{text:"HeatMap Chart"}}},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(O.a,{options:this.state.options,series:this.state.series,type:"heatmap",height:350})})}}]),n}(c.a.Component),x=n(20),v=n(53),g=n(54),y=function(){var e=Object(i.useState)(!1),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(x.a)(a,2),r=s[0],o=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Q2"}),Object(u.jsx)("button",{onClick:function(){c(!n),o(!r)},children:"Load 1 and 2"}),Object(u.jsx)("div",{}),Object(u.jsx)("button",{onClick:function(){return c(!n)},children:"Load 1"}),n&&Object(u.jsx)(P,{}),Object(u.jsx)("div",{}),Object(u.jsx)("button",{onClick:function(){return o(!r)},children:"Load 2"}),r&&Object(u.jsx)(w,{})]})},T=Object(v.a)((function(){console.log("api");var e=[{name:"Jerusalem",Population:936425},{name:"Tel-Aviv",Population:460613},{name:"Haifa",Population:285316}];return new Promise((function(t,n){window.setTimeout((function(){t(e)}),1e3)}))})).pipe(Object(g.a)());function P(){var e=Object(i.useState)(null),t=Object(x.a)(e,2),n=t[0],c=t[1];return console.log("render1"),Object(i.useEffect)((function(){T.subscribe((function(e){return c(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Component 1"}),n&&n.map((function(e){return Object(u.jsx)(Q,{city:e},e.name)}))]})}function w(){var e=Object(i.useState)(null),t=Object(x.a)(e,2),n=t[0],c=t[1];return console.log("render2"),Object(i.useEffect)((function(){T.subscribe((function(e){return c(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Component 2"}),n&&n.map((function(e){return Object(u.jsx)(Q,{city:e},e.name)}))]})}function Q(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["name: ",e.city.name]}),Object(u.jsxs)("div",{children:["population: ",e.city.Population]}),Object(u.jsx)("div",{})]})}var C=function(e){var t=Object(i.useState)([]),n=Object(x.a)(t,2),c=n[0],a=n[1];function s(t){return new Promise((function(n,i){(function(e){var t={israel:{name:"Israel",capital:"Jerusalem",language:"Hebrew",citiesNames:["Jerusalem","Tel-Aviv","Haifa"]},england:{name:"England",capital:"London",language:"English",citiescitiesNames:["London","Manchester"]},spain:{name:"Spain",capital:"Madrid",language:"Spanish",citiescitiesNames:["Madrid","Barcelona"]}};return new Promise((function(n,i){window.setTimeout((function(){n(t[e])}),1e3)}))})(t).then((function(i){e.favoriteCountriesNames.includes(t)?Promise.all(i.citiesNames.map((function(e){return function(e){var t={Jerusalem:{name:"Jerusalem",Population:936425},"Tel-Aviv":{name:"Tel-Aviv",Population:460613},Haifa:{name:"Haifa",Population:285316}};return new Promise((function(n,i){window.setTimeout((function(){n(t[e])}),1e3)}))}(e)}))).then((function(e){i.cities=e,n(i)})):n(i)}))}))}return Object(i.useEffect)((function(){Promise.all(e.countriesNames.map((function(e){return s(e)}))).then((function(e){a(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Q3"}),c.map((function(e){return Object(u.jsx)(S,{country:e},e.name)}))]})};function S(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["name: ",e.country.name]}),Object(u.jsxs)("div",{children:["capital: ",e.country.capital]}),Object(u.jsxs)("div",{children:["language: ",e.country.language]}),e.country.cities&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("strong",{children:"Cities:"})}),e.country.cities.map((function(e){return Object(u.jsx)(L,{city:e},e.name)}))]}),Object(u.jsx)("p",{})]})}function L(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["name: ",e.city.name]}),Object(u.jsxs)("div",{children:["population: ",e.city.Population]}),Object(u.jsx)("div",{})]})}n(13);var N=n.p+"static/media/Q4.287344e2.png",k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Q4"}),Object(u.jsx)("img",{src:N,alt:"",height:"1300",width:"1300"})]})},F=[{timestamp:"01-01-2020T01:23:34"},{timestamp:"01-01-2020T01:23:34",value:56},{timestamp:"01-01-2020T01:23:34",value:-4},{timestamp:"01-01-2020T01:23:34",value:22},{timestamp:"01-01-2020T01:23:34",value:99},{timestamp:"01-01-2020T01:23:34",value:1},{timestamp:"01-01-2020T01:23:34",value:60},{timestamp:"01-01-2020T01:23:34",value:20},{timestamp:"01-01-2020T01:23:34",value:80},{timestamp:"01-01-2020T01:23:34",value:28}];var J=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{input:F})}),Object(u.jsx)(o.a,{exact:!0,path:"/Q2",children:Object(u.jsx)(y,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/Q3",children:Object(u.jsx)(C,{countriesNames:["israel","england","spain"],favoriteCountriesNames:["israel"]})}),Object(u.jsx)(o.a,{exact:!0,path:"/Q4",children:Object(u.jsx)(k,{})})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),E()}},[[50,1,2]]]);
//# sourceMappingURL=main.65dd2eea.chunk.js.map