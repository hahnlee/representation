import * as React from 'react'
import { withChart } from '@representation/core'

import { DEFAULT_BAR_WIDTH } from './constants/BarSize'
import { BarChartContext } from './types'

interface BarProps extends React.SVGProps<SVGRectElement> {
  chart: BarChartContext,
  dataKey: string,
  width: number,
  innerRef?: React.LegacyRef<SVGRectElement>,
}

const Bar: React.SFC<BarProps> = ({
  chart,
  dataKey,
  innerRef,
  width,
  ...props
}) => {
  return (
    <rect
      {...props}
      ref={innerRef}
      width={width}
      height={chart.getBarHeight(dataKey)}
      x={chart.getBarXPosition(dataKey)}
      y={chart.getBarYPosition(dataKey)}
    />
  )
}

Bar.defaultProps = {
  width: DEFAULT_BAR_WIDTH,
}

export default withChart<BarChartContext, BarProps>(Bar)
