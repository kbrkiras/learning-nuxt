import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/kubra/Desktop/test/learning-nuxt/node_modules/.pnpm/nuxt@3.6.2_@types+node@18.0.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}