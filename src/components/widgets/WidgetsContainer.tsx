import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { useLocalStorage } from '@uidotdev/usehooks'
import Widget from 'components/widgets/Widget.tsx'
import { LAYOUT_STORAGE_KEY, widgetsDefaultLayout } from 'helpers/config.ts'
import React from 'react'
import { type Layout, Responsive, WidthProvider } from 'react-grid-layout'

const WidgetsContainer = () => {
  const ResponsiveReactGridLayout = React.useMemo(
    () => WidthProvider(Responsive),
    []
  )
  const [layout, saveLayout] = useLocalStorage<Layout[]>(
    LAYOUT_STORAGE_KEY,
    widgetsDefaultLayout
  )

  const handleLayoutChange = React.useCallback(
    (layout: Layout[]) => {
      saveLayout(layout)
    },
    [saveLayout]
  )

  return (
    <div className="p-1 pt-[142px] md:pt-[112px]">
      <ResponsiveReactGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1280, md: 996, sm: 768, xs: 480, xxs: 0 }}
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
