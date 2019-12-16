(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{1018:function(s,a,t){"use strict";t.r(a);var e=t(165).a.SHOW_PARENT,r=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}],l={data:function(){return{value:["0-0-0"],treeData:r,SHOW_PARENT:e}},methods:{onChange:function(s){console.log("onChange ",s),this.value=s}}},n=t(92),v=Object(n.a)(l,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"可勾选",usTitle:"Checkable"}},[t("template",{slot:"demo"},[t("a-tree-select",{staticStyle:{width:"300px"},attrs:{treeData:s.treeData,value:s.value,treeCheckable:"",showCheckedStrategy:s.SHOW_PARENT,searchPlaceholder:"Please select"},on:{change:s.onChange}})],1),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("使用勾选框实现多选功能。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-tree-select")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width: 300px"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":treeData")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"treeData"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onChange"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("treeCheckable")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":showCheckedStrategy")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"SHOW_PARENT"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("searchPlaceholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Please select"')]),s._v("\n  />")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { TreeSelect } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" SHOW_PARENT = TreeSelect.SHOW_PARENT;\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" treeData = [\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Node1'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-0'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-0'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n        {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Child Node1'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-0-0'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-0-0'")]),s._v(",\n        },\n      ],\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Node2'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n        {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Child Node3'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1-0'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1-0'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        },\n        {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Child Node4'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1-1'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1-1'")]),s._v(",\n        },\n        {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Child Node5'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1-2'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-1-2'")]),s._v(",\n        },\n      ],\n    },\n  ];\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0-0-0'")]),s._v("],\n        treeData,\n        SHOW_PARENT,\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onChange(value) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'onChange '")]),s._v(", value);\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = value;\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=v.exports}}]);