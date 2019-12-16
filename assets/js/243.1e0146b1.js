(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{840:function(s,a,t){"use strict";t.r(a);var r=["U","Lucy","Tom","Edward"],l=["#f56a00","#7265e6","#ffbf00","#00a2ae"],e={data:function(){return{avatarValue:r[0],color:l[0]}},methods:{changeValue:function(){var s=r.indexOf(this.avatarValue);this.avatarValue=s<r.length-1?r[s+1]:r[0],this.color=s<l.length-1?l[s+1]:l[0]}}},n=t(92),v=Object(n.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"自动调整字符大小",usTitle:"Autoset Font Size"}},[t("template",{slot:"demo"},[t("div",[t("a-avatar",{style:{backgroundColor:s.color,verticalAlign:"middle"},attrs:{shape:"square",size:"large"}},[s._v(s._s(s.avatarValue))]),s._v(" "),t("a-button",{style:{marginLeft:16,verticalAlign:"middle"},attrs:{size:"small"},on:{click:s.changeValue}},[s._v("改变")])],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-avatar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"square"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{backgroundColor: color, verticalAlign: 'middle'}\"")]),s._v("\n      >")]),t("span",[s._v("{{")]),s._v("avatarValue"),t("span",[s._v("}}")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-avatar")]),s._v("\n    >")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{ marginLeft: 16, verticalAlign: 'middle' }\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"changeValue"')]),s._v("\n      >")]),s._v("改变"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v("\n    >")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" UserList = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'U'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Lucy'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tom'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Edward'")]),s._v("];\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" colorList = ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#f56a00'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#7265e6'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ffbf00'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#00a2ae'")]),s._v("];\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("avatarValue")]),s._v(": UserList["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": colorList["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      changeValue() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" index = UserList.indexOf("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".avatarValue);\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".avatarValue = index < UserList.length - "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" ? UserList[index + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("] : UserList["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("];\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".color = index < colorList.length - "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" ? colorList[index + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("] : colorList["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("];\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=v.exports}}]);