import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { useLocalStorage } from '@uidotdev/usehooks'
import Widget from 'components/widgets/Widget.tsx'
import React from 'react'
import { type Layout, Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const defaultLayout: Layout[] = [
  { i: 'calendar', x: 0, y: 0, w: 12, h: 2 },
  { i: 'chart', x: 0, y: 0, w: 4, h: 2 },
  { i: 'files_gallery', x: 8, y: 0, w: 8, h: 2 }
]
const WidgetsContainer = () => {
  const [layout, saveLayout] = useLocalStorage<Layout[]>(
    'widgetsLayout',
    defaultLayout
  )

  const handleLayoutChange = React.useCallback(
    (layout: Layout[]) => {
      saveLayout(layout)
    },
    [saveLayout]
  )

  return (
    <div className="p-1 pt-[112px]">
      <ResponsiveReactGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onLayoutChange={handleLayoutChange}
      >
        <div key="calendar">
          <Widget>Calendar</Widget>
        </div>
        <div key="chart">
          <Widget>Chart</Widget>
        </div>
        <div key="files_gallery">
          <Widget>Files Gallery</Widget>
        </div>
      </ResponsiveReactGridLayout>
    </div>
  )
}

export default WidgetsContainer
