(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{649:function(n,t,a){"use strict";a.r(t);var o={data:function(){return{loading:!1,iconLoading:!1}},methods:{enterLoading:function(){this.loading=!0},enterIconLoading:function(){this.iconLoading={delay:1e3}}}},e=a(81),i=Object(e.a)(o,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"加载中状态"}},[a("template",{slot:"demo"},[a("div",[a("a-button",{attrs:{type:"primary",loading:""}},[n._v("\n      Loading\n    ")]),n._v(" "),a("a-button",{attrs:{type:"primary",size:"small",loading:""}},[n._v("\n      Loading\n    ")]),n._v(" "),a("br"),n._v(" "),a("a-button",{attrs:{type:"primary",loading:n.loading},on:{mouseenter:n.enterLoading}},[n._v("\n      mouseenter me!\n    ")]),n._v(" "),a("a-button",{attrs:{type:"primary",icon:"poweroff",loading:n.iconLoading},on:{click:n.enterIconLoading}},[n._v("\n      延迟1s\n    ")]),n._v(" "),a("br"),n._v(" "),a("a-button",{attrs:{type:"primary",loading:""}}),n._v(" "),a("a-button",{attrs:{shape:"circle",loading:""}}),n._v(" "),a("a-button",{attrs:{type:"primary",shape:"circle",loading:""}})],1)]),n._v(" "),a("template",{slot:"description"},[a("p",[n._v("添加 "),a("code",{pre:!0},[n._v("loading")]),n._v(" 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。")])]),n._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[n._v('<template>\n  <div>\n    <a-button type="primary" loading>\n      Loading\n    </a-button>\n    <a-button type="primary" size="small" loading>\n      Loading\n    </a-button>\n    <br />\n    <a-button type="primary" :loading="loading" @mouseenter="enterLoading">\n      mouseenter me!\n    </a-button>\n    <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">\n      延迟1s\n    </a-button>\n    <br />\n    <a-button type="primary" loading />\n    <a-button shape="circle" loading />\n    <a-button type="primary" shape="circle" loading />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        loading: false,\n        iconLoading: false,\n      };\n    },\n    methods: {\n      enterLoading() {\n        this.loading = true;\n      },\n      enterIconLoading() {\n        this.iconLoading = { delay: 1000 };\n      },\n    },\n  };\n<\/script>\n')])])])],2)]],2)}),[],!1,null,null,null);t.default=i.exports}}]);