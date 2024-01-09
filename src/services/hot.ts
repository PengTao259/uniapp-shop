import { http } from '@/utils/http'
import type { PageParams } from '@/types/global.d.ts'
import type { HotResult } from '@/types/hot'

/**
 * 获取热门推荐
 * @param url
 * @param data
 *
 */

type HotRecommend = PageParams & { subType?: string }
export const getHotRecommend = (url: string, data?: HotRecommend) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
