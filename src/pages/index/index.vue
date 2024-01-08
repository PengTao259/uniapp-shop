<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/index.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { ref } from 'vue'
import { getHomeBanner, getHomeMutli, getHomeHot } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, MutliItem, HotItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const { result } = await getHomeBanner()
  bannerList.value = result
}

const categoryList = ref<MutliItem[]>([])
const getHomeCategoryData = async () => {
  const { result } = await getHomeMutli()
  categoryList.value = result
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const { result } = await getHomeHot()
  hotList.value = result
}

// 页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
