(window.webpackJsonp=window.webpackJsonp||[]).push([[49,109,274,275,276,277,278],{1082:function(s,t,a){"use strict";a.r(t);var e=a(92),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",[s._v("API")]),s._v(" "),a("p",[s._v("**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s._v("// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale // import moment from\n'moment'; // import 'moment/locale/zh-cn'; // moment.locale('zh-cn');\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@panelChange")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onPanelChange"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onSelect"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dateCellRender"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"monthCellRender"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("dateCellRender")]),s._v(" "),a("td",[s._v("作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格,")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("无")])]),s._v(" "),a("tr",[a("td",[s._v("dateFullCellRender")]),s._v(" "),a("td",[s._v("作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("无")])]),s._v(" "),a("tr",[a("td",[s._v("defaultValue")]),s._v(" "),a("td",[s._v("默认展示的日期")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")])]),s._v(" "),a("td",[s._v("默认日期")])]),s._v(" "),a("tr",[a("td",[s._v("disabledDate")]),s._v(" "),a("td",[s._v("不可选择的日期")]),s._v(" "),a("td",[s._v("(currentDate: moment) => boolean")]),s._v(" "),a("td",[s._v("无")])]),s._v(" "),a("tr",[a("td",[s._v("fullscreen")]),s._v(" "),a("td",[s._v("是否全屏显示")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("locale")]),s._v(" "),a("td",[s._v("国际化配置")]),s._v(" "),a("td",[s._v("object")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json"}},[s._v("默认配置")])])]),s._v(" "),a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("初始模式，"),a("code",{pre:!0},[s._v("month/year")])]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("month")])]),s._v(" "),a("tr",[a("td",[s._v("monthCellRender")]),s._v(" "),a("td",[s._v("作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("无")])]),s._v(" "),a("tr",[a("td",[s._v("monthFullCellRender")]),s._v(" "),a("td",[s._v("作用域插槽，自定义渲染月单元格，返回内容覆盖单元格")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("无")])]),s._v(" "),a("tr",[a("td",[s._v("validRange")]),s._v(" "),a("td",[s._v("设置可以显示的日期")]),s._v(" "),a("td",[s._v("["),a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")]),s._v(", "),a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")]),s._v("]")]),s._v(" "),a("td",[s._v("无")])]),s._v(" "),a("tr",[a("td",[s._v("value(v-model)")]),s._v(" "),a("td",[s._v("展示日期")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")])]),s._v(" "),a("td",[s._v("当前日期")])])])]),s._v(" "),a("h3",[s._v("事件")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("事件名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("panelChange")]),s._v(" "),a("td",[s._v("日期面板变化回调")]),s._v(" "),a("td",[s._v("function(date: moment, mode: string)")])]),s._v(" "),a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("点击选择日期回调")]),s._v(" "),a("td",[s._v("function(date: moment）")])]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("日期变化时的回调, 面板变化有可能导致日期变化")]),s._v(" "),a("td",[s._v("function(date: moment）")])])])])])}],!1,null,null,null);t.default=r.exports},1083:function(s,t,a){"use strict";a.r(t);var e=a(92),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",[s._v("API")]),s._v(" "),a("p",[a("strong",[s._v("Note:")]),s._v(" Part of the Calendar's locale is read from "),a("code",{pre:!0},[s._v("value")]),s._v(". So, please set the locale of "),a("code",{pre:!0},[s._v("moment")]),s._v(" correctly.")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s._v("// The default locale is en-US, if you want to use other locale, just set locale in entry file\nglobally. // import moment from 'moment'; // import 'moment/locale/zh-cn'; //\nmoment.locale('zh-cn');\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@panelChange")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onPanelChange"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onSelect"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dateCellRender"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"monthCellRender"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("customize the progress dot by setting a scoped slot")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Property")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("dateCellRender")]),s._v(" "),a("td",[s._v("Customize the display of the date cell by setting a scoped slot, the returned content will be appended to the cell")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("dateFullCellRender")]),s._v(" "),a("td",[s._v("Customize the display of the date cell by setting a scoped slot, the returned content will override the cell")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("defaultValue")]),s._v(" "),a("td",[s._v("The date selected by default")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")])]),s._v(" "),a("td",[s._v("default date")])]),s._v(" "),a("tr",[a("td",[s._v("disabledDate")]),s._v(" "),a("td",[s._v("Function that specifies the dates that cannot be selected")]),s._v(" "),a("td",[s._v("(currentDate: moment) => boolean")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("fullscreen")]),s._v(" "),a("td",[s._v("Whether to display in full-screen")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])])]),s._v(" "),a("tr",[a("td",[s._v("locale")]),s._v(" "),a("td",[s._v("The calendar's locale")]),s._v(" "),a("td",[s._v("object")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json"}},[s._v("default")])])]),s._v(" "),a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("The display mode of the calendar")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("month")]),s._v(" | "),a("code",{pre:!0},[s._v("year")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("month")])])]),s._v(" "),a("tr",[a("td",[s._v("monthCellRender")]),s._v(" "),a("td",[s._v("Customize the display of the month cell by setting a scoped slot, the returned content will be appended to the cell")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("monthFullCellRender")]),s._v(" "),a("td",[s._v("Customize the display of the month cell by setting a scoped slot, the returned content will override the cell")]),s._v(" "),a("td",[s._v("function(date: moment)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("validRange")]),s._v(" "),a("td",[s._v("to set valid range")]),s._v(" "),a("td",[s._v("["),a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")]),s._v(", "),a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")]),s._v("]")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("value(v-model)")]),s._v(" "),a("td",[s._v("The current selected date")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://momentjs.com/"}},[s._v("moment")])]),s._v(" "),a("td",[s._v("current date")])])])]),s._v(" "),a("h3",[s._v("events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Events Name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Arguments")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("panelChange")]),s._v(" "),a("td",[s._v("Callback for when panel changes")]),s._v(" "),a("td",[s._v("function(date: moment, mode: string)")])]),s._v(" "),a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("Callback for when a date is selected")]),s._v(" "),a("td",[s._v("function(date: moment）")])]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("Callback for when value change")]),s._v(" "),a("td",[s._v("function(date: moment）")])])])])])}],!1,null,null,null);t.default=r.exports},1537:function(s,t,a){"use strict";a.r(t);var e=a(846),r=a(847),n=a(848),l=a(849),v=a(1082),_=a(1083),p="# 日历 Calendar\n          \n按照日历形式展示数据的容器。\n\n## 何时使用\n\n当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。\n\n          ## 代码演示",c="# Calendar\n          \nContainer for displaying data in calendar form.\n\n## When To Use\n\nWhen data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.\n## Examples \n",o={category:"Components",type:"Data Display",zhType:"数据展示",subtitle:"日历",cols:1,title:"Calendar",render:function(){var s=arguments[0];return s("div",[s("dm-md",{attrs:{cn:p,us:c}}),s(e.default),s(r.default),s(n.default),s(l.default),s("api",[s(v.default,{slot:"cn"}),s(_.default)])])}},h=a(92),d=Object(h.a)(o,void 0,void 0,!1,null,null,null);t.default=d.exports},645:function(s,t,a){},760:function(s,t,a){"use strict";var e=a(645);a.n(e).a},846:function(s,t,a){"use strict";a.r(t);var e={methods:{onPanelChange:function(s,t){console.log(s,t)}}},r=a(92),n=Object(r.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"基本",usTitle:"basic"}},[a("template",{slot:"demo"},[a("a-calendar",{on:{panelChange:s.onPanelChange}})],1),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("一个通用的日历面板，支持年/月切换。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@panelChange")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onPanelChange"')]),s._v(" />")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onPanelChange(value, mode) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value, mode);\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=n.exports},847:function(s,t,a){"use strict";a.r(t);var e={methods:{onPanelChange:function(s,t){console.log(s,t)}}},r=a(92),n=Object(r.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"卡片模式",usTitle:"Card"}},[a("template",{slot:"demo"},[a("div",{style:{width:"300px",border:"1px solid #d9d9d9",borderRadius:"4px"}},[a("a-calendar",{attrs:{fullscreen:!1},on:{panelChange:s.onPanelChange}})],1)]),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("用于嵌套在空间有限的容器中。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }\"")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreen")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@panelChange")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onPanelChange"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onPanelChange(value, mode) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value, mode);\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=n.exports},848:function(s,t,a){"use strict";a.r(t);var e={methods:{getListData:function(s){var t;switch(s.date()){case 8:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:t=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event。。...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return t||[]},getMonthData:function(s){if(8===s.month())return 1394}}},r=(a(760),a(92)),n=Object(r.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"通知事项日历",usTitle:"Notice Calendar"}},[a("template",{slot:"demo"},[a("a-calendar",{scopedSlots:s._u([{key:"dateCellRender",fn:function(t){return a("ul",{staticClass:"events"},s._l(s.getListData(t),(function(s){return a("li",{key:s.content},[a("a-badge",{attrs:{status:s.type,text:s.content}})],1)})),0)}},{key:"monthCellRender",fn:function(t){return[s.getMonthData(t)?a("div",{staticClass:"notes-month"},[a("section",[s._v(s._s(s.getMonthData(t)))]),s._v(" "),a("span",[s._v("Backlog number")])]):s._e()]}}])})],1),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("一个复杂的应用示例，用 "),a("code",{pre:!0},[s._v("dateCellRender")]),s._v(" 和 "),a("code",{pre:!0},[s._v("monthCellRender")]),s._v(" 函数来自定义需要渲染的数据。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"events"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dateCellRender"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item in getListData(value)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.content"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-badge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":status")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.type"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.content"')]),s._v(" />")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"monthCellRender"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"getMonthData(value)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"notes-month"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),a("span",[s._v("{{")]),s._v("getMonthData(value)"),a("span",[s._v("}}")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("Backlog number"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      getListData(value) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" listData;\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("switch")]),s._v(" (value.date()) {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(":\n            listData = [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is warning event.'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is usual event.'")]),s._v(" },\n            ];\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("break")]),s._v(";\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(":\n            listData = [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is warning event.'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is usual event.'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is error event.'")]),s._v(" },\n            ];\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("break")]),s._v(";\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v(":\n            listData = [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is warning event'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is very long usual event。。....'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is error event 1.'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is error event 2.'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is error event 3.'")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is error event 4.'")]),s._v(" },\n            ];\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("break")]),s._v(";\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(":\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" listData || [];\n      },\n\n      getMonthData(value) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (value.month() === "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1394")]),s._v(";\n        }\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".events")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("list-style")]),s._v(": none;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".events")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-badge-status")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow")]),s._v(": hidden;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("white-space")]),s._v(": nowrap;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-overflow")]),s._v(": ellipsis;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12px")]),s._v(";\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".notes-month")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28px")]),s._v(";\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".notes-month")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("section")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28px")]),s._v(";\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,"eac514bc",null);t.default=n.exports},849:function(s,t,a){"use strict";a.r(t);var e=a(5),r=a.n(e),n={data:function(){return{value:r()("2017-01-25"),selectedValue:r()("2017-01-25"),value1:r()("2017-01-25")}},methods:{onSelect:function(s){this.value=s,this.selectedValue=s},onPanelChange:function(s){this.value=s}}},l=a(92),v=Object(l.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"选择功能",usTitle:"Selectable Calendar"}},[a("template",{slot:"demo"},[a("div",[a("a-alert",{attrs:{message:"You selected date: "+(s.selectedValue&&s.selectedValue.format("YYYY-MM-DD"))}}),s._v(" "),a("div",{style:{display:"inline-block",width:"500px",border:"1px solid #d9d9d9",borderRadius:"4px"}},[a("a-calendar",{attrs:{value:s.value},on:{select:s.onSelect,panelChange:s.onPanelChange}})],1),s._v(" "),a("div",{style:{display:"inline-block",width:"500px",marginLeft:"20px",border:"1px solid #d9d9d9",borderRadius:"4px"}},[a("a-calendar",{model:{value:s.value1,callback:function(t){s.value1=t},expression:"value1"}})],1)],1)]),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("一个通用的日历面板，支持年/月切换。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-alert")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":message")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`\"")]),s._v("\n    />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{ display: 'inline-block', width: '500px', border: '1px solid #d9d9d9', borderRadius: '4px' }\"")]),s._v("\n    >")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onSelect"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@panelChange")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onPanelChange"')]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{ display: 'inline-block', width: '500px',marginLeft: '20px', border: '1px solid #d9d9d9', borderRadius: '4px' }\"")]),s._v("\n    >")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-calendar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value1"')]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" moment "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'moment'")]),s._v(";\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": moment("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017-01-25'")]),s._v("),\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("selectedValue")]),s._v(": moment("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017-01-25'")]),s._v("),\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value1")]),s._v(": moment("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2017-01-25'")]),s._v("),\n      };\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onSelect(value) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = value;\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".selectedValue = value;\n      },\n      onPanelChange(value) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = value;\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=v.exports}}]);