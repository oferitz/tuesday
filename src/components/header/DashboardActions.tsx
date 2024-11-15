import { useLocalStorage } from '@uidotdev/usehooks'
import type { DashboardMode } from 'Dashboard.types.ts'
import DashboardFilters from 'components/header/DashboardFilters.tsx'
import { LAYOUT_STORAGE_KEY, widgetsDefaultLayout } from 'helpers/config.ts'
import type { Layout } from 'react-grid-layout'

interface DashboardActionsProps {
  mode: DashboardMode
}

const DashboardActions = ({ mode }: DashboardActionsProps) => {
  const [, saveLayout] = useLocalStorage<Layout[]>(
    LAYOUT_STORAGE_KEY,
    widgetsDefaultLayout
  )
  const isEditMode = mode === 'edit'

  return (
    <div className="flex justify-between items-center px-8 py-2 text-sm">
      <div className="flex items-center flex-wrap gap-2">
        {isEditMode && (
          <div className="flex items-center gap-2">
            <button className="bg-blue-600 text-white rounded px-2 py-1">
              + Add Widget
            </button>
            <button className="border border-gray-200 rounded px-2 py-1">
              1 Connected board
            </button>
            <div className="hidden md:block bg-gray-300 w-[1px] h-7" />
          </div>
        )}

        <DashboardFilters />
      </div>
      {isEditMode && (
        <button onClick={() => saveLayout(widgetsDefaultLayout)}>
          Settings
        </button>
      )}
    </div>
  )
}

export default DashboardActions
