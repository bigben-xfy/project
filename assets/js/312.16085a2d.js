(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{871:function(s,t,a){"use strict";a.r(t);var r=a(5),e=a.n(r),n={data:function(){return{data:[{actions:["Reply to"],author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",datetime:e()().subtract(1,"days")},{actions:["Reply to"],author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",datetime:e()().subtract(2,"days")}],moment:e.a}}},p=a(92),l=Object(p.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"配合 List 组件",usTitle:"Usage with list"}},[a("template",{slot:"demo"},[a("a-list",{staticClass:"comment-list",attrs:{header:s.data.length+" replies",itemLayout:"horizontal",dataSource:s.data},scopedSlots:s._u([{key:"renderItem",fn:function(t,r){return a("a-list-item",{},[a("a-comment",{attrs:{author:t.author,avatar:t.avatar}},[a("template",{slot:"actions"},s._l(t.actions,(function(t){return a("span",[s._v(s._s(t))])})),0),s._v(" "),a("p",{attrs:{slot:"content"},slot:"content"},[s._v(s._s(t.content))]),s._v(" "),a("a-tooltip",{attrs:{slot:"datetime",title:t.datetime.format("YYYY-MM-DD HH:mm:ss")},slot:"datetime"},[a("span",[s._v(s._s(t.datetime.fromNow()))])])],2)],1)}}])})],1),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("配合 List 组件展现评论列表。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"comment-list"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":header")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"`${data.length} replies`"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("itemLayout")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"horizontal"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":dataSource")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v("\n  >")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list-item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"renderItem"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item, index"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":author")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.author"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":avatar")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.avatar"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"actions"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"action in item.actions"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("action"),a("span",[s._v("}}")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"content"')]),s._v(">")]),a("span",[s._v("{{")]),s._v("item.content"),a("span",[s._v("}}")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-tooltip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"datetime"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"item.datetime.format('YYYY-MM-DD HH:mm:ss')\"")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),a("span",[s._v("{{")]),s._v("item.datetime.fromNow()"),a("span",[s._v("}}")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-tooltip")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-comment")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list-item")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-list")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" moment "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'moment'")]),s._v(";\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actions")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Reply to'")]),s._v("],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("author")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Han Solo'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("avatar")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(":\n              "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datetime")]),s._v(": moment().subtract("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'days'")]),s._v("),\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("actions")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Reply to'")]),s._v("],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("author")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Han Solo'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("avatar")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(":\n              "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datetime")]),s._v(": moment().subtract("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'days'")]),s._v("),\n          },\n        ],\n        moment,\n      };\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=l.exports}}]);