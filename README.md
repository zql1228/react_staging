## 路由组件与一般组件
1.写法不同
    一般组件：<Home/>
    路由组件： <Route path="/about" component={About} />
2.存放位置不同：
一般组件：写组件标签传递了什么，就收到什么
路由组件：接收到三个固定的属性
history:
    action: "POP"
    block: ƒ block(prompt)
    createHref: ƒ createHref(location)
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
location: 
    pathname: "/about"
    search: ""
    state: undefined
match:
    params: {}
    path: "/about"
    url: "/about"