(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{929:function(s,a,t){"use strict";t.r(a);var l={data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},hideModal:function(){this.visible=!1},confirm:function(){this.$confirm({title:"Confirm",content:"Bla bla ...",okText:"确认",cancelText:"取消"})}}},r=t(92),n=Object(r.a)(l,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"国际化",usTitle:"Internationalization"}},[t("template",{slot:"demo"},[t("div",[t("a-button",{attrs:{type:"primary"},on:{click:s.showModal}},[s._v("Modal")]),s._v(" "),t("a-modal",{attrs:{title:"Modal",okText:"确认",cancelText:"取消"},on:{ok:s.hideModal},model:{value:s.visible,callback:function(a){s.visible=a},expression:"visible"}},[t("p",[s._v("Bla bla ...")]),s._v(" "),t("p",[s._v("Bla bla ...")]),s._v(" "),t("p",[s._v("Bla bla ...")])]),s._v(" "),t("br"),s._v(" "),t("br"),s._v(" "),t("a-button",{on:{click:s.confirm}},[s._v("Confirm")])],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("设置 "),t("code",{pre:!0},[s._v("okText")]),s._v(" 与 "),t("code",{pre:!0},[s._v("cancelText")]),s._v(" 以自定义按钮文字。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showModal"')]),s._v(">")]),s._v("Modal"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-modal")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Modal"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ok")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"hideModal"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("okText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"确认"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cancelText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"取消"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Bla bla ..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Bla bla ..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Bla bla ..."),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-modal")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"confirm"')]),s._v(">")]),s._v("Confirm"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      showModal() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      },\n      hideModal() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      },\n      confirm() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$confirm({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Confirm'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Bla bla ...'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("okText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确认'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cancelText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'取消'")]),s._v(",\n        });\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=n.exports}}]);