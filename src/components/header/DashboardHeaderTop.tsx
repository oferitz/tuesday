import type { DashboardMode } from 'Dashboard.types.ts'
import ToggleButton from 'components/header/ToggleButton.tsx'

interface DashboardHeaderTopProps {
  title: string
  mode: DashboardMode
  handleModeChange: (newMode: DashboardMode) => void
}
const DashboardHeaderTop = ({
  title,
  mode,
  handleModeChange
}: DashboardHeaderTopProps) => {
  return (
    <div className="flex items-center justify-between py-3 px-8 border-b border-gray-200">
      <h1 className="text-3xl font-medium">{title}</h1>

      <div className="flex gap-0">
        <ToggleButton
          onClick={() => handleModeChange('view')}
          placement={'left'}
          active={mode === 'view'}
        >
          View
        </ToggleButton>
        <ToggleButton
          onClick={() => handleModeChange('edit')}
          placement={'right'}
          active={mode === 'edit'}
        >
          Edit
        </ToggleButton>
      </div>

      <div className="flex items-center gap-4">
        <button className="border border-gray-200 rounded-md text-sm py-0.5 px-4">
          Share
        </button>
        <button>...</button>
      </div>
    </div>
  )
}

export default DashboardHeaderTop
