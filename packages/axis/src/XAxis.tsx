import * as React from 'react'
import { withChart } from '@representation/core'

interface IChartContext {
  width: number,
  height: number,
}

interface XAxisProps extends React.SVGProps<SVGLineElement> {
  chart: IChartContext,
}

const XAxis: React.SFC<XAxisProps> = ({ chart, ...props }) => (
  <line
    {...props}
    x1={0}
    x2={chart.width}
    y1={chart.height}
    y2={chart.height}
  />
)

export default withChart<IChartContext, XAxisProps>(XAxis)
