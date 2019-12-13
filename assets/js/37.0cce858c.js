(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{651:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{size:"large"}},methods:{handleSizeChange:function(t){this.size=t.target.value}}},r=e(81),o=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[[e("demo-box-code",{attrs:{title:"按钮尺寸"}},[e("template",{slot:"demo"},[e("div",[e("a-radio-group",{attrs:{value:t.size},on:{change:t.handleSizeChange}},[e("a-radio-button",{attrs:{value:"large"}},[t._v("Large")]),t._v(" "),e("a-radio-button",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),e("a-radio-button",{attrs:{value:"small"}},[t._v("Small")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("a-button",{attrs:{type:"primary",size:t.size}},[t._v("Primary")]),t._v(" "),e("a-button",{attrs:{size:t.size}},[t._v("Normal")]),t._v(" "),e("a-button",{attrs:{type:"dashed",size:t.size}},[t._v("Dashed")]),t._v(" "),e("a-button",{attrs:{type:"danger",size:t.size}},[t._v("Danger")]),t._v(" "),e("a-button",{attrs:{type:"link",size:t.size}},[t._v("Link")]),t._v(" "),e("br"),t._v(" "),e("a-button",{attrs:{type:"primary",shape:"circle",icon:"download",size:t.size}}),t._v(" "),e("a-button",{attrs:{type:"primary",shape:"round",icon:"download",size:t.size}},[t._v("Download")]),t._v(" "),e("a-button",{attrs:{type:"primary",icon:"download",size:t.size}},[t._v("Download")]),t._v(" "),e("br"),t._v(" "),e("a-button-group",{attrs:{size:t.size}},[e("a-button",{attrs:{type:"primary"}},[e("a-icon",{attrs:{type:"left"}}),t._v("Backward ")],1),t._v(" "),e("a-button",{attrs:{type:"primary"}},[t._v(" Forward"),e("a-icon",{attrs:{type:"right"}})],1)],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("p",[t._v("按钮有大、中、小三种尺寸。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <div>\n    <a-radio-group :value="size" @change="handleSizeChange">\n      <a-radio-button value="large">Large</a-radio-button>\n      <a-radio-button value="default">Default</a-radio-button>\n      <a-radio-button value="small">Small</a-radio-button>\n    </a-radio-group>\n    <br /><br />\n    <a-button type="primary" :size="size">Primary</a-button>\n    <a-button :size="size">Normal</a-button>\n    <a-button type="dashed" :size="size">Dashed</a-button>\n    <a-button type="danger" :size="size">Danger</a-button>\n    <a-button type="link" :size="size">Link</a-button>\n    <br />\n    <a-button type="primary" shape="circle" icon="download" :size="size" />\n    <a-button type="primary" shape="round" icon="download" :size="size">Download</a-button>\n    <a-button type="primary" icon="download" :size="size">Download</a-button>\n    <br />\n    <a-button-group :size="size">\n      <a-button type="primary"> <a-icon type="left" />Backward </a-button>\n      <a-button type="primary"> Forward<a-icon type="right" /> </a-button>\n    </a-button-group>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        size: \'large\',\n      };\n    },\n    methods: {\n      handleSizeChange(e) {\n        this.size = e.target.value;\n      },\n    },\n  };\n<\/script>\n')])])])],2)]],2)}),[],!1,null,null,null);a.default=o.exports}}]);