(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{913:function(s,a,t){"use strict";t.r(a);var e={data:function(){return{current:["mail"],openKeys:["sub1"]}},methods:{handleClick:function(s){console.log("click",s)},titleClick:function(s){console.log("titleClick",s)}},watch:{openKeys:function(s){console.log("openKeys",s)}}},n=t(92),r=Object(n.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"内嵌菜单",usTitle:"Inline menu"}},[t("template",{slot:"demo"},[t("div",[t("a-menu",{staticStyle:{width:"256px"},attrs:{defaultSelectedKeys:["1"],openKeys:s.openKeys,mode:"inline"},on:{click:s.handleClick,"update:openKeys":function(a){s.openKeys=a},"update:open-keys":function(a){s.openKeys=a}}},[t("a-sub-menu",{key:"sub1",on:{titleClick:s.titleClick}},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"mail"}}),t("span",[s._v("Navigation One")])],1),s._v(" "),t("a-menu-item-group",{key:"g1"},[t("template",{slot:"title"},[t("a-icon",{attrs:{type:"qq"}}),t("span",[s._v("Item 1")])],1),s._v(" "),t("a-menu-item",{key:"1"},[s._v("Option 1")]),s._v(" "),t("a-menu-item",{key:"2"},[s._v("Option 2")])],2),s._v(" "),t("a-menu-item-group",{key:"g2",attrs:{title:"Item 2"}},[t("a-menu-item",{key:"3"},[s._v("Option 3")]),s._v(" "),t("a-menu-item",{key:"4"},[s._v("Option 4")])],1)],1),s._v(" "),t("a-sub-menu",{key:"sub2",on:{titleClick:s.titleClick}},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"appstore"}}),t("span",[s._v("Navigation Two")])],1),s._v(" "),t("a-menu-item",{key:"5"},[s._v("Option 5")]),s._v(" "),t("a-menu-item",{key:"6"},[s._v("Option 6")]),s._v(" "),t("a-sub-menu",{key:"sub3",attrs:{title:"Submenu"}},[t("a-menu-item",{key:"7"},[s._v("Option 7")]),s._v(" "),t("a-menu-item",{key:"8"},[s._v("Option 8")])],1)],1),s._v(" "),t("a-sub-menu",{key:"sub4"},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"setting"}}),t("span",[s._v("Navigation Three")])],1),s._v(" "),t("a-menu-item",{key:"9"},[s._v("Option 9")]),s._v(" "),t("a-menu-item",{key:"10"},[s._v("Option 10")]),s._v(" "),t("a-menu-item",{key:"11"},[s._v("Option 11")]),s._v(" "),t("a-menu-item",{key:"12"},[s._v("Option 12")])],1)],1)],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("垂直菜单，子菜单内嵌在菜单区域。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleClick"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width: 256px"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":defaultSelectedKeys")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['1']\"")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":openKeys.sync")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"openKeys"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"inline"')]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sub1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@titleClick")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"titleClick"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mail"')]),s._v(" />")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("Navigation One"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item-group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"g1"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v("\n            >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"qq"')]),s._v(" />")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("Item 1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v("\n          >")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),s._v("Option 1"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("Option 2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item-group")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item-group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"g2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Item 2"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("Option 3"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(">")]),s._v("Option 4"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item-group")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sub2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@titleClick")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"titleClick"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appstore"')]),s._v(" />")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("Navigation Two"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(">")]),s._v("Option 5"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("Option 6"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sub3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Submenu"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"7"')]),s._v(">")]),s._v("Option 7"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v(">")]),s._v("Option 8"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sub4"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"setting"')]),s._v(" />")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("Navigation Three"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"9"')]),s._v(">")]),s._v("Option 9"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),s._v("Option 10"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"11"')]),s._v(">")]),s._v("Option 11"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("Option 12"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-sub-menu")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-menu")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("current")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mail'")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("openKeys")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sub1'")]),s._v("],\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleClick(e) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", e);\n      },\n      titleClick(e) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'titleClick'")]),s._v(", e);\n      },\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n      openKeys(val) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'openKeys'")]),s._v(", val);\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=r.exports}}]);