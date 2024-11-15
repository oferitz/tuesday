import DashboardHeader from 'components/header/DashboardHeader.tsx'
import WidgetsContainer from 'components/widgets/WidgetsContainer.tsx'

function Dashboard() {
  return (
    <>
      <DashboardHeader title="Factify Dashboard" />
      <WidgetsContainer />
    </>
  )
}

export default Dashboard
