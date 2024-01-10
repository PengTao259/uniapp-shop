import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'

export const getCategoryTop = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
