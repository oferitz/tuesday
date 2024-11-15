import { cn } from 'helpers/utils.ts'
import type React from 'react'

interface ToggleButtonProps {
  placement: 'left' | 'right'
  onClick: () => void
  active: boolean
}

const ToggleButton = ({
  placement,
  onClick,
  active,
  children
}: React.PropsWithChildren<ToggleButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'cursor-pointer text-sm',
        'border px-2 h-8 rounded-md border-default-200',
        'hover:bg-slate-50',
        active && 'bg-sky-100 border-sky-200',
        placement === 'left' ? 'rounded-r-none' : 'rounded-l-none'
      )}
    >
      {children}
    </button>
  )
}

export default ToggleButton
