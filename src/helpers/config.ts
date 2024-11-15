import type { Layout } from 'react-grid-layout'

export const widgetsDefaultLayout: Layout[] = [
  { i: 'calendar', x: 0, y: 0, w: 12, h: 2 },
  { i: 'chart', x: 0, y: 0, w: 4, h: 2 },
  { i: 'files_gallery', x: 8, y: 0, w: 8, h: 2 }
]

export const LAYOUT_STORAGE_KEY = 'widgetsLayout'
