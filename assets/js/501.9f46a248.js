(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1205:function(v,_,t){"use strict";t.r(_);var e=t(92),d=Object(e.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",[t("h2",[v._v("API")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("默认值")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("autoFocus")]),v._v(" "),t("td",[v._v("自动获取焦点")]),v._v(" "),t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("defaultValue")]),v._v(" "),t("td",[v._v("设置初始取值。当 "),t("code",{pre:!0},[v._v("range")]),v._v(" 为 "),t("code",{pre:!0},[v._v("false")]),v._v(" 时，使用 "),t("code",{pre:!0},[v._v("number")]),v._v("，否则用 "),t("code",{pre:!0},[v._v("[number, number]")])]),v._v(" "),t("td",[v._v("number|number[]")]),v._v(" "),t("td",[v._v("0 or [0, 0]")])]),v._v(" "),t("tr",[t("td",[v._v("disabled")]),v._v(" "),t("td",[v._v("值为 "),t("code",{pre:!0},[v._v("true")]),v._v(" 时，滑块为禁用状态")]),v._v(" "),t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("dots")]),v._v(" "),t("td",[v._v("是否只能拖拽到刻度上")]),v._v(" "),t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("included")]),v._v(" "),t("td",[t("code",{pre:!0},[v._v("marks")]),v._v(" 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列")]),v._v(" "),t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("true")])]),v._v(" "),t("tr",[t("td",[v._v("marks")]),v._v(" "),t("td",[v._v("刻度标记，key 的类型必须为 "),t("code",{pre:!0},[v._v("number")]),v._v(" 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式")]),v._v(" "),t("td",[v._v("object")]),v._v(" "),t("td",[v._v("{ number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () => VNode }")])]),v._v(" "),t("tr",[t("td",[v._v("max")]),v._v(" "),t("td",[v._v("最大值")]),v._v(" "),t("td",[v._v("number")]),v._v(" "),t("td",[v._v("100")])]),v._v(" "),t("tr",[t("td",[v._v("min")]),v._v(" "),t("td",[v._v("最小值")]),v._v(" "),t("td",[v._v("number")]),v._v(" "),t("td",[v._v("0")])]),v._v(" "),t("tr",[t("td",[v._v("range")]),v._v(" "),t("td",[v._v("双滑块模式")]),v._v(" "),t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("step")]),v._v(" "),t("td",[v._v("步长，取值必须大于 0，并且可被 (max - min) 整除。当 "),t("code",{pre:!0},[v._v("marks")]),v._v(" 不为空对象时，可以设置 "),t("code",{pre:!0},[v._v("step")]),v._v(" 为 "),t("code",{pre:!0},[v._v("null")]),v._v("，此时 Slider 的可选值仅有 marks 标出来的部分。")]),v._v(" "),t("td",[v._v("number|null")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("tipFormatter")]),v._v(" "),t("td",[v._v("Slider 会把当前值传给 "),t("code",{pre:!0},[v._v("tipFormatter")]),v._v("，并在 Tooltip 中显示 "),t("code",{pre:!0},[v._v("tipFormatter")]),v._v(" 的返回值，若为 null，则隐藏 Tooltip。")]),v._v(" "),t("td",[v._v("Function|null")]),v._v(" "),t("td",[v._v("IDENTITY")])]),v._v(" "),t("tr",[t("td",[v._v("value(v-model)")]),v._v(" "),t("td",[v._v("设置当前取值。当 "),t("code",{pre:!0},[v._v("range")]),v._v(" 为 "),t("code",{pre:!0},[v._v("false")]),v._v(" 时，使用 "),t("code",{pre:!0},[v._v("number")]),v._v("，否则用 "),t("code",{pre:!0},[v._v("[number, number]")])]),v._v(" "),t("td",[v._v("number|number[]")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("vertical")]),v._v(" "),t("td",[v._v("值为 "),t("code",{pre:!0},[v._v("true")]),v._v(" 时，Slider 为垂直方向")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("false")])]),v._v(" "),t("tr",[t("td",[v._v("tooltipVisible")]),v._v(" "),t("td",[v._v("值为"),t("code",{pre:!0},[v._v("true")]),v._v("时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td")])])]),v._v(" "),t("h3",[v._v("事件")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("事件名称")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("回调参数")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("afterChange")]),v._v(" "),t("td",[v._v("与 "),t("code",{pre:!0},[v._v("mouseup")]),v._v(" 触发时机一致，把当前值作为参数传入。")]),v._v(" "),t("td",[v._v("Function(value)")])]),v._v(" "),t("tr",[t("td",[v._v("change")]),v._v(" "),t("td",[v._v("当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。")]),v._v(" "),t("td",[v._v("Function(value)")])])])]),v._v(" "),t("h2",[v._v("方法")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("blur()")]),v._v(" "),t("td",[v._v("移除焦点")])]),v._v(" "),t("tr",[t("td",[v._v("focus()")]),v._v(" "),t("td",[v._v("获取焦点")])])])])])}],!1,null,null,null);_.default=d.exports}}]);