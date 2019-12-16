(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1256:function(e,t,r){"use strict";r.r(t);var v=r(92),s=Object(v.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("API")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Default")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("dataSource")]),e._v(" "),r("td",[e._v("Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in "),r("code",{pre:!0},[e._v("targetKeys")]),e._v(" prop.")]),e._v(" "),r("td",[e._v("[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}]")]),e._v(" "),r("td",[e._v("[]")])]),e._v(" "),r("tr",[r("td",[e._v("disabled")]),e._v(" "),r("td",[e._v("Whether disabled transfer")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")])]),e._v(" "),r("tr",[r("td",[e._v("filterOption")]),e._v(" "),r("td",[e._v("A function to determine whether an item should show in search result list")]),e._v(" "),r("td",[e._v("(inputValue, option): boolean")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("footer")]),e._v(" "),r("td",[e._v("customize the progress dot by setting a scoped slot")]),e._v(" "),r("td",[e._v('slot="footer" slot-scope="props"')]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("lazy")]),e._v(" "),r("td",[e._v("property of vc-lazy-load for lazy rendering items. Turn off it by set to "),r("code",{pre:!0},[e._v("false")]),e._v(".")]),e._v(" "),r("td",[e._v("object|boolean")]),e._v(" "),r("td",[r("code",{pre:!0},[e._v("{ height: 32, offset: 32 }")])])]),e._v(" "),r("tr",[r("td",[e._v("listStyle")]),e._v(" "),r("td",[e._v("A custom CSS style used for rendering the transfer columns.")]),e._v(" "),r("td",[e._v("object")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("locale")]),e._v(" "),r("td",[e._v("i18n text including filter, empty text, item unit, etc")]),e._v(" "),r("td",[e._v("object")]),e._v(" "),r("td",[r("code",{pre:!0},[e._v("{ itemUnit: 'item', itemsUnit: 'items', notFoundContent: 'The list is empty', searchPlaceholder: 'Search here' }")])])]),e._v(" "),r("tr",[r("td",[e._v("operations")]),e._v(" "),r("td",[e._v("A set of operations that are sorted from top to bottom.")]),e._v(" "),r("td",[e._v("string[]")]),e._v(" "),r("td",[e._v("['>', '<']")])]),e._v(" "),r("tr",[r("td",[e._v("render")]),e._v(" "),r("td",[e._v("The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a element which is generated from that record. Also, it can return a plain object with "),r("code",{pre:!0},[e._v("value")]),e._v(" and "),r("code",{pre:!0},[e._v("label")]),e._v(", "),r("code",{pre:!0},[e._v("label")]),e._v(" is a element and "),r("code",{pre:!0},[e._v("value")]),e._v(" is for title")]),e._v(" "),r("td",[e._v("Function(record)")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("selectedKeys")]),e._v(" "),r("td",[e._v("A set of keys of selected items.")]),e._v(" "),r("td",[e._v("string[]")]),e._v(" "),r("td",[e._v("[]")])]),e._v(" "),r("tr",[r("td",[e._v("showSearch")]),e._v(" "),r("td",[e._v("If included, a search box is shown on each column.")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("false")])]),e._v(" "),r("tr",[r("td",[e._v("targetKeys")]),e._v(" "),r("td",[e._v("A set of keys of elements that are listed on the right column.")]),e._v(" "),r("td",[e._v("string[]")]),e._v(" "),r("td",[e._v("[]")])]),e._v(" "),r("tr",[r("td",[e._v("titles")]),e._v(" "),r("td",[e._v("A set of titles that are sorted from left to right.")]),e._v(" "),r("td",[e._v("string[]")]),e._v(" "),r("td",[e._v("-")])])])]),e._v(" "),r("h3",[e._v("events")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Events Name")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Arguments")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("change")]),e._v(" "),r("td",[e._v("A callback function that is executed when the transfer between columns is complete.")]),e._v(" "),r("td",[e._v("(targetKeys, direction, moveKeys): void")])]),e._v(" "),r("tr",[r("td",[e._v("scroll")]),e._v(" "),r("td",[e._v("A callback function which is executed when scroll options list")]),e._v(" "),r("td",[e._v("(direction, event): void")])]),e._v(" "),r("tr",[r("td",[e._v("search")]),e._v(" "),r("td",[e._v("A callback function which is executed when search field are changed")]),e._v(" "),r("td",[e._v("(direction: 'left'|'right', value: string): void")])]),e._v(" "),r("tr",[r("td",[e._v("selectChange")]),e._v(" "),r("td",[e._v("A callback function which is executed when selected items are changed.")]),e._v(" "),r("td",[e._v("(sourceSelectedKeys, targetSelectedKeys): void")])])])]),e._v(" "),r("h2",[e._v("Warning")]),e._v(" "),r("p",[e._v("According the standard of Vue, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in "),r("code",{pre:!0},[e._v("dataSource")]),e._v(" array. By default, "),r("code",{pre:!0},[e._v("key")]),e._v(" property is used as an unique identifier.")]),e._v(" "),r("p",[e._v("If there's no "),r("code",{pre:!0},[e._v("key")]),e._v(" in your data, you should use "),r("code",{pre:!0},[e._v("rowKey")]),e._v(" to specify the key that will be used for uniquely identify each element.")]),e._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// eg. your primary key is `uid`")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" "),r("span",{pre:!0,attrs:{class:"xml"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("Transfer")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":rowKey")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"record => record.uid"')]),e._v(" />")]),e._v(";\n")])])])])}],!1,null,null,null);t.default=s.exports}}]);