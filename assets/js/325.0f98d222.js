(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{878:function(s,a,t){"use strict";t.r(a);var n=t(5),r={data:function(){return{dateFormat:"YYYY/MM/DD",monthFormat:"YYYY/MM"}},methods:{moment:t.n(n).a,onChange:function(s,a){console.log("From: ",s[0],", to: ",s[1]),console.log("From: ",a[0],", to: ",a[1])}}},e=t(92),l=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"预设范围",usTitle:"Presetted Ranges"}},[t("template",{slot:"demo"},[t("div",[t("a-range-picker",{attrs:{ranges:{Today:[s.moment(),s.moment()],"This Month":[s.moment(),s.moment().endOf("month")]}},on:{change:s.onChange}}),s._v(" "),t("br"),s._v(" "),t("a-range-picker",{attrs:{ranges:{Today:[s.moment(),s.moment()],"This Month":[s.moment(),s.moment().endOf("month")]},showTime:"",format:"YYYY/MM/DD HH:mm:ss"},on:{change:s.onChange}})],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("可以预设常用的日期范围以提高用户体验。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-range-picker")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ranges")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }\"")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange"')]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-range-picker")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ranges")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }\"")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("showTime")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("format")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"YYYY/MM/DD HH:mm:ss"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange"')]),s._v("\n    />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" moment "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'moment'")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dateFormat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'YYYY/MM/DD'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("monthFormat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'YYYY/MM'")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      moment,\n      onChange(dates, dateStrings) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'From: '")]),s._v(", dates["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("], "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("', to: '")]),s._v(", dates["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]);\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'From: '")]),s._v(", dateStrings["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("], "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("', to: '")]),s._v(", dateStrings["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]);\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=l.exports}}]);