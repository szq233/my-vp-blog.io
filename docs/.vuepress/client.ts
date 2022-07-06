import { defineClientConfig } from '@vuepress/client'

import { addIcons } from "oh-vue-icons"

// 引入想要使用的图标
import { FaFortAwesome, FaTag, FaBookOpen, FaQq, FaQuestionCircle, FaSatelliteDish, FaBoxOpen } from "oh-vue-icons/icons"

addIcons(FaFortAwesome, FaTag, FaBookOpen, FaQq, FaQuestionCircle, FaSatelliteDish, FaBoxOpen);

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})