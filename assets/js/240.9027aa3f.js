(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{839:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{result:[]}},methods:{handleSearch:function(s){var a;a=!s||s.indexOf("@")>=0?[]:["gmail.com","163.com","qq.com"].map((function(a){return"".concat(s,"@").concat(a)})),this.result=a}}},e=t(92),l=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"自定义选项",usTitle:"Customized"}},[t("template",{slot:"demo"},[t("a-auto-complete",{staticStyle:{width:"200px"},attrs:{placeholder:"input here"},on:{search:s.handleSearch}},[t("template",{slot:"dataSource"},s._l(s.result,(function(a){return t("a-select-option",{key:a},[s._v(s._s(a))])})),1)],2)],1),s._v(" "),t("template",{slot:"description"},[t("p",[s._v('也可以直接传递slot="dataSource"的Option')])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-auto-complete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width: 200px"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@search")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleSearch"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input here"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataSource"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"email in result"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"email"')]),s._v(">")]),t("span",[s._v("{{")]),s._v("email"),t("span",[s._v("}}")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-auto-complete")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("result")]),s._v(": [],\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleSearch(value) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" result;\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!value || value.indexOf("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@'")]),s._v(") >= "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n          result = [];\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          result = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'gmail.com'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'163.com'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'qq.com'")]),s._v("].map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("domain")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${value}")]),s._v("@"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${domain}")]),s._v("`")]),s._v(");\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".result = result;\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=l.exports}}]);