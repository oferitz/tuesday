import type { DashboardMode } from 'Dashboard.types.ts'
import DashboardActions from 'components/header/DashboardActions.tsx'
import DashboardHeaderTop from 'components/header/DashboardHeaderTop.tsx'
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
    <header className="bg-white border-b border-gray-300">
      <DashboardHeaderTop
        title={title}
        mode={mode}
        handleModeChange={handleModeChange}
      />
      <DashboardActions mode={mode} />
    </header>
  )
}

export default DashboardHeader
