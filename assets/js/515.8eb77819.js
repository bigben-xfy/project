(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1218:function(s,t,a){"use strict";a.r(t);var r=a(92),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"自定义点状步骤条",usTitle:"Customized Dot Style"}},[a("template",{slot:"demo"},[a("div",[a("a-steps",{attrs:{current:1},scopedSlots:s._u([{key:"progressDot",fn:function(t){var r=t.index,e=t.status,p=t.prefixCls;return a("a-popover",{},[a("template",{slot:"content"},[a("span",[s._v("step "+s._s(r)+" status: "+s._s(e))])]),s._v(" "),a("span",{class:p+"-icon-dot"})],2)}}])},[s._v(" "),a("a-step",{attrs:{title:"Finished",description:"You can hover on the dot."}}),s._v(" "),a("a-step",{attrs:{title:"In Progress",description:"You can hover on the dot."}}),s._v(" "),a("a-step",{attrs:{title:"Waiting",description:"You can hover on the dot."}}),s._v(" "),a("a-step",{attrs:{title:"Waiting",description:"You can hover on the dot."}})],1)],1)]),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("为点状步骤条增加自定义展示。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-steps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":current")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-popover")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"progressDot"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{index, status, prefixCls}"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"content"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("step "),a("span",[s._v("{{")]),s._v("index"),a("span",[s._v("}}")]),s._v(" status: "),a("span",[s._v("{{")]),s._v("status"),a("span",[s._v("}}")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"`${prefixCls}-icon-dot`"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-popover")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-step")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Finished"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"You can hover on the dot."')]),s._v(" />")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-step")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"In Progress"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"You can hover on the dot."')]),s._v(" />")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-step")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Waiting"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"You can hover on the dot."')]),s._v(" />")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-step")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Waiting"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"You can hover on the dot."')]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-steps")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=e.exports}}]);