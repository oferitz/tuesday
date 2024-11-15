import type { DashboardMode } from 'Dashboard.types.ts'
import DashboardActions from 'components/DashboardActions.tsx'
import React from 'react'

interface DashboardHeaderProps {
  title: string
}

const DashboardHeader = ({ title }: DashboardHeaderProps) => {
  const [mode, setMode] = React.useState<DashboardMode>('view')

  const handleModeChange = (newMode: DashboardMode) => {
    setMode(newMode)
  }

  return (
    <header className="px-8">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <div>
          <button onClick={() => handleModeChange('view')}>View</button>
          <button onClick={() => handleModeChange('edit')}>Edit</button>
        </div>
        <div>
          <button onClick={() => handleModeChange('view')}>View</button>
          <button onClick={() => handleModeChange('edit')}>Edit</button>
        </div>
      </div>
      <DashboardActions mode={mode} />
    </header>
  )
}

export default DashboardHeader
