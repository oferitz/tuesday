import type React from 'react'

const Widget = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 h-full">
      {children}
    </div>
  )
}

export default Widget
