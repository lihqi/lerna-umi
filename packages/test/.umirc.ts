import { defineConfig } from 'umi';
import { join } from 'path';


const themePath = join(__dirname, '../main/style/theme');
const themeSassPath = join(themePath, 'theme.scss');

export default defineConfig({
  sass:{},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
  chainWebpack(memo, { webpack }) {
    const oneOfsMap = memo.module.rule('sass').oneOfs.store;
    oneOfsMap.forEach((element) => {
      element
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: themeSassPath,
        })
        .end();
    });
  },
});
