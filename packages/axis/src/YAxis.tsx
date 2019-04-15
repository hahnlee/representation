import * as React from 'react'
import { withChart } from '@representation/core'

interface IChartContext {
  width: number,
  height: number,
}

interface YAxisProps extends React.SVGProps<SVGLineElement> {
  chart: IChartContext,
  width: number,
}

const YAxis: React.SFC<YAxisProps> = ({ chart, width, className, ...props }) => {
  return (
    <g
      className={className}
      width={width}
      height={chart.height}
    >
      <line
        {...props}
        x1={0}
        x2={0}
        y1={0}
        y2={chart.height}
      />
    </g>
  )
}

YAxis.defaultProps = {
  width: 60,
}

export default withChart<IChartContext, YAxisProps>(YAxis)
