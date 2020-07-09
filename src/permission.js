import router from './router';
// import store from './store';

router.beforeEach(async (to, from, next) => {
  // 设置title
  document.title = to.query.title || to.meta.title;
  next();
});
router.afterEach((to, from) => {
  // 设置滚动
  window.scrollTo(0, 0);
});
