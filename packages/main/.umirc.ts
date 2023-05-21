import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', microApp: 'test' },
  ],
  fastRefresh: {},
  webpack5:{},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'test', // 唯一 id
          entry: '//localhost:7666', // html entry
        },
      ],
    },
  },
});
