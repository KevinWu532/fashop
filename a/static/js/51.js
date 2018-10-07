(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{128:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a(970),o=a(83);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"parse",value:function(){return this.params=(0,n.parse)(window.location.href.split("?")[1]),this}},{key:"delEmptyParams",value:function(){var e=this,t=this.params;return Object.keys(t).forEach(function(a){""!==t[a]&&null!==t[a]&&"undefined"!==t[a]||delete e.params[a]}),this}},{key:"getParams",value:function(){return this.params}},{key:"addParams",value:function(e){var t=this;Object.keys(e).forEach(function(a){t.params[a]=e[a]})}},{key:"delParams",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{key:"state",rule:["eq","all"]},{key:"keywords_type",rule:["rely","keywords"]}],t=0;t<e.length;t++){var a=e[t].rule,r=e[t].key;switch(a[0]){case"eq":this.params[r]===a[1]&&delete this.params[r];break;case"rely":void 0===this.params[a[1]]&&delete this.params[r]}}return this}},{key:"withPageParams",value:function(){var t=e.getPageLimit(),a=t.page,r=t.rows;return this.addParams({page:a,rows:r}),this}}],[{key:"invokerForListParams",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(new e).parse().delEmptyParams().withPageParams().delParams(t).getParams()}},{key:"getQuery",value:function(){return(0,n.parse)(window.location.href.split("?")[1])}},{key:"getPath",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(0,n.stringify)(t);return a.length?e+"?"+a:e}},{key:"getPageLimit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=e.getQuery();return{page:void 0!==r.page&&parseInt(r.page,10)>0?parseInt(r.page,10):t,rows:void 0!==r.rows&&parseInt(r.rows,10)>0?parseInt(r.rows,10):a}}},{key:"page",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=window.fashop.historyPrefix;return e.getPath(window.location.pathname.replace((o.__DEV__,r),""),Object.assign({},e.getQuery(),{page:t,rows:a}))}}]),e}();t.default=u},197:function(e,t,a){var r=a(54),n=Object.prototype.hasOwnProperty,o=Array.prototype.splice,u=Object.prototype.toString,s=function(e){return u.call(e).slice(8,-1)},i=Object.assign||function(e,t){return l(t).forEach(function(a){n.call(t,a)&&(e[a]=t[a])}),e},l="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function c(e){if(Array.isArray(e))return i(e.constructor(e.length),e);if("Map"===s(e))return new Map(e);if("Set"===s(e))return new Set(e);if(e&&"object"==typeof e){var t=Object.getPrototypeOf(e);return i(Object.create(t),e)}return e}function f(){var e=i({},p);return t.extend=function(t,a){e[t]=a},t.isEquals=function(e,t){return e===t},t;function t(a,o){"function"==typeof o&&(o={$apply:o}),Array.isArray(a)&&Array.isArray(o)||r(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"==typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var u=a;return l(o).forEach(function(r){if(n.call(e,r)){var i=a===u;u=e[r](o[r],u,o,a),i&&t.isEquals(u,a)&&(u=a)}else{var l="Map"===s(a)?t(a.get(r),o[r]):t(a[r],o[r]),f="Map"===s(u)?u.get(r):u[r];t.isEquals(l,f)&&(void 0!==l||n.call(a,r))||(u===a&&(u=c(a)),"Map"===s(u)?u.set(r,l):u[r]=l)}}),u}}var p={$push:function(e,t,a){return y(t,a,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,a){return y(t,a,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,a,n){return function(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),h(t.$splice)}(t,a),e.forEach(function(e){h(e),t===n&&e.length&&(t=c(n)),o.apply(t,e)}),t},$set:function(e,t,a){return function(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(a),e},$toggle:function(e,t){m(e,"$toggle");var a=e.length?c(t):t;return e.forEach(function(e){a[e]=!t[e]}),a},$unset:function(e,t,a,r){return m(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=c(r)),delete t[e])}),t},$add:function(e,t,a,r){return v(t,"$add"),m(e,"$add"),"Map"===s(t)?e.forEach(function(e){var a=e[0],n=e[1];t===r&&t.get(a)!==n&&(t=c(r)),t.set(a,n)}):e.forEach(function(e){t!==r||t.has(e)||(t=c(r)),t.add(e)}),t},$remove:function(e,t,a,r){return v(t,"$remove"),m(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=c(r)),t.delete(e)}),t},$merge:function(e,t,a,n){return function(e,t){r(t&&"object"==typeof t,"update(): $merge expects a spec of type 'object'; got %s",t),r(e&&"object"==typeof e,"update(): $merge expects a target of type 'object'; got %s",e)}(t,e),l(e).forEach(function(a){e[a]!==t[a]&&(t===n&&(t=c(n)),t[a]=e[a])}),t},$apply:function(e,t){return function(e){r("function"==typeof e,"update(): expected spec of $apply to be a function; got %s.",e)}(e),e(t)}},d=f();function y(e,t,a){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",a,e),m(t[a],a)}function m(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function h(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function v(e,t){var a=s(e);r("Map"===a||"Set"===a,"update(): %s expects a target of type Set or Map; got %s",t,a)}e.exports=d,e.exports.default=d,e.exports.newContext=f},2135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(a(28)),n=g(a(16)),o=g(a(30)),u=g(a(200)),s=g(a(70)),i=g(a(24)),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();a(31),a(17),a(33),a(248),a(77),a(21);var c=a(1),f=g(c),p=g(a(2136)),d=a(9),y=a(25),m=g(a(32)),h=g(a(128)),v=g(a(197));function g(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=i.default.Group,b=s.default.Option,k=u.default.RangePicker,E=function(e){function t(){var e,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return a=r=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={queryParams:{keywords_type:"goods_name",keywords:null,create_time:[],state_type:"all"}},w(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),l(t,[{key:"componentDidMount",value:function(){var e=h.default.getQuery();this.setState({queryParams:{keywords_type:void 0!==e.keywords_type?e.keywords_type:"goods_name",keywords:void 0!==e.keywords?e.keywords:null,create_time:void 0!==e.create_time?e.create_time:[],state_type:void 0!==e.state_type?e.state_type:"all"}})}},{key:"render",value:function(){var e=this,t=this.state.queryParams,a=t.keywords_type,u=t.keywords,l=t.create_time,c=t.state_type,h=[];l.length>0&&(h=[(0,m.default)(l[0]),(0,m.default)(l[1])]);return f.default.createElement(r.default,{style:{paddingBottom:"24px",marginBottom:"24px",borderBottom:"1px dashed #ededed"}},f.default.createElement(o.default,{span:6},f.default.createElement(_,{compact:!0},f.default.createElement(s.default,{style:{minWidth:"40%"},placeholder:"搜索条件",value:a,onChange:function(t){e.setState((0,v.default)(e.state,{queryParams:{keywords_type:{$set:t}}}))}},f.default.createElement(b,{value:"goods_name"},"商品名称"),f.default.createElement(b,{value:"order_no"},"订单号"),f.default.createElement(b,{value:"receiver_name"},"收货人姓名"),f.default.createElement(b,{value:"receiver_phone"},"收货人电话"),f.default.createElement(b,{value:"courier_number"},"快递单号")),f.default.createElement(i.default,{placeholder:"请输入"+(a?this.returnKeywordsType(a):""),onChange:function(t){e.setState((0,v.default)(e.state,{queryParams:{keywords:{$set:t.target.value}}}))},style:{width:"56%"},value:u}))),f.default.createElement(o.default,{span:6,className:p.default.div1},f.default.createElement(d.View,{className:p.default.view1},f.default.createElement("p",{className:p.default.p1},"下单时间"),f.default.createElement(k,{style:{flex:1},onChange:function(t,a){e.setState((0,v.default)(e.state,{queryParams:{create_time:{$set:a}}}))},value:h}))),f.default.createElement(o.default,{span:4,className:p.default.div1},f.default.createElement(d.View,{className:p.default.view1},f.default.createElement("p",{className:p.default.p1},"订单状态"),f.default.createElement(s.default,{placeholder:"请选择",style:{flex:1},value:c,onChange:function(t){e.setState((0,v.default)(e.state,{queryParams:{state_type:{$set:t}}}))}},[{name:"全部订单",state_type:"all"},{name:"待发货",state_type:"state_pay"},{name:"待付款",state_type:"state_new"},{name:"已发货",state_type:"state_send"},{name:"已完成",state_type:"state_success"},{name:"已关闭",state_type:"state_cancel"}].map(function(e,t){return f.default.createElement(b,{value:e.state_type,key:t},e.name)})))),f.default.createElement(o.default,{span:4,className:p.default.div1},f.default.createElement(d.View,{style:{flexDirection:"row"}},f.default.createElement(n.default,{type:"primary",onClick:function(){var t=(0,y.getQueryPath)("/order/list",{page:1,rows:10,keywords_type:a,keywords:u,create_time:l,state_type:c});e.props.history.push(t)},style:{marginRight:14}},"筛选"),f.default.createElement(n.default,{onClick:function(){var t=(0,y.getQueryPath)("/order/list");e.props.history.push(t)}},"清空筛选"))))}},{key:"returnKeywordsType",value:function(e){switch(e){case"goods_name":return"商品名称";case"order_no":return"订单号";case"receiver_name":return"收货人姓名";case"receiver_phone":return"收货人电话";case"courier_number":return"快递单号";default:return""}}}]),t}();t.default=E},2136:function(e,t,a){var r=a(2137);"string"==typeof r&&(r=[[e.i,r,""]]);var n={transform:void 0};a(11)(r,n);r.locals&&(e.exports=r.locals)},2137:function(e,t,a){(t=e.exports=a(10)(!1)).push([e.i,".PClKSkHqF66_sg_Kt6SmZ{\n    margin-left: 20px;\n}\n._1pnIPJOKla5iN5ap902d4B{\n    flex-direction: row;\n    align-items: center;\n}\n._2pvqCjjcjuIN2KsKYCtOFw{\n    margin: 0;\n    margin-right: 12px;\n}\n",""]),t.locals={div1:"PClKSkHqF66_sg_Kt6SmZ",view1:"_1pnIPJOKla5iN5ap902d4B",p1:"_2pvqCjjcjuIN2KsKYCtOFw"}}}]);
//# sourceMappingURL=51.js.map