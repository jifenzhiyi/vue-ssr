import createApp from './main';

// 返回一个函数，接收请求上下文，返回创建的vue实例
const serve = (context) => new Promise((resolve, reject) => {
  const { app, router, store } = createApp(context); // 跳转到首屏的地址
  router.push(context.url);

  // 路由就绪，返回结果
  router.onReady(() => {
    // 判断是否存在asyncData选项
    // 获取匹配路由相关组件
    const comps = router.getMatchedComponents();
    Promise.all(comps.forEach((comp) => {
      if (comp.asyncData) {
        return comp.asyncData({ store, route: router.currentRoute });
      }
      // return comp;
    })).then(() => {
      // 设置到上下文中的state, renderer将来会转换它
      context.state = store.state;
      resolve(app);
    }).catch(reject);
    resolve(app);
  }, reject);
});

export default serve;
