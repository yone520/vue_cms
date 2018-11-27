Vuex
拿来做数据共享的，比如一个登录用户名需要在很多页面需要使用

组件访问状态state
在组件内部computed后面写
mapState({
  count: (state对象) => {}
})
mapState(['state对象的键'])
...mapState

改变状态state mapMutations
在组件内部methods后面写
mapMutations(['mutations对象里面的键'])
...mapMutations

getters 过滤state
其实这个就当与组件的computed，那为什么需要这个喃？
因为state是拿来组件共享的，所以想过滤state的数据，就不用放在每个组件内部了
比如一个性别后台返回0,1，很多组件需要展示(男女)
...mapGetters(['getters里面的键'])

actions 异步修改state，这里面可以写异步，mutations不建议写，完了
https://blog.csdn.net/dkr380205984/article/details/82347910
因为它的dispath可以处理action返回的promise
actions = {
  fn(context上下文对象，和store差不多) {}
}

module 模块组
随着项目的复杂性增加，我们共享的状态越来越多，这时候我们就需要把我们状态的各种操作进行一个分组，分组后再进行按组编写
const moduleA = {
  state,actions,getters,mutations
}

Vuex.Store({
  modules: {
    a: moduleA
  }
})


