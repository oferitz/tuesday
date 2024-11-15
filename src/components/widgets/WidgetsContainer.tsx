import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Widget from 'components/widgets/Widget.tsx'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

const layout = [
  { i: 'calendar', x: 0, y: 0, w: 1, h: 2 },
  { i: 'chart', x: 1, y: 0, w: 3, h: 2 },
  { i: 'files_gallery', x: 4, y: 0, w: 1, h: 2 }
]
const WidgetsContainer = () => {
  return (
    <div className="p-2">
      <ResponsiveReactGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
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
