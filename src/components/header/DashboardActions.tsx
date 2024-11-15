import type { DashboardMode } from 'Dashboard.types.ts'
import DashboardFilters from 'components/header/DashboardFilters.tsx'

interface DashboardActionsProps {
  mode: DashboardMode
}

const DashboardActions = ({ mode }: DashboardActionsProps) => {
  const isEditMode = mode === 'edit'

  return (
    <div className="flex justify-between items-center px-8 py-2 text-sm">
      <div className="flex items-center gap-2">
        {isEditMode && (
          <div className="flex items-center gap-2">
            <button className="bg-blue-600 text-white rounded px-2 py-1">
              + Add Widget
            </button>
            <button className="border border-gray-200 rounded px-2 py-1">
              1 Connected board
            </button>
            <div className="bg-gray-300 w-[1px] h-7" />
          </div>
        )}

        <DashboardFilters />
      </div>
      {isEditMode && <button>settings icon</button>}
    </div>
  )
}

export default DashboardActions
