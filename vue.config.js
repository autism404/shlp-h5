// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true, // console
              drop_console: true,
              pure_funcs: ['console.log'] // 移除console
            }
          },
          sourceMap: true,
          parallel: true
        })
      );
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'));

    config.output.filename('[name].[hash].js').end();
    // #region svg-config
    // config.module.rules.delete('svg'); // 删除默认配置中处理svg,
    // config.module
    //   .rule('svg-sprite-loader')
    //   .test(/\.svg$/)
    //   .include
    //   .add(resolve('src/icons')) // 处理svg目录
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   });
    // #endregion svg-config

    if (process.env.NODE_ENV !== 'development') {
      // #region 图片压缩
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          bypassOnDebug: true
        })
        .end();
      // #endregion

      // #region 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(args => { });

      // #endregion

      // #region 忽略生成环境打包的文件
      var externals = {
        vue: 'Vue',
        axios: 'axios',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        vant: 'vant'
      };
      config.externals(externals);
      const cdn = {
        css: ['https://cdn.jsdelivr.net/npm/vant@2.9.0/lib/index.css"'],
        js: [
          'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
          // vue-router
          'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js',
          // vuex
          'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
          // axios
          'https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
          // vant
          'https://cdn.jsdelivr.net/npm/vant@2.9.0/lib/vant.min.js',
        ]
      };
      config.plugin('html').tap(args => {
        args[0].cdn = cdn;
        return args;
      });
      // #endregion

      // #region 分析打包体积
      if (process.env.IS_ANALYZE) {
        config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static'
          }
        ]);
      }
      // #endregion 分析打包体积
    }
  },
  devServer: {
    port: 8080, // 端口号
    // host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    disableHostCheck: true,
    proxy: 'http://sanheliangpin.121.soft1024.com'
  }
};
