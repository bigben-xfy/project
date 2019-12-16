(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{887:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{visible:!1,childrenDrawer:!1}},methods:{showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},showChildrenDrawer:function(){this.childrenDrawer=!0},onChildrenDrawerClose:function(){this.childrenDrawer=!1}}},l=t(92),e=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"多层抽屉",usTitle:"Multi-level drawer"}},[t("template",{slot:"demo"},[t("div",[t("a-button",{attrs:{type:"primary"},on:{click:s.showDrawer}},[s._v("\n      Open\n    ")]),s._v(" "),t("a-drawer",{attrs:{title:"Multi-level drawer",width:"520",closable:!1,visible:s.visible},on:{close:s.onClose}},[t("a-button",{attrs:{type:"primary"},on:{click:s.showChildrenDrawer}},[s._v("\n        Two-level drawer\n      ")]),s._v(" "),t("a-drawer",{attrs:{title:"Two-level Drawer",width:"320",closable:!1,visible:s.childrenDrawer},on:{close:s.onChildrenDrawerClose}},[t("a-button",{attrs:{type:"primary"},on:{click:s.showChildrenDrawer}},[s._v("\n          This is two-level drawer\n        ")])],1),s._v(" "),t("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[t("a-button",{staticStyle:{marginRight:"8px"},on:{click:s.onClose}},[s._v("\n          Cancel\n        ")]),s._v(" "),t("a-button",{attrs:{type:"primary"},on:{click:s.onClose}},[s._v("\n          Submit\n        ")])],1)],1)],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showDrawer"')]),s._v(">")]),s._v("\n      Open\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-drawer")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Multi-level drawer"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"520"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":closable")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@close")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClose"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showChildrenDrawer"')]),s._v(">")]),s._v("\n        Two-level drawer\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-drawer")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Two-level Drawer"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"320"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":closable")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@close")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChildrenDrawerClose"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"childrenDrawer"')]),s._v("\n      >")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showChildrenDrawer"')]),s._v(">")]),s._v("\n          This is two-level drawer\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-drawer")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{\n          position: 'absolute',\n          bottom: 0,\n          width: '100%',\n          borderTop: '1px solid #e8e8e8',\n          padding: '10px 16px',\n          textAlign: 'right',\n          left: 0,\n          background: '#fff',\n          borderRadius: '0 0 4px 4px',\n        }\"")]),s._v("\n      >")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"marginRight: 8px"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClose"')]),s._v(">")]),s._v("\n          Cancel\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClose"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("\n          Submit\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-drawer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("childrenDrawer")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      showDrawer() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      },\n      onClose() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      },\n      showChildrenDrawer() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".childrenDrawer = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      },\n      onChildrenDrawerClose() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".childrenDrawer = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=e.exports}}]);