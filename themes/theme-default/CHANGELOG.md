# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-rc.37](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.36...v2.0.0-rc.37) (2024-06-21)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.36](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.35...v2.0.0-rc.36) (2024-06-18)

### Bug Fixes

- **theme-default:** fix transition for `<kbd>`, `<hr>` and `<blockquote>`, close [#203](https://github.com/vuepress/ecosystem/issues/203) ([#205](https://github.com/vuepress/ecosystem/issues/205)) ([69a07dc](https://github.com/vuepress/ecosystem/commit/69a07dcc445e3e555c52fb7852cb3270cd383702))
- **theme-default:** fix alias with vite ([ba09b87](https://github.com/vuepress/ecosystem/commit/ba09b873cb525af4494d5b42663dee3e97b85bbe))
- **theme-default:** fix sidebar selector ([0a29075](https://github.com/vuepress/ecosystem/commit/0a29075388cb435e5f95d25dc1b54abbcd343d9a))

### Features

- add support for highlight whitespace ([#204](https://github.com/vuepress/ecosystem/issues/204)) ([b91d04e](https://github.com/vuepress/ecosystem/commit/b91d04e5cc44adcff7405f2cdc14c4b9a6d9834d))
- add support for word highlight ([#201](https://github.com/vuepress/ecosystem/issues/201)) ([6f37277](https://github.com/vuepress/ecosystem/commit/6f372774488f79e8570e1d8b4b1e26a5744be807))
- **theme-default:** improve sidebar headers ([#196](https://github.com/vuepress/ecosystem/issues/196)) ([c39e4e4](https://github.com/vuepress/ecosystem/commit/c39e4e450c64e05c3939f866f56474cb83722b2c))

# [2.0.0-rc.35](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.34...v2.0.0-rc.35) (2024-06-05)

### Bug Fixes

- **theme-default:** fix client config file import ([e5dcba2](https://github.com/vuepress/ecosystem/commit/e5dcba2c1ad03ef3083fcfc3bcc8d0105793f270))

### Features

- **theme-default:** improve prev/next links config and auto detection ([#195](https://github.com/vuepress/ecosystem/issues/195)) ([e50f8ca](https://github.com/vuepress/ecosystem/commit/e50f8ca8a9bf1e7e39ba86bec8ca0f9270ecf432))

# [2.0.0-rc.34](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.33...v2.0.0-rc.34) (2024-06-04)

### Bug Fixes

- **theme-default:** fix h2 normalize, close [#190](https://github.com/vuepress/ecosystem/issues/190) ([03646b9](https://github.com/vuepress/ecosystem/commit/03646b9c2a6477af71ec493dc583ccf4ea7fd52a))

# [2.0.0-rc.33](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.32...v2.0.0-rc.33) (2024-05-30)

### Bug Fixes

- **theme-default:** code block line number misalignment in Safari ([#164](https://github.com/vuepress/ecosystem/issues/164)) ([16f9024](https://github.com/vuepress/ecosystem/commit/16f902491137a9fdcb44d68fe66eae0aeb992023))
- **theme-default:** fix arrow style ([bb0025c](https://github.com/vuepress/ecosystem/commit/bb0025ca54505fd2c4bf9ebbeb91e3f1ff12f36a))
- **theme-default:** fix h2 border color ([7833fb0](https://github.com/vuepress/ecosystem/commit/7833fb0c1da495dcd362e6c3550d4e09e409930a))
- **theme-default:** fix language dropdown, close [#160](https://github.com/vuepress/ecosystem/issues/160) ([199c266](https://github.com/vuepress/ecosystem/commit/199c2662762e0e2ffe43529f219299ce5aadba2f))
- **theme-default:** fix normalize style import ([d0c626a](https://github.com/vuepress/ecosystem/commit/d0c626acb07d9182006160f4c1d910af7279c296))
- **theme-default:** fix shiki code block style ([b20360a](https://github.com/vuepress/ecosystem/commit/b20360a24edfeb8336749002c9b86d6f1ca21d75))

### Features

- **helper:** add normalize.css ([#158](https://github.com/vuepress/ecosystem/issues/158)) ([47b9007](https://github.com/vuepress/ecosystem/commit/47b9007b6f1c9d08d96e255bb2c9e10f964881e0))
- **helper:** normalize tab-size in pre ([4867254](https://github.com/vuepress/ecosystem/commit/486725428a95ead5ffd3f99ae14c0cb2037f284c))
- **theme-default:** support prefix in navbar and sidebar ([#173](https://github.com/vuepress/ecosystem/issues/173)) ([991a161](https://github.com/vuepress/ecosystem/commit/991a1611eb99a7b0f5b7ccaa76d4c0486046f252))

### Performance Improvements

- move the `<pre>` extra attribute to `preWrapper` ([#162](https://github.com/vuepress/ecosystem/issues/162)) ([d0bc473](https://github.com/vuepress/ecosystem/commit/d0bc4730481e12eaa24e82cba70df94a6ead2fbb))

# [2.0.0-rc.32](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.31...v2.0.0-rc.32) (2024-05-27)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.31](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.30...v2.0.0-rc.31) (2024-05-27)

### Bug Fixes

- **theme-default:** fix externalLinkIcon, close [#153](https://github.com/vuepress/ecosystem/issues/153) ([82136e8](https://github.com/vuepress/ecosystem/commit/82136e863f73335ab5c3038b9402b967c783bb33))
- **theme-default:** fix scss module with webpack ([4cd3c3c](https://github.com/vuepress/ecosystem/commit/4cd3c3c2ef690653571a737026a54ce573cf3974))

### Features

- migrate the `codePlugin` from `@vuepress/markdown` to `plugin-shiki` and `plugin-prismjs` ([#137](https://github.com/vuepress/ecosystem/issues/137)) ([49f96cf](https://github.com/vuepress/ecosystem/commit/49f96cfe5f2f43f6c5346164e4c96df2388b7887))
- support vuepress2 rc12 ([#156](https://github.com/vuepress/ecosystem/issues/156)) ([6a5b916](https://github.com/vuepress/ecosystem/commit/6a5b9161eb74eb44e40111257fdf11a616f5ee91))

# [2.0.0-rc.30](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.29...v2.0.0-rc.30) (2024-05-16)

### Features

- update to latest vuepress rc ([#144](https://github.com/vuepress/ecosystem/issues/144)) ([129d05d](https://github.com/vuepress/ecosystem/commit/129d05d6d6da0565a7b443f5d2265d27a4d40893))

# [2.0.0-rc.28](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.27...v2.0.0-rc.28) (2024-05-08)

### Features

- add notice plugin ([#119](https://github.com/vuepress/ecosystem/issues/119)) ([5c3daaa](https://github.com/vuepress/ecosystem/commit/5c3daaa91cd1d0995aa2c4cb38cb6d73aff63ca1))

# [2.0.0-rc.27](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.26...v2.0.0-rc.27) (2024-05-06)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.26](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.25...v2.0.0-rc.26) (2024-04-21)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.25](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.24...v2.0.0-rc.25) (2024-04-17)

### Bug Fixes

- **plugin-redirect:** fix scrollLock, close [#105](https://github.com/vuepress/ecosystem/issues/105) ([238e222](https://github.com/vuepress/ecosystem/commit/238e222ed5cd446d60a264c04658f12fe13d3d71))

# [2.0.0-rc.24](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.23...v2.0.0-rc.24) (2024-04-06)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.23](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.22...v2.0.0-rc.23) (2024-04-02)

### Bug Fixes

- **theme-default:** fix PageNav relative url ([966525e](https://github.com/vuepress/ecosystem/commit/966525e63ccab141f071917f6ef649ff448897ab))

### Features

- **theme-default:** improve page meta outlook ([8ee423c](https://github.com/vuepress/ecosystem/commit/8ee423cd6fd6cfd8e12e6c4f04db295d9db0e41a))

# [2.0.0-rc.22](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.21...v2.0.0-rc.22) (2024-04-01)

### Bug Fixes

- **theme-default:** remove event listener correctly ([03e67c1](https://github.com/vuepress/ecosystem/commit/03e67c11e8388041c67fb0d5933e632db655e701))

# [2.0.0-rc.21](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.20...v2.0.0-rc.21) (2024-03-25)

### Features

- **theme-default:** support alt + ←→ to navigate and rebuild page nav ([424f888](https://github.com/vuepress/ecosystem/commit/424f888937f4cf61927d6bb651757dc53064c54a))

# [2.0.0-rc.20](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.19...v2.0.0-rc.20) (2024-03-11)

### Features

- add comment plugin ([#87](https://github.com/vuepress/ecosystem/issues/87)) ([5debe9d](https://github.com/vuepress/ecosystem/commit/5debe9d28cee2213933857b900455edb1b1e0643))

# [2.0.0-rc.19](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.18...v2.0.0-rc.19) (2024-03-10)

### Bug Fixes

- **theme-default:** fix language dropdown, close [#85](https://github.com/vuepress/ecosystem/issues/85) ([45e8e4d](https://github.com/vuepress/ecosystem/commit/45e8e4d4f5ad0e70d6ac5a9a6fbdb0e172378019))

# [2.0.0-rc.18](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.17...v2.0.0-rc.18) (2024-02-29)

### Bug Fixes

- **plugin-redirect:** fix css variable name, close [#79](https://github.com/vuepress/ecosystem/issues/79) ([176c0e8](https://github.com/vuepress/ecosystem/commit/176c0e8e6290df0d68fac97d5e00a0b53e27f61a))

# [2.0.0-rc.17](https://github.com/vuepress/ecosystem/compare/v2.0.0-ci-test.0...v2.0.0-rc.17) (2024-02-21)

### Features

- **plugin-links-check:** add links check plugin ([082a953](https://github.com/vuepress/ecosystem/commit/082a9532226d8a6c0672a919c3e2a94811c50d8c))

# [2.0.0-rc.15](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.14...v2.0.0-rc.15) (2024-02-19)

### Bug Fixes

- **theme-default:** fix link active status, close [#37](https://github.com/vuepress/ecosystem/issues/37) ([506e28c](https://github.com/vuepress/ecosystem/commit/506e28c7a5c1cbbf5def5079a34e3575e2449891))

# [2.0.0-rc.14](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.13...v2.0.0-rc.14) (2024-02-08)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.12](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.11...v2.0.0-rc.12) (2024-02-06)

### Features

- **theme-default:** apply styles to photo-swipe plugin ([5d1fd63](https://github.com/vuepress/ecosystem/commit/5d1fd631d8068074befa4935df6aa842168dc672))

# [2.0.0-rc.11](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.10...v2.0.0-rc.11) (2024-02-05)

### Features

- **plugin-redirect:** add style variables ([152bfa0](https://github.com/vuepress/ecosystem/commit/152bfa0ebf30e9cacf990fda99cf7efa449b2f2e))

# [2.0.0-rc.10](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.9...v2.0.0-rc.10) (2024-02-05)

### Bug Fixes

- **theme-default:** fix back to top style ([10c2847](https://github.com/vuepress/ecosystem/commit/10c2847538013b0a56f557d822aad5a2e9995f0a))

### Features

- compatible with visual routes ([#57](https://github.com/vuepress/ecosystem/issues/57)) ([f1281be](https://github.com/vuepress/ecosystem/commit/f1281be141b9a5cb71d80048a2042b669cd4823e))
- **plugin-catalog:** add catalog plugin ([#60](https://github.com/vuepress/ecosystem/issues/60)) ([18ad620](https://github.com/vuepress/ecosystem/commit/18ad620c4d9ebf4398257a3e704a563e35de6629))

### Reverts

- "test: update snapshots" ([8cf90fb](https://github.com/vuepress/ecosystem/commit/8cf90fbcc050232ab63927da0b810d0472f4a4ef))

# [2.0.0-rc.9](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.8...v2.0.0-rc.9) (2024-02-03)

### Features

- **plugin-back-to-top:** rebuild plugin ([#55](https://github.com/vuepress/ecosystem/issues/55)) ([1900257](https://github.com/vuepress/ecosystem/commit/19002576ab87d2bafcbc145857749ffb6cd17603))

# [2.0.0-rc.8](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.7...v2.0.0-rc.8) (2024-02-03)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.7](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.6...v2.0.0-rc.7) (2024-02-02)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.6](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.5...v2.0.0-rc.6) (2024-01-31)

### Features

- **helper:** add hasGlobalComponent ([#46](https://github.com/vuepress/ecosystem/issues/46)) ([2472fce](https://github.com/vuepress/ecosystem/commit/2472fce4b1d4482cb5120f736e3c3e0fe4157736))
- **plugin-copy-code:** add copy-code plugin ([#47](https://github.com/vuepress/ecosystem/issues/47)) ([8402530](https://github.com/vuepress/ecosystem/commit/8402530a39b4431efa654e3ba80f8fc6d0d7b96e))

# [2.0.0-rc.5](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.4...v2.0.0-rc.5) (2024-01-31)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.4](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2024-01-31)

**Note:** Version bump only for package @vuepress/theme-default

# [2.0.0-rc.3](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2024-01-31)

### Features

- **plugin-seo:** add seo plugin ([#42](https://github.com/vuepress/ecosystem/issues/42)) ([8a999c5](https://github.com/vuepress/ecosystem/commit/8a999c58c20006b3a36de52a8502d03344af099d))
- **plugin-sitemap:** add sitemap plugin ([#37](https://github.com/vuepress/ecosystem/issues/37)) ([267f388](https://github.com/vuepress/ecosystem/commit/267f388c6ee4d3d5a44f42ddd16583569cfe97af))
- **theme-default:** heading-sidebar ([#30](https://github.com/vuepress/ecosystem/issues/30)) ([0ac591d](https://github.com/vuepress/ecosystem/commit/0ac591dfe469e25cf42f1870dd6466d4e5bb3c4c))
- **theme-default:** image alt option and set aria hidden on title if same as image alt (close [#20](https://github.com/vuepress/ecosystem/issues/20)) ([#23](https://github.com/vuepress/ecosystem/issues/23)) ([dc8042e](https://github.com/vuepress/ecosystem/commit/dc8042e40d15b290b8d100b9b39bf3e17a1d8e77))

# [2.0.0-rc.2](https://github.com/vuepress/ecosystem/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2024-01-26)

**Note:** Version bump only for package @vuepress/theme-default

# 2.0.0-rc.1 (2024-01-26)

### Bug Fixes

- **theme-default:** avoid calling hooks in computed ([6d78f5d](https://github.com/vuepress/ecosystem/commit/6d78f5d0972c023027f44ae891833657f1da0adb))
- **theme-default:** code group accessibility ([#10](https://github.com/vuepress/ecosystem/issues/10)) ([aae5916](https://github.com/vuepress/ecosystem/commit/aae591671fd18497fb5448b1cfdc9e89040c8a64))
- **theme-default:** fix navbar brand logo a11y (close [#20](https://github.com/vuepress/ecosystem/issues/20)) ([8e6e57e](https://github.com/vuepress/ecosystem/commit/8e6e57ea2de65e30c5b033f1498b6a264f03ab20))
- **theme-default:** fix new anchor style ([046ea1c](https://github.com/vuepress/ecosystem/commit/046ea1cff8c1f2f40bdded2ff713314d78f59501))

### Features

- bump to vp2rc1 and declare vuepress as peer ([af4f00b](https://github.com/vuepress/ecosystem/commit/af4f00b24dc64dfd3ec5f45053e78fdcf147da61))
- **theme-default:** make use of data-title attr for code blocks (close [#18](https://github.com/vuepress/ecosystem/issues/18)) ([fbf5e32](https://github.com/vuepress/ecosystem/commit/fbf5e3248d87819c6e78121c082187b4458a3525))
- **theme-default:** sync anchor permalink function updates for better a11y ([93e6a04](https://github.com/vuepress/ecosystem/commit/93e6a0489f023578625fc9421d4c67990eba3610))
