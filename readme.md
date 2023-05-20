### videojs 报错 解决过程（未解决）
遇到 https://github.com/videojs/video.js/issues/7863 同样的问题，发现已经有pr解决这个问题
尝试升级videojs到8.3.0（最新版）
遇到新的问题 https://github.com/videojs/video.js/issues/8149，目前仍未解决，需要一个临时方案让videojs可用
尝试复现
- vite（^4.3.2） + react（18.x） + videojs（8.3.0）（未复现）
- lerna（^6.6.2）+ vite（^4.3.2） + react（18.x） + videojs（8.3.0）（未复现）
- lerna（^6.6.2）+ umi（^3.5.40） + react（17.x） + videojs（8.3.0）（未复现）
- lerna（^6.6.2）+ umi（^3.5.40） + react（17.x） + videojs（8.3.0）（未复现）
按照 https://v3.umijs.org/zh-CN/plugins/plugin-qiankun 一步步配置乾坤应用 遇到 https://github.com/umijs/qiankun/issues/1786 react依赖冲突的问题 跑不起来
- lerna（^6.6.2）+ umi（^3.5.40）+@umijs/plugin-qiankun（^2.x） + react（17.x） + videojs（8.3.0）（跑不起来）
降级react到16
- lerna（^6.6.2）+ umi（^3.5.40）+@umijs/plugin-qiankun（^2.x） + react（16.x） + videojs（8.3.0）（未复现）
把lerna降级到4.0.0,react改回17
- lerna（4.0.0）+ umi（^3.5.40）+@umijs/plugin-qiankun（^2.x） + react（17.x） + videojs（8.3.0）（跑不起来）