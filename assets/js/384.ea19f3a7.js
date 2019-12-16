(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{907:function(s,t,a){"use strict";a.r(t);var r=[{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"}],e={data:function(){return{data:r}}},l=a(92),n=Object(l.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"栅格列表",usTitle:"Grid"}},[a("template",{slot:"demo"},[a("a-list",{attrs:{grid:{gutter:16,column:4},dataSource:s.data},scopedSlots:s._u([{key:"renderItem",fn:function(t,r){return a("a-list-item",{},[a("a-card",{attrs:{title:t.title}},[s._v("Card content")])],1)}}])})],1),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("可以通过设置 "),a("code",{pre:!0},[s._v("List")]),s._v(" 的 "),a("code",{pre:!0},[s._v("grid")]),s._v(" 属性来实现栅格列表，"),a("code",{pre:!0},[s._v("column")]),s._v(" 可设置期望显示的列数。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":grid")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{ gutter: 16, column: 4 }"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":dataSource")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list-item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"renderItem"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item, index"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-card")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.title"')]),s._v(">")]),s._v("Card content"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-card")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list-item")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Title 1'")]),s._v(",\n    },\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Title 2'")]),s._v(",\n    },\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Title 3'")]),s._v(",\n    },\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Title 4'")]),s._v(",\n    },\n  ];\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        data,\n      };\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=n.exports}}]);