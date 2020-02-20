(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"monibuca快速起步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monibuca快速起步","aria-hidden":"true"}},[t._v("#")]),t._v(" Monibuca快速起步")]),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),s("p",[t._v("Monibuca 是一个开源的流媒体服务器开发框架，适用于快速定制化开发流媒体服务器，可以对接CDN厂商，作为回源服务器，也可以自己搭建集群部署环境。\n丰富的内置插件提供了流媒体服务器的常见功能，例如rtmp server、http-flv、视频录制、QoS等。除此以外还内置了后台web界面，方便观察服务器运行的状态。\n也可以自己开发后台管理界面，通过api方式获取服务器的运行信息。\nMonibuca 提供了可供定制化开发的插件机制，可以任意扩展其功能。")]),s("h2",{attrs:{id:"使用实例管理器启动实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用实例管理器启动实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用实例管理器启动实例")]),s("h3",{attrs:{id:"step0-配置golang环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step0-配置golang环境","aria-hidden":"true"}},[t._v("#")]),t._v(" step0 配置golang环境")]),s("p",[t._v("将GOPATH的bin目录加入环境变量PATH中，这样可以快速启动Monibuca实例管理器")]),s("h3",{attrs:{id:"step1-安装monibuca"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step1-安装monibuca","aria-hidden":"true"}},[t._v("#")]),t._v(" step1 安装Monibuca")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go get github.com/langhuihui/monibuca\n")])])]),s("p",[t._v("安装完成后会在GOPATH的bin目录下生成monibuca可执行文件")]),s("h3",{attrs:{id:"step2-启动monibuca实例管理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step2-启动monibuca实例管理器","aria-hidden":"true"}},[t._v("#")]),t._v(" step2 启动monibuca实例管理器")]),s("p",[t._v("如果GOPATH的bin目录已经加入PATH环境变量，则可以直接执行")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("monibuca\n")])])]),s("p",[t._v("程序默认监听8000端口，你也可以带上参数指定启动的端口")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("monibuca -port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8001")]),t._v("\n")])])]),s("h3",{attrs:{id:"step3-创建实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step3-创建实例","aria-hidden":"true"}},[t._v("#")]),t._v(" step3 创建实例")]),s("p",[t._v("浏览器打开上面的端口地址，出现实例管理器页面，点击创建标签页，按照提示选择实例放置的目录和插件，进行创建。\n完成后会在所在目录创建若干文件并运行该golang项目，如果选择了网关插件，则可以在该插件配置的端口下看到控制台页面。")]),s("h2",{attrs:{id:"实例目录说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例目录说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例目录说明")]),s("ol",[s("li",[t._v("main.go")]),s("li",[t._v("config.toml")]),s("li",[t._v("restart.sh")])]),s("h3",{attrs:{id:"main-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-go","aria-hidden":"true"}},[t._v("#")]),t._v(" main.go")]),s("p",[t._v("实例启动的主文件，初始化各类插件，然后调用配置文件启动引擎")]),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/langhuihui/monibuca/monica"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/langhuihui/monibuca/plugins"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config.toml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以修改该主文件，添加任意功能")]),s("h3",{attrs:{id:"config-toml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-toml","aria-hidden":"true"}},[t._v("#")]),t._v(" config.toml")]),s("p",[t._v("该配置文件主要是为了定制各个插件的配置，例如监听端口号等，具体还是要看各个插件的设计。")]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("如果你编写了自己的插件，就必须在该配置文件中写入对自己插件的配置信息")])]),s("p",[t._v("如果注释掉部分插件的配置，那么该插件就不会启用，典型的配置如下：")]),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Plugins.HDL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAddr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":2020"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Plugins.Jessica")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAddr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8080"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Plugins.RTMP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAddr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":1935"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Plugins.GateWay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAddr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":81"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[Plugins.Cluster]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#Master = "localhost:2019"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#ListenAddr = ":2019"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[Plugins.Auth]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#Key="www.monibuca.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[Plugins.RecordFlv]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#Path="./resouce"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Plugins.QoS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Suffix")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"medium"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("具体配置的含义，可以参考每个插件的说明")]),s("h3",{attrs:{id:"restart-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restart-sh","aria-hidden":"true"}},[t._v("#")]),t._v(" restart.sh")]),s("p",[t._v("该文件是一个用来重启实例的bash脚本，方便通过实例管理器重启，或者手工重启。")])])}],!1,null,null,null);a.default=e.exports}}]);