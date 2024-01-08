// 为了在全局注册的时候使用类型检查，需要创建一个 component.d.ts 文件
// 并在 tsconfig.json 中通过 include 字段包含进来
// src/types/components.d.ts
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}

