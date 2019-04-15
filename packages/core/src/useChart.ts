import { useContext } from 'react'

import ChartContext from './context'

function useChart() {
  const chart = useContext(ChartContext)
  return chart
}

export default useChart
