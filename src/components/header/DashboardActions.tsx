import type { DashboardMode } from 'Dashboard.types.ts'

interface DashboardActionsProps {
  mode: DashboardMode
}

const DashboardActions = ({ mode }: DashboardActionsProps) => {
  return (
    <div>
      {mode === 'view' ? <button>Save</button> : <button>Cancel</button>}
    </div>
  )
}

export default DashboardActions
