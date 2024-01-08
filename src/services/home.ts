import type { BannerItem, MutliItem, HotItem, GuessItem } from "@/types/home"
import type { PageResult } from "@/types/global"
import { http } from "@/utils/http"

/**
 * 
 * @param distributionSite 广告区域展示位置1 为首页（默认值）2 为商品分类页
 * @returns 
 */
export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}


export const getHomeMutli = () => {
  return http<MutliItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 热门推荐
export const getHomeHot = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 猜你喜欢
export const getHomeGuess = () => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}