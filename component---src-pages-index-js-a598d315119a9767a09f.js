(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(157),c=a(170),l=a(175),s=a(183),o=a.n(s);var u=function(){return n.a.createElement("div",{className:o.a.header},n.a.createElement("h1",{className:o.a.logo},"Representation"),n.a.createElement("a",{href:"https://github.com/hahnlee/representation"},"GitHub"))},d=a(184),h=a.n(d);var f=function(){return n.a.createElement("footer",{className:h.a.footer},n.a.createElement("div",{className:h.a.content},"© Han Lee. All right Reserved."))},m=a(185),p=a.n(m);a(186);var v=function(e){var t=e.children;return n.a.createElement("div",{className:p.a.page},n.a.createElement(l.Helmet,null,n.a.createElement("title",null,"Representation"),n.a.createElement("meta",{property:"og:title",content:"Representation"}),n.a.createElement("meta",{property:"og:description",content:"extensible react chart library"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),n.a.createElement(u,null),n.a.createElement("main",{className:p.a.main},t),n.a.createElement(f,null))},g=(a(34),a(73)),E=a.n(g);var y=function(e){var t=e.children,a=E()(e,["children"]),i=Object(r.useRef)(),c=Object(r.useState)(0),l=c[0],s=c[1],o=Object(r.useState)(0),u=o[0],d=o[1];return Object(r.useEffect)(function(){i.current&&(s(i.current.clientWidth),d(i.current.clientHeight))}),console.log(l),console.log(u),n.a.createElement("div",Object.assign({},a,{ref:i}),t(l,u))},b=a(146),w=a(187),C=a.n(w),N=a(188),_=a.n(N);var D=function(e){var t=e.chart,a=e.fromDataKey,r=e.toDataKey,i=e.width,c=e.onClick,l=(t.getBarXPosition(a)+t.getBarXPosition(r))/2,s=t.data[a],o=t.data[r]/s;return n.a.createElement("foreignObject",{x:l+50-i/2,y:t.height/2-50,width:i,height:100},n.a.createElement("div",{className:_.a.step,onClick:c},n.a.createElement("div",{className:_.a.content},n.a.createElement("div",{className:_.a.arrow},n.a.createElement("i",{className:"material-icons"},"arrow_forward")),n.a.createElement("div",{className:_.a.rate},C()(o).format("0 %")))))},x=Object(b.withChart)(D),K=a(189),B=a.n(K);t.default=function(){return n.a.createElement(v,null,n.a.createElement("div",{className:B.a.index},n.a.createElement("div",{className:B.a.chartWrapper},n.a.createElement(y,{className:B.a.chart},function(e,t){return n.a.createElement(i.BarChart,{className:B.a.chart,data:{a:400,b:300,c:100},width:e,height:t},n.a.createElement(i.Bar,{dataKey:"a",fill:"#00c3ff"}),n.a.createElement(x,{fromDataKey:"a",toDataKey:"b",width:200}),n.a.createElement(i.Bar,{dataKey:"b",fill:"rgba(0, 138, 255, 0.8)"}),n.a.createElement(x,{fromDataKey:"b",toDataKey:"c",width:200}),n.a.createElement(i.Bar,{dataKey:"c",fill:"#4f5bff"}),n.a.createElement(c.YAxis,{stroke:"#ccc"}),n.a.createElement(c.XAxis,{stroke:"#ccc"}))})),n.a.createElement("div",{className:B.a.about},n.a.createElement("p",{className:B.a.description},"An",n.a.createElement("br",null),"extensible",n.a.createElement("br",null),"react chart library")),n.a.createElement("a",{href:"https://github.com/hahnlee/representation/tree/master/website/src/components/Step",className:B.a.example},n.a.createElement("i",{className:"material-icons"},"arrow_forward"),"Custom chart children example")))}},146:function(e,t,a){"use strict";a.r(t);var r=a(148),n=Object(r.createContext)({});var i=function(){return Object(r.useContext)(n)};a(162);function c(e,t){return!!r.isValidElement(e)&&e.type===t}function l(e){return e.displayName||e.name||"Component"}var s=a(163),o=a(164),u=a.n(o);function d(e){var t=function(t){return r.createElement(n.Consumer,null,function(a){return r.createElement(e,Object(s.a)({},t,{ref:t.innerRef,chart:a}))})};return t.displayName="withChart("+l(e)+")",u()(t,e)}a.d(t,"ChartContext",function(){return n}),a.d(t,"getDisplayName",function(){return l}),a.d(t,"isChildrenOf",function(){return c}),a.d(t,"withChart",function(){return d}),a.d(t,"useChart",function(){return i})},150:function(e,t,a){"use strict";var r=a(147),n=a(8);t.__esModule=!0,t.default=void 0;var i=n(a(74)),c=n(a(73)),l=r(a(151)),s=a(146),o=a(152),u=function(e){var t=e.chart,a=e.dataKey,r=e.innerRef,n=e.width,s=(0,c.default)(e,["chart","dataKey","innerRef","width"]);return l.createElement("rect",(0,i.default)({},s,{ref:r,width:n,height:t.getBarHeight(a),x:t.getBarXPosition(a),y:t.getBarYPosition(a)}))};u.defaultProps={width:o.DEFAULT_BAR_WIDTH};var d=(0,s.withChart)(u);t.default=d},152:function(e,t,a){"use strict";t.__esModule=!0,t.DEFAULT_BAR_WIDTH=void 0;t.DEFAULT_BAR_WIDTH=60},157:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0;var n=r(a(150));t.Bar=n.default;var i=r(a(167));t.BarChart=i.default},167:function(e,t,a){"use strict";a(76),a(77);var r=a(147),n=a(8);t.__esModule=!0,t.default=void 0;var i=n(a(73)),c=n(a(168)),l=n(a(35)),s=n(a(7)),o=n(a(33)),u=r(a(151)),d=r(a(190)),h=a(191),f=a(146),m=n(a(169)),p=a(152),v=n(a(150)),g=function(e){function t(t){var a;return a=e.call(this,t)||this,(0,o.default)((0,l.default)(a),"dataKeys",[]),(0,o.default)((0,l.default)(a),"barWidths",{}),(0,o.default)((0,l.default)(a),"getChartData",function(){var e=a.props,t=e.data,r=e.width,n=e.height,i=e.barWidth,c=a.getScale(),l=function(e){var a=d.get(t,e);return c(a)},s=(0,h.scaleBand)().domain(a.dataKeys).range([0,r]),o=i||s.bandwidth();return{barWidth:o,getBarHeight:l,getBarXPosition:function(e){return(s(e)||0)+s.paddingInner()+(o-a.barWidths[e])/2},getBarYPosition:function(e){return n-l(e)}}}),a.updateDataKeys(),a.state=a.getChartData(),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e){var t=this.props,a=t.children,r=t.data;a!==e.children?(this.updateDataKeys(),this.setState(this.getChartData())):r!==e.data&&this.setState(this.getChartData())},a.updateDataKeys=function(){var e=this,t=this.props.children;this.dataKeys=[],this.barWidths={},u.Children.forEach(t,function(t){if((0,f.isChildrenOf)(t,v.default)){var a=t.props.dataKey;e.dataKeys.push(a),e.barWidths[a]=t.props.width||p.DEFAULT_BAR_WIDTH}})},a.getDomain=function(){var e=this,t=this.props,a=t.data,r=t.domain,n=r[0],i=r[1],c="number"==typeof n,l="number"==typeof i;if(c&&l)return r;var s=d.filter(a,function(t,a){return e.dataKeys.includes(a)});return[c?n:n(d.min(s)||0),l?i:i(d.max(s)||0)]},a.getScaleMethod=function(){switch(this.props.scale){case m.default.LINEAR:return(0,h.scaleLinear)();case m.default.LOG:return(0,h.scaleLog)();default:return(0,h.scaleLinear)()}},a.getScale=function(){var e=this.props.height,t=this.getDomain();return this.getScaleMethod().domain(t).range([0,e])},a.getContext=function(){var e=this.props,t=e.data,a=e.height,r=e.width;return(0,c.default)({},this.state,{height:a,width:r,data:t})},a.getSVGProps=function(){var e=this.props;e.data,e.scale,e.domain,e.children,e.ref;return(0,i.default)(e,["data","scale","domain","children","ref"])},a.render=function(){var e=this.props.children;return u.createElement(f.ChartContext.Provider,{value:this.getContext()},u.createElement("svg",this.getSVGProps(),e))},t}(u.Component);(0,o.default)(g,"defaultProps",{scale:m.default.LINEAR,domain:[0,function(e){return 1.2*e}]});var E=g;t.default=E},169:function(e,t,a){"use strict";var r;t.__esModule=!0,t.default=void 0,function(e){e.LOG="log",e.LINEAR="linear"}(r||(r={}));var n=r;t.default=n},170:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0;var n=r(a(171));t.XAxis=n.default;var i=r(a(174));t.YAxis=i.default},171:function(e,t,a){"use strict";var r=a(147),n=a(8);t.__esModule=!0,t.default=void 0;var i=n(a(74)),c=n(a(73)),l=r(a(155)),s=(0,a(146).withChart)(function(e){var t=e.chart,a=(0,c.default)(e,["chart"]);return l.createElement("line",(0,i.default)({},a,{x1:0,x2:t.width,y1:t.height,y2:t.height}))});t.default=s},174:function(e,t,a){"use strict";var r=a(147),n=a(8);t.__esModule=!0,t.default=void 0;var i=n(a(74)),c=n(a(73)),l=r(a(155)),s=a(146),o=function(e){var t=e.chart,a=e.width,r=e.className,n=(0,c.default)(e,["chart","width","className"]);return l.createElement("g",{className:r,width:a,height:t.height},l.createElement("line",(0,i.default)({},n,{x1:0,x2:0,y1:0,y2:t.height})))};o.defaultProps={width:60};var u=(0,s.withChart)(o);t.default=u}}]);
//# sourceMappingURL=component---src-pages-index-js-a598d315119a9767a09f.js.map