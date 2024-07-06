declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module '*/styles/_variables.module.scss' {
  const cSSVariables: Record<string, string>
  export default cSSVariables
}
