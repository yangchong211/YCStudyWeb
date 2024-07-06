# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-rc.37](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.36...v2.0.0-rc.37) (2024-06-21)

**Note:** Version bump only for package @vuepress/ecosystem

# [2.0.0-rc.36](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.35...v2.0.0-rc.36) (2024-06-18)

### Bug Fixes

- **theme-default:** fix transition for `<kbd>`, `<hr>` and `<blockquote>`, close [#203](https://github.com/vuepress/ecosystem/issues/203) ([#205](https://github.com/vuepress/ecosystem/issues/205)) ([69a07dc](https://github.com/vuepress/ecosystem/commit/69a07dcc445e3e555c52fb7852cb3270cd383702))
- **theme-default:** fix alias with vite ([ba09b87](https://github.com/vuepress/ecosystem/commit/ba09b873cb525af4494d5b42663dee3e97b85bbe))
- **theme-default:** fix sidebar selector ([0a29075](https://github.com/vuepress/ecosystem/commit/0a29075388cb435e5f95d25dc1b54abbcd343d9a))

### Features

- add support for highlight whitespace ([#204](https://github.com/vuepress/ecosystem/issues/204)) ([b91d04e](https://github.com/vuepress/ecosystem/commit/b91d04e5cc44adcff7405f2cdc14c4b9a6d9834d))
- add support for word highlight ([#201](https://github.com/vuepress/ecosystem/issues/201)) ([6f37277](https://github.com/vuepress/ecosystem/commit/6f372774488f79e8570e1d8b4b1e26a5744be807))
- **create-vuepress:** use optional peers to ensure version is up-to-date ([e8da8b8](https://github.com/vuepress/ecosystem/commit/e8da8b81a9b515e4a5b0838468be78724ffe2120))
- **theme-default:** improve sidebar headers ([#196](https://github.com/vuepress/ecosystem/issues/196)) ([c39e4e4](https://github.com/vuepress/ecosystem/commit/c39e4e450c64e05c3939f866f56474cb83722b2c))

# [2.0.0-rc.35](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.34...v2.0.0-rc.35) (2024-06-05)

### Bug Fixes

- **theme-default:** fix client config file import ([e5dcba2](https://github.com/vuepress/ecosystem/commit/e5dcba2c1ad03ef3083fcfc3bcc8d0105793f270))

### Features

- **theme-default:** improve prev/next links config and auto detection ([#195](https://github.com/vuepress/ecosystem/issues/195)) ([e50f8ca](https://github.com/vuepress/ecosystem/commit/e50f8ca8a9bf1e7e39ba86bec8ca0f9270ecf432))

# [2.0.0-rc.34](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.33...v2.0.0-rc.34) (2024-06-04)

### Bug Fixes

- **theme-default:** fix h2 normalize, close [#190](https://github.com/vuepress/ecosystem/issues/190) ([03646b9](https://github.com/vuepress/ecosystem/commit/03646b9c2a6477af71ec493dc583ccf4ea7fd52a))

### Features

- extract lineNumbers plugin to @vuepress/highlighter-helper ([#193](https://github.com/vuepress/ecosystem/issues/193)) ([969a744](https://github.com/vuepress/ecosystem/commit/969a744155f9e37f05ce52e61537e65b757d5649))
- **helper:** add `getHeaders()` ([#189](https://github.com/vuepress/ecosystem/issues/189)) ([421fece](https://github.com/vuepress/ecosystem/commit/421fece35335278b6c77af636b4a3d200b1104ea))
- **plugin-comment:** export use apis ([6ac961f](https://github.com/vuepress/ecosystem/commit/6ac961f33f8211b01938323588faa49757d74516))
- **plugin-photo-swipe:** support download and fullscreen option, close [#185](https://github.com/vuepress/ecosystem/issues/185) ([#192](https://github.com/vuepress/ecosystem/issues/192)) ([ce49954](https://github.com/vuepress/ecosystem/commit/ce499542f45526039b108070914b7373e90e1887))

# [2.0.0-rc.33](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.32...v2.0.0-rc.33) (2024-05-30)

### Bug Fixes

- **plugin-copy-code:** copy button render incorrectly in Safari ([#165](https://github.com/vuepress/ecosystem/issues/165)) ([6008e9c](https://github.com/vuepress/ecosystem/commit/6008e9c25a276ec468c69e92850e266a5a404828))
- **theme-default:** code block line number misalignment in Safari ([#164](https://github.com/vuepress/ecosystem/issues/164)) ([16f9024](https://github.com/vuepress/ecosystem/commit/16f902491137a9fdcb44d68fe66eae0aeb992023))
- **theme-default:** fix arrow style ([bb0025c](https://github.com/vuepress/ecosystem/commit/bb0025ca54505fd2c4bf9ebbeb91e3f1ff12f36a))
- **theme-default:** fix h2 border color ([7833fb0](https://github.com/vuepress/ecosystem/commit/7833fb0c1da495dcd362e6c3550d4e09e409930a))
- **theme-default:** fix language dropdown, close [#160](https://github.com/vuepress/ecosystem/issues/160) ([199c266](https://github.com/vuepress/ecosystem/commit/199c2662762e0e2ffe43529f219299ce5aadba2f))
- **theme-default:** fix normalize style import ([d0c626a](https://github.com/vuepress/ecosystem/commit/d0c626acb07d9182006160f4c1d910af7279c296))
- **theme-default:** fix shiki code block style ([b20360a](https://github.com/vuepress/ecosystem/commit/b20360a24edfeb8336749002c9b86d6f1ca21d75))

### Features

- add `:line-numbers=number` supports ([#161](https://github.com/vuepress/ecosystem/issues/161)) ([a0a7288](https://github.com/vuepress/ecosystem/commit/a0a7288e64fa74ee82a0479d7d94e902495d82bf))
- add `shiki`/`prismjs` class names to differentiate highlight plugins ([#181](https://github.com/vuepress/ecosystem/issues/181)) ([0ef4c98](https://github.com/vuepress/ecosystem/commit/0ef4c98abed7dc52d0a44753c78c2c132db0897b))
- **helper:** add normalize.css ([#158](https://github.com/vuepress/ecosystem/issues/158)) ([47b9007](https://github.com/vuepress/ecosystem/commit/47b9007b6f1c9d08d96e255bb2c9e10f964881e0))
- **helper:** normalize tab-size in pre ([4867254](https://github.com/vuepress/ecosystem/commit/486725428a95ead5ffd3f99ae14c0cb2037f284c))
- **plugin-catalog:** improve catalog heading ([97354a2](https://github.com/vuepress/ecosystem/commit/97354a2c4fe3540beb11f8d56353e5ddc9ff9ee7))
- **plugin-prismjs:** add `prismjs` classname to `<pre>` ([#167](https://github.com/vuepress/ecosystem/issues/167)) ([2ac6c53](https://github.com/vuepress/ecosystem/commit/2ac6c53a2981a6665bde7c37593b705ee40b05b6))
- **plugin-shiki:** add langAlias option ([#178](https://github.com/vuepress/ecosystem/issues/178)) ([f11014a](https://github.com/vuepress/ecosystem/commit/f11014a8a970d6bb701065382fca41e8aa179865))
- **plugin-shiki:** export bundled languages and their names and improve performance ([#163](https://github.com/vuepress/ecosystem/issues/163)) ([812f7e7](https://github.com/vuepress/ecosystem/commit/812f7e7f9c995fcddc8136add785aa8d99630e1e))
- **plugin-shiki:** move `<pre>` `style` attr to `preWrapper` ([#166](https://github.com/vuepress/ecosystem/issues/166)) ([3942641](https://github.com/vuepress/ecosystem/commit/3942641fab33b2e7520ad58d906ffb0070c3ec9e))
- **theme-default:** support prefix in navbar and sidebar ([#173](https://github.com/vuepress/ecosystem/issues/173)) ([991a161](https://github.com/vuepress/ecosystem/commit/991a1611eb99a7b0f5b7ccaa76d4c0486046f252))

### Performance Improvements

- move the `<pre>` extra attribute to `preWrapper` ([#162](https://github.com/vuepress/ecosystem/issues/162)) ([d0bc473](https://github.com/vuepress/ecosystem/commit/d0bc4730481e12eaa24e82cba70df94a6ead2fbb))

# [2.0.0-rc.32](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.31...v2.0.0-rc.32) (2024-05-27)

### Bug Fixes

- fix preWrapper plugin ([#157](https://github.com/vuepress/ecosystem/issues/157)) ([28359b9](https://github.com/vuepress/ecosystem/commit/28359b95181ef0961ea8e5e0058319615f0a5f67))

# [2.0.0-rc.31](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.30...v2.0.0-rc.31) (2024-05-27)

### Bug Fixes

- **plugin-markdown-math:** fix mathjax custom element ([11557f1](https://github.com/vuepress/ecosystem/commit/11557f191d9133ce9589f4ace10d4c24f9fb02f2))
- **theme-default:** fix externalLinkIcon, close [#153](https://github.com/vuepress/ecosystem/issues/153) ([82136e8](https://github.com/vuepress/ecosystem/commit/82136e863f73335ab5c3038b9402b967c783bb33))
- **theme-default:** fix scss module with webpack ([4cd3c3c](https://github.com/vuepress/ecosystem/commit/4cd3c3c2ef690653571a737026a54ce573cf3974))

### Features

- improve types ([#149](https://github.com/vuepress/ecosystem/issues/149)) ([ac8c497](https://github.com/vuepress/ecosystem/commit/ac8c4974b9bb6c570b5a6c0711e5888e14497ea7))
- migrate the `codePlugin` from `@vuepress/markdown` to `plugin-shiki` and `plugin-prismjs` ([#137](https://github.com/vuepress/ecosystem/issues/137)) ([49f96cf](https://github.com/vuepress/ecosystem/commit/49f96cfe5f2f43f6c5346164e4c96df2388b7887))
- **plugin-copy-code:** add `ignoreSelector` and `transform` options ([#155](https://github.com/vuepress/ecosystem/issues/155)) ([1cc1d97](https://github.com/vuepress/ecosystem/commit/1cc1d97f376f0436c067eede0c410216d0973020))
- support vuepress2 rc12 ([#156](https://github.com/vuepress/ecosystem/issues/156)) ([6a5b916](https://github.com/vuepress/ecosystem/commit/6a5b9161eb74eb44e40111257fdf11a616f5ee91))

# [2.0.0-rc.30](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.29...v2.0.0-rc.30) (2024-05-16)

### Bug Fixes

- **vp-update:** fix yarn berry registry command ([4298469](https://github.com/vuepress/ecosystem/commit/4298469921ea5361a8e5f6650349888286721796))

### Features

- add plugin-markdown-image ([#132](https://github.com/vuepress/ecosystem/issues/132)) ([9bdf83c](https://github.com/vuepress/ecosystem/commit/9bdf83cd20eb76025e86e71d34f199951feac89c))
- add plugin-markdown-math ([#142](https://github.com/vuepress/ecosystem/issues/142)) ([0976303](https://github.com/vuepress/ecosystem/commit/09763031654c46f8d7a531527072ff982ab3f515))
- **plugin-back-to-top:** optimize backToTop icons ([#126](https://github.com/vuepress/ecosystem/issues/126)) ([30d684e](https://github.com/vuepress/ecosystem/commit/30d684ec18aa624be7243621e805b97223e6a582))
- **plugin-docsearch:** improve search result item ([#138](https://github.com/vuepress/ecosystem/issues/138)) ([300f006](https://github.com/vuepress/ecosystem/commit/300f0061abad85925e090ede43262b7dbd5f6b2b))
- **plugin-sass-palette:** allow empty id ([#127](https://github.com/vuepress/ecosystem/issues/127)) ([407e41e](https://github.com/vuepress/ecosystem/commit/407e41ee9303dd50d4c7966d2053a1fa345e9991))
- update to latest vuepress rc ([#144](https://github.com/vuepress/ecosystem/issues/144)) ([129d05d](https://github.com/vuepress/ecosystem/commit/129d05d6d6da0565a7b443f5d2265d27a4d40893))

# [2.0.0-rc.29](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.28...v2.0.0-rc.29) (2024-05-09)

### Bug Fixes

- **plugin-notice:** wrap notice with ClientOnly ([8a54cb7](https://github.com/vuepress/ecosystem/commit/8a54cb7d6c6588cc253834e5892813798fb29e58))
- **plugin-redirect:** fix redirect modal ([d75645c](https://github.com/vuepress/ecosystem/commit/d75645c675e60de241271780c337eda7669b30a2))

# [2.0.0-rc.28](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.27...v2.0.0-rc.28) (2024-05-08)

### Bug Fixes

- **plugin-redirect:** fix direct modal, close [#105](https://github.com/vuepress/ecosystem/issues/105) ([1c29a82](https://github.com/vuepress/ecosystem/commit/1c29a829b1c6d2bdaacf898febbcc44b3f93aac1))

### Features

- add google tag manager plugin ([#118](https://github.com/vuepress/ecosystem/issues/118)) ([74abdd9](https://github.com/vuepress/ecosystem/commit/74abdd95664efc82c30bf0c79fb253e1595fea2c))
- add notice plugin ([#119](https://github.com/vuepress/ecosystem/issues/119)) ([5c3daaa](https://github.com/vuepress/ecosystem/commit/5c3daaa91cd1d0995aa2c4cb38cb6d73aff63ca1))

### Performance Improvements

- **plugin-watermark:** optimize watermark redraw when switching pages ([#117](https://github.com/vuepress/ecosystem/issues/117)) ([080fa20](https://github.com/vuepress/ecosystem/commit/080fa2050311895f5b2fdd815ccbdbaf62619eda))

# [2.0.0-rc.27](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.26...v2.0.0-rc.27) (2024-05-06)

### Bug Fixes

- **plugin-feed:** fix filter default value ([85faf13](https://github.com/vuepress/ecosystem/commit/85faf13278b39f6e7a08e5518df06349f50d3965))
- **plugin-watermark:** fix option reactivity ([5d3cdf1](https://github.com/vuepress/ecosystem/commit/5d3cdf19b0ae55e14d690f1bbc73d23ce745033c))

### Features

- `defineXXXConfig` support `MaybeRefOrGetter` options ([#112](https://github.com/vuepress/ecosystem/issues/112)) ([fca6b29](https://github.com/vuepress/ecosystem/commit/fca6b2994e52a77ae1c9b6aa2a910598f64dc09e))
- add sass-palette plugin ([#115](https://github.com/vuepress/ecosystem/issues/115)) ([cf62701](https://github.com/vuepress/ecosystem/commit/cf627013e21a8a937f5afc8cdf151fffa6ff2dde))
- init umami analytics plugin ([#116](https://github.com/vuepress/ecosystem/issues/116)) ([0e68dc5](https://github.com/vuepress/ecosystem/commit/0e68dc5f9c3fa7c3f55e9214663f7a932ff24c4d))
- init watermark plugin ([#111](https://github.com/vuepress/ecosystem/issues/111)) ([969b03b](https://github.com/vuepress/ecosystem/commit/969b03b8de534f85308fc38060932ccc0bebfd9a))

# [2.0.0-rc.26](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.25...v2.0.0-rc.26) (2024-04-21)

### Bug Fixes

- fix wrong plugin name ([d15d4aa](https://github.com/vuepress/ecosystem/commit/d15d4aa61d8e574e5aeb72618db8f4efdc66860c))

# [2.0.0-rc.25](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.24...v2.0.0-rc.25) (2024-04-17)

### Bug Fixes

- **plugin-blog:** correct page path, close [#107](https://github.com/vuepress/ecosystem/issues/107) ([5143ed5](https://github.com/vuepress/ecosystem/commit/5143ed59cd0fafb9fcfa0c6fc3595bf6ba20dc83))
- **plugin-comment:** fix Waline Pageview ([4ff7a6c](https://github.com/vuepress/ecosystem/commit/4ff7a6c29641d50bc0676698f5487203cd5e5263))
- **plugin-redirect:** fix scrollLock, close [#105](https://github.com/vuepress/ecosystem/issues/105) ([238e222](https://github.com/vuepress/ecosystem/commit/238e222ed5cd446d60a264c04658f12fe13d3d71))

# [2.0.0-rc.24](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.23...v2.0.0-rc.24) (2024-04-06)

### Bug Fixes

- **plugin-append-date:** fix peer ([7cc9865](https://github.com/vuepress/ecosystem/commit/7cc98655139846076e325291efe2830a1abb2ebc))
- **plugin-comment:** ensure comment is not externalize in ssr, close [#99](https://github.com/vuepress/ecosystem/issues/99) ([d0a0f25](https://github.com/vuepress/ecosystem/commit/d0a0f25523e3331645f18943fc9119c78bc93950))
- **plugin-comment:** fix typo in webpack comment ([7ade07d](https://github.com/vuepress/ecosystem/commit/7ade07dd9fd4d51fb1753c6ef381cc4ad34aafed))

### Features

- **plugin-back-to-top:** support safari, close [#102](https://github.com/vuepress/ecosystem/issues/102) ([5f0b85c](https://github.com/vuepress/ecosystem/commit/5f0b85cab67bb7397a973f9b64238dc6bb156d85))
- **plugin-docsearch:** support client config ([76f7952](https://github.com/vuepress/ecosystem/commit/76f7952e248be374772ae313c862ac1b599231c2))

# [2.0.0-rc.23](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.22...v2.0.0-rc.23) (2024-04-02)

### Bug Fixes

- **helper:** fix import path ([d7ece9f](https://github.com/vuepress/ecosystem/commit/d7ece9f8301ee4afa1b5d78ff0ca5c7cf62b7b86))
- **plugin-comment:** revert pageview chunk ([238fd6f](https://github.com/vuepress/ecosystem/commit/238fd6f622791990d97e7246870264d5cac43ec4))
- **theme-default:** fix PageNav relative url ([966525e](https://github.com/vuepress/ecosystem/commit/966525e63ccab141f071917f6ef649ff448897ab))

### Features

- **theme-default:** improve page meta outlook ([8ee423c](https://github.com/vuepress/ecosystem/commit/8ee423cd6fd6cfd8e12e6c4f04db295d9db0e41a))

# [2.0.0-rc.22](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.21...v2.0.0-rc.22) (2024-04-01)

### Bug Fixes

- **plugin-baidu-analytics:** fix client-side error ([#96](https://github.com/vuepress/ecosystem/issues/96)) ([7f1b5e1](https://github.com/vuepress/ecosystem/commit/7f1b5e190926ae859f8686defc3ed63f921cacf7))
- **plugin-git:** add the --follow parameter to the git log command ([#98](https://github.com/vuepress/ecosystem/issues/98)) ([bbe3222](https://github.com/vuepress/ecosystem/commit/bbe3222ec2f633257f7663d3225d11a354e289b1))
- **theme-default:** remove event listener correctly ([03e67c1](https://github.com/vuepress/ecosystem/commit/03e67c11e8388041c67fb0d5933e632db655e701))

### Features

- **plugin-git:** do not pass unneeded data to client ([520a3b6](https://github.com/vuepress/ecosystem/commit/520a3b6bc508f5103b80950ae48538676c6f996a))

# [2.0.0-rc.21](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.20...v2.0.0-rc.21) (2024-03-25)

### Bug Fixes

- **create-vuepress:** fix template link ([cb3225f](https://github.com/vuepress/ecosystem/commit/cb3225f655d0eb3012ea9735e86baacbc552ea17))

### Features

- **plugin-seo:** use excerpt content as description if present ([0aa59c8](https://github.com/vuepress/ecosystem/commit/0aa59c8f269de814e201d44f63c7fae7e0105592))
- **plugin-shiki:** add transformers option, close [#92](https://github.com/vuepress/ecosystem/issues/92) ([4cfaace](https://github.com/vuepress/ecosystem/commit/4cfaace02365d50f519c9448d840a3e3e0eec8b0))
- **theme-default:** support alt + ←→ to navigate and rebuild page nav ([424f888](https://github.com/vuepress/ecosystem/commit/424f888937f4cf61927d6bb651757dc53064c54a))

# [2.0.0-rc.20](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.19...v2.0.0-rc.20) (2024-03-11)

### Bug Fixes

- **plugin-pwa:** remove vuepress-shared ([94659a7](https://github.com/vuepress/ecosystem/commit/94659a74022d79927a554b31c12df668225c9390))

### Features

- add append-date plugin ([#88](https://github.com/vuepress/ecosystem/issues/88)) ([3fe39bc](https://github.com/vuepress/ecosystem/commit/3fe39bc4ffd60f20db3fbba2d5d69f7663eb9bdc))
- add comment plugin ([#87](https://github.com/vuepress/ecosystem/issues/87)) ([5debe9d](https://github.com/vuepress/ecosystem/commit/5debe9d28cee2213933857b900455edb1b1e0643))

# [2.0.0-rc.19](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.18...v2.0.0-rc.19) (2024-03-10)

### Bug Fixes

- **plugin-pwa:** only set viewpoint in pwa, close [#84](https://github.com/vuepress/ecosystem/issues/84) ([e84d023](https://github.com/vuepress/ecosystem/commit/e84d0235fc29b7bad211080e1c41c68e4c05e868))
- **plugin-seo:** improve twitter ([995c83f](https://github.com/vuepress/ecosystem/commit/995c83f0091339314c47f1684b6a3cb5fae9db75))
- **theme-default:** fix language dropdown, close [#85](https://github.com/vuepress/ecosystem/issues/85) ([45e8e4d](https://github.com/vuepress/ecosystem/commit/45e8e4d4f5ad0e70d6ac5a9a6fbdb0e172378019))

# [2.0.0-rc.18](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.17...v2.0.0-rc.18) (2024-02-29)

### Bug Fixes

- **plugin-redirect:** fix css variable name, close [#79](https://github.com/vuepress/ecosystem/issues/79) ([176c0e8](https://github.com/vuepress/ecosystem/commit/176c0e8e6290df0d68fac97d5e00a0b53e27f61a))
- **plugin-seo:** only generate description when page has content ([63471d3](https://github.com/vuepress/ecosystem/commit/63471d30f6d78d91889e7d4d388551a27adc6397))

# [2.0.0-rc.17](https://github.com/vuepress/ecosystem/compare/v2.0.0-ci-test.0...v2.0.0-rc.17) (2024-02-21)

### Bug Fixes

- **plugin-photo-swipe:** support frontmatter ([28f29ba](https://github.com/vuepress/ecosystem/commit/28f29ba27776123f5cc1f064653d73ca725c76eb))

### Features

- **helper:** add wait utils ([75a409a](https://github.com/vuepress/ecosystem/commit/75a409ac992ebfbb581febd4a500dc009915a8f3))
- **plugin-links-check:** add links check plugin ([082a953](https://github.com/vuepress/ecosystem/commit/082a9532226d8a6c0672a919c3e2a94811c50d8c))

# [2.0.0-rc.16](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.15...v2.0.0-rc.16) (2024-02-20)

### Bug Fixes

- **plugin-pwa:** fix style files ([7edadbf](https://github.com/vuepress/ecosystem/commit/7edadbff6073af51b27c2fb3b134add60917b471))

# [2.0.0-rc.15](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.14...v2.0.0-rc.15) (2024-02-19)

### Bug Fixes

- **plugin-copy-code:** update default css var ([503b6fd](https://github.com/vuepress/ecosystem/commit/503b6fd54a26e007edb4a7707673b3b6b767e661))
- **theme-default:** fix link active status, close [#37](https://github.com/vuepress/ecosystem/issues/37) ([506e28c](https://github.com/vuepress/ecosystem/commit/506e28c7a5c1cbbf5def5079a34e3575e2449891))
- **vp-update:** fix getRegistry ([3dda81f](https://github.com/vuepress/ecosystem/commit/3dda81f2eedfc9fcc96d588a8a5172219036db99))

### Performance Improvements

- **plugin-blog:** use original ref ([3651a7f](https://github.com/vuepress/ecosystem/commit/3651a7f91d648a4f504705768a64feb4dad8025d))

### BREAKING CHANGES

- **plugin-pwa:** rebuild plugin
- **plugin-pwa-popup**: removed

# [2.0.0-rc.14](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.13...v2.0.0-rc.14) (2024-02-08)

### Bug Fixes

- **plugin-blog:** fix hotReload, close [#62](https://github.com/vuepress/ecosystem/issues/62) ([204cf8f](https://github.com/vuepress/ecosystem/commit/204cf8f735f43902a4289432697f96bc0200e50b))
- **plugin-blog:** override existing page at startup ([a006959](https://github.com/vuepress/ecosystem/commit/a0069597d6052b4353b83291ab05d1d545719824))

### Features

- **plugin-baidu-analytics:** add plugin-baidu-analytics ([#70](https://github.com/vuepress/ecosystem/issues/70)) ([0d5810e](https://github.com/vuepress/ecosystem/commit/0d5810e3d5634c47c9d0f1132637f4e358fb2fce))

# [2.0.0-rc.13](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.12...v2.0.0-rc.13) (2024-02-06)

### Bug Fixes

- **plugin-photo-swipe:** fix styles ([69374ae](https://github.com/vuepress/ecosystem/commit/69374aeac4f0cc67ed805fb98a04334e1ff17698))

# [2.0.0-rc.12](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.11...v2.0.0-rc.12) (2024-02-06)

### Bug Fixes

- **plugin-theme-data:** fix compatibility with vuepress/client ([8f01436](https://github.com/vuepress/ecosystem/commit/8f014362a01cf3fe1fde81f3cc13481020a5cfe8))

### Features

- **create-vuepress:** use plugin-blog in blog template ([#64](https://github.com/vuepress/ecosystem/issues/64)) ([a25014e](https://github.com/vuepress/ecosystem/commit/a25014e7c17f905db88e6e39de8f036f67cb860a))
- **plugin-copy-code:** expose composable api ([#67](https://github.com/vuepress/ecosystem/issues/67)) ([fced29c](https://github.com/vuepress/ecosystem/commit/fced29cc445433c326f25f176f6a5cfa5415f739))
- **plugin-photo-swipe:** add photo-swipe plugin ([#69](https://github.com/vuepress/ecosystem/issues/69)) ([58a9855](https://github.com/vuepress/ecosystem/commit/58a9855414333f389c34ce6e1a66377e72356911))
- **plugin-shiki:** use shiki v1 ([#68](https://github.com/vuepress/ecosystem/issues/68)) ([2e4343c](https://github.com/vuepress/ecosystem/commit/2e4343c9b89c8577f28970eca915128f9983c124))
- **theme-default:** apply styles to photo-swipe plugin ([5d1fd63](https://github.com/vuepress/ecosystem/commit/5d1fd631d8068074befa4935df6aa842168dc672))

# [2.0.0-rc.11](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.10...v2.0.0-rc.11) (2024-02-05)

### Bug Fixes

- **plugin-active-header-links:** fix hash update ([0ee8078](https://github.com/vuepress/ecosystem/commit/0ee80783b87b41e4d5924c4af0faa4e3c4e1bb8c))
- **plugin-docsearch:** hide search while print ([8b35bed](https://github.com/vuepress/ecosystem/commit/8b35bedda22f31b5b91e2724f7aaea46e19a9dbe))

### Features

- **plugin-redirect:** add style variables ([152bfa0](https://github.com/vuepress/ecosystem/commit/152bfa0ebf30e9cacf990fda99cf7efa449b2f2e))
- **plugin-redirect:** improve autoLocale homepage ([0d63fb4](https://github.com/vuepress/ecosystem/commit/0d63fb4ecf9a12c358d6a365582c3d0d0821ab81))

# [2.0.0-rc.10](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.9...v2.0.0-rc.10) (2024-02-05)

### Bug Fixes

- **plugin-redirect:** fix locale config ([ecf5650](https://github.com/vuepress/ecosystem/commit/ecf56503ac0c7674a455547d7589af41945e3a9b))
- **plugin-remove-pwa:** fix plugin name ([a76a639](https://github.com/vuepress/ecosystem/commit/a76a639d1658ee28f89e7f9486bc17a7f913cd47))
- **plugin-search:** fix hot reload ([637db2c](https://github.com/vuepress/ecosystem/commit/637db2ccefd00bea7aee0ed74b829e079d37e2a2))
- **theme-default:** fix back to top style ([10c2847](https://github.com/vuepress/ecosystem/commit/10c2847538013b0a56f557d822aad5a2e9995f0a))

### Features

- compatible with visual routes ([#57](https://github.com/vuepress/ecosystem/issues/57)) ([f1281be](https://github.com/vuepress/ecosystem/commit/f1281be141b9a5cb71d80048a2042b669cd4823e))
- **plugin-blog:** add plugin-blog ([#61](https://github.com/vuepress/ecosystem/issues/61)) ([30779e3](https://github.com/vuepress/ecosystem/commit/30779e33c079d0f62ab81a5c04208efb511718e9))
- **plugin-catalog:** add catalog plugin ([#60](https://github.com/vuepress/ecosystem/issues/60)) ([18ad620](https://github.com/vuepress/ecosystem/commit/18ad620c4d9ebf4398257a3e704a563e35de6629))
- **plugin-copyright:** make plugin options optional ([64bb166](https://github.com/vuepress/ecosystem/commit/64bb1664935f27469b874afc814c7260d09a624e))

### Reverts

- "test: update snapshots" ([8cf90fb](https://github.com/vuepress/ecosystem/commit/8cf90fbcc050232ab63927da0b810d0472f4a4ef))

# [2.0.0-rc.9](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.8...v2.0.0-rc.9) (2024-02-03)

### Bug Fixes

- **helper:** fix getPageExcerpt in edge case ([8004b12](https://github.com/vuepress/ecosystem/commit/8004b12d2c13d1cdd4ff7b635745fe3cd972c6c8))

### Features

- **plugin-back-to-top:** rebuild plugin ([#55](https://github.com/vuepress/ecosystem/issues/55)) ([1900257](https://github.com/vuepress/ecosystem/commit/19002576ab87d2bafcbc145857749ffb6cd17603))

# [2.0.0-rc.8](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.7...v2.0.0-rc.8) (2024-02-03)

### Features

- **plugin-redirect:** add redirect plugin ([#53](https://github.com/vuepress/ecosystem/issues/53)) ([44fba50](https://github.com/vuepress/ecosystem/commit/44fba50a0ee42d661732d81d75d2d69466a02e8e))
- **plugin-remove-pwa:** add remove pwa plugin ([#54](https://github.com/vuepress/ecosystem/issues/54)) ([58b7e32](https://github.com/vuepress/ecosystem/commit/58b7e32fcbdc5a55718fc79fc81b08d7365ebf1c))

# [2.0.0-rc.7](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.6...v2.0.0-rc.7) (2024-02-02)

### Bug Fixes

- **helper:** ensure rootNodes ([afc6f9d](https://github.com/vuepress/ecosystem/commit/afc6f9d697885b112194ad5cd12fe2371ad9f903))
- **plugin-reading-time:** remove noExternal declare ([36a2abe](https://github.com/vuepress/ecosystem/commit/36a2abe8f49a7500ac23c44dea56f66c331840f0))
- **plugin-rtl:** correct plugin name ([4b1ca32](https://github.com/vuepress/ecosystem/commit/4b1ca323861fc26e5312c72648aad474c9c52b8d))
- **plugin-sitemap:** fix output logger ([7389d32](https://github.com/vuepress/ecosystem/commit/7389d325f4d68db9dac243b0736264c5e78796ce))

### Features

- **helper:** add bun support ([ebedb81](https://github.com/vuepress/ecosystem/commit/ebedb81564d2817d7bfbd0a564ca6f33b558948d))
- **plugin-copyright:** add copyright plugin ([#52](https://github.com/vuepress/ecosystem/issues/52)) ([f5e4a18](https://github.com/vuepress/ecosystem/commit/f5e4a1849a37887ab522bfb52b00f1d756fdc0eb))
- **plugin-reading-time:** add reading-time plugin ([#50](https://github.com/vuepress/ecosystem/issues/50)) ([3fce9e4](https://github.com/vuepress/ecosystem/commit/3fce9e4c27066e190b56f496ee1742a6a76f7538))
- **plugin-rtl:** add rtl plugin ([#49](https://github.com/vuepress/ecosystem/issues/49)) ([4a50404](https://github.com/vuepress/ecosystem/commit/4a50404feae553e0f212c11b7a8373dc5773d0dc))
- **vp-update:** add vp-update package ([#51](https://github.com/vuepress/ecosystem/issues/51)) ([c0f94d6](https://github.com/vuepress/ecosystem/commit/c0f94d6ec43609fd88c7fea2ad65521579a92f7f))

# [2.0.0-rc.6](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.5...v2.0.0-rc.6) (2024-01-31)

### Features

- **helper:** add hasGlobalComponent ([#46](https://github.com/vuepress/ecosystem/issues/46)) ([2472fce](https://github.com/vuepress/ecosystem/commit/2472fce4b1d4482cb5120f736e3c3e0fe4157736))
- **helper:** export slash related functions ([4268fdc](https://github.com/vuepress/ecosystem/commit/4268fdc9a7599f84cbd6b24c12ff9400d3340b7f))
- **helper:** improve getDate utils ([efb5b2e](https://github.com/vuepress/ecosystem/commit/efb5b2e55a5edfcac7db0d31c69079ff2ac64f2b))
- **helper:** improve vite optimizeDeps ([8973871](https://github.com/vuepress/ecosystem/commit/89738718f61b6ed955df89317ab078f0c06a7030))
- **plugin-copy-code:** add copy-code plugin ([#47](https://github.com/vuepress/ecosystem/issues/47)) ([8402530](https://github.com/vuepress/ecosystem/commit/8402530a39b4431efa654e3ba80f8fc6d0d7b96e))
- **plugin-sitemap:** rename excludeUrls to excludePaths ([#45](https://github.com/vuepress/ecosystem/issues/45)) ([247c792](https://github.com/vuepress/ecosystem/commit/247c792961069abbb1b5152be09bdfb1a3aa4458))

### BREAKING CHANGES

- **plugin-sitemap:** `excludeUrls` is renamed to `excludePaths`

# [2.0.0-rc.5](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.4...v2.0.0-rc.5) (2024-01-31)

### Bug Fixes

- **helper:** improve types of useLocaleConfig ([0fcc7f6](https://github.com/vuepress/ecosystem/commit/0fcc7f6bdb5f1a18899ad6e74849003d5e0e70e3))
- **plugin-seo:** fix logger name and remove debug logger ([a692d7a](https://github.com/vuepress/ecosystem/commit/a692d7ad813372188d2283e065a41c64114ed3df))

### Features

- **helper:** add data utils ([#43](https://github.com/vuepress/ecosystem/issues/43)) ([ebd6f63](https://github.com/vuepress/ecosystem/commit/ebd6f630652a1d8ee858ff2e9a3f260014d1353e))
- **helper:** add locales helper ([#44](https://github.com/vuepress/ecosystem/issues/44)) ([f1be46f](https://github.com/vuepress/ecosystem/commit/f1be46f1c80a3a373da49852d6cb96967c2c74d3))

# [2.0.0-rc.4](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2024-01-31)

### Features

- **helper:** add shared export ([da50bcf](https://github.com/vuepress/ecosystem/commit/da50bcf7fe18ff743696092ca5aa78a45d518657))

# [2.0.0-rc.3](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2024-01-31)

### Bug Fixes

- **create-vuepress:** sync output folder with docs ([#29](https://github.com/vuepress/ecosystem/issues/29)) ([e7887aa](https://github.com/vuepress/ecosystem/commit/e7887aa3e0b8af278844d0d74e4df8d481ee9915))
- **helper:** add missing export ([049da22](https://github.com/vuepress/ecosystem/commit/049da224a22e0ce0a1927df2f24c3764d97f4f5b))
- **helper:** add missing exports ([2dc8ea5](https://github.com/vuepress/ecosystem/commit/2dc8ea53493b5e625ed8d8e5fbe701d0a8ccf9d5))

### Features

- **helper:** add date helper ([20e5e46](https://github.com/vuepress/ecosystem/commit/20e5e46e4b5f2e321dae7b4943454626cdb1e5dc))
- **helper:** add getPageText ([#39](https://github.com/vuepress/ecosystem/issues/39)) ([d666d1b](https://github.com/vuepress/ecosystem/commit/d666d1bcc55122e0ebcff386b6190d0c9d7ddb67))
- **helper:** add helper package ([#33](https://github.com/vuepress/ecosystem/issues/33)) ([fadf122](https://github.com/vuepress/ecosystem/commit/fadf1225c643ab0bf9c4c0f46d0b3b3f1aa15ac6))
- **helper:** add logger utils ([#35](https://github.com/vuepress/ecosystem/issues/35)) ([a92c710](https://github.com/vuepress/ecosystem/commit/a92c710298a07dbbce5434c18a504cade47effe4))
- **plugin-feed:** add feed plugin ([#41](https://github.com/vuepress/ecosystem/issues/41)) ([b0b2aa4](https://github.com/vuepress/ecosystem/commit/b0b2aa49b4904fb903ec8b312a2e48f6b9affc17))
- **plugin-seo:** add seo plugin ([#42](https://github.com/vuepress/ecosystem/issues/42)) ([8a999c5](https://github.com/vuepress/ecosystem/commit/8a999c58c20006b3a36de52a8502d03344af099d))
- **plugin-sitemap:** add sitemap plugin ([#37](https://github.com/vuepress/ecosystem/issues/37)) ([267f388](https://github.com/vuepress/ecosystem/commit/267f388c6ee4d3d5a44f42ddd16583569cfe97af))
- **theme-default:** heading-sidebar ([#30](https://github.com/vuepress/ecosystem/issues/30)) ([0ac591d](https://github.com/vuepress/ecosystem/commit/0ac591dfe469e25cf42f1870dd6466d4e5bb3c4c))
- **theme-default:** image alt option and set aria hidden on title if same as image alt (close [#20](https://github.com/vuepress/ecosystem/issues/20)) ([#23](https://github.com/vuepress/ecosystem/issues/23)) ([dc8042e](https://github.com/vuepress/ecosystem/commit/dc8042e40d15b290b8d100b9b39bf3e17a1d8e77))

# [2.0.0-rc.2](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2024-01-26)

### Features

- **create-vuepress:** update packages version ([68d5005](https://github.com/vuepress/ecosystem/commit/68d5005b3d5eabc8e9e473bf498038edd3043901))

# 2.0.0-rc.1 (2024-01-26)

### Bug Fixes

- **theme-default:** avoid calling hooks in computed ([6d78f5d](https://github.com/vuepress/ecosystem/commit/6d78f5d0972c023027f44ae891833657f1da0adb))
- **theme-default:** code group accessibility ([#10](https://github.com/vuepress/ecosystem/issues/10)) ([aae5916](https://github.com/vuepress/ecosystem/commit/aae591671fd18497fb5448b1cfdc9e89040c8a64))
- **theme-default:** fix navbar brand logo a11y (close [#20](https://github.com/vuepress/ecosystem/issues/20)) ([8e6e57e](https://github.com/vuepress/ecosystem/commit/8e6e57ea2de65e30c5b033f1498b6a264f03ab20))
- **theme-default:** fix new anchor style ([046ea1c](https://github.com/vuepress/ecosystem/commit/046ea1cff8c1f2f40bdded2ff713314d78f59501))

### Features

- bump to vp2rc1 and declare vuepress as peer ([af4f00b](https://github.com/vuepress/ecosystem/commit/af4f00b24dc64dfd3ec5f45053e78fdcf147da61))
- **create-vuepress:** add create-helper (close [#1](https://github.com/vuepress/ecosystem/issues/1)) ([#15](https://github.com/vuepress/ecosystem/issues/15)) ([531a7e8](https://github.com/vuepress/ecosystem/commit/531a7e8c77b4145cb6da6247b695ef4bc38d4f98))
- **plugin-shiki:** bump to shikiji v0.10 ([e24c1cb](https://github.com/vuepress/ecosystem/commit/e24c1cb83a392dbb6182003b155cfa5cf417e67a))
- **plugin-shiki:** migrate to esm-based shikiji (close [#12](https://github.com/vuepress/ecosystem/issues/12)) ([#13](https://github.com/vuepress/ecosystem/issues/13)) ([df11c04](https://github.com/vuepress/ecosystem/commit/df11c046854016e7d9ad043d0fc46b40beb9bddf))
- **theme-default:** make use of data-title attr for code blocks (close [#18](https://github.com/vuepress/ecosystem/issues/18)) ([fbf5e32](https://github.com/vuepress/ecosystem/commit/fbf5e3248d87819c6e78121c082187b4458a3525))
- **theme-default:** sync anchor permalink function updates for better a11y ([93e6a04](https://github.com/vuepress/ecosystem/commit/93e6a0489f023578625fc9421d4c67990eba3610))

### BREAKING CHANGES

- **plugin-shiki:** now `langs` option is required, you need to set the languages list explicitly

Co-authored-by: meteorlxy <meteor.lxy@foxmail.com>
