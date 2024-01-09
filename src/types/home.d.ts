import type { GoodsItem } from './global'
/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/** 首页-分类区域数据类型 */
export type MutliItem = {
  /** 分类id */
  id: string
  /** 分类名称 */
  name: string
  /** 分类图片 */
  icon: string
}

/** 首页-热门推荐 */
export type HotItem = {
  /** 商品id */
  id: string
  /** 推荐说明 */
  alt: string
  /** 图片集合 */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 推荐标题 */
  title: string
  /** 推荐类型 */
  type: number
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem
