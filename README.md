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
## 五.NavLink 与封装NavLink
1.可以实现路由链接的高亮，通过activeClassName指定样式名
2.标签体内容是一个特殊的标签属性
3.通过this.props.children可以获取标签体内容
## 六.Switch的使用
1.通常情况下，path和component是一一对应的关系
2.Switch可以提高路由匹配效率（单一匹配）
## 七 解决多级历经刷新页面样式丢失问题
1.    <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">
2.    <link rel="stylesheet" href="/css/bootstrap.css">
3. 使用hash路由 root.render(<HashRouter><App/></HashRouter>)
## 八 路由的严格匹配与模糊匹配
1.默认使用的是模糊匹配（输入的路径必须要包含匹配的路径，且顺序要一致）
2.开启沿着匹配    <Route exact path="/home" component={Home} />
3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法匹配二级路由
## 九 重定向
        <Switch>
            <Route  path="/about" component={About} /> 
            <Route  path="/home" component={Home} />
            <Redirect to="/about"/>
        </Switch>
## 十一.向路由组件传递参数
路由链接（携带参数）：  <Link to={`/home/message/detail/${item.id}/${item.title}`} >{item.title}</Link>
注册路由： <Route  path="/home/message/detail/:id/:title" component={Detail}></Route>
接受参数：  const {id,title}=this.props.match.params