import type { BannerItem } from "@/types/home"
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