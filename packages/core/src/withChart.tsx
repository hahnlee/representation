import * as React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

import ChartContext from './context'
import { getDisplayName } from './utils'

export default function withChart<Context, Props>(WrappedComponent: React.ComponentType<Props>) {
  type ConnectedComponentProps = Props & { chart: Context }
  type WrappedComponentProps = Props & { innerRef?: React.Ref<React.ComponentType<Props>> }

  const ConnectedComponent: React.SFC<ConnectedComponentProps> = (props: WrappedComponentProps) => {
    return (
      <ChartContext.Consumer>
        {(chart) => (
          <WrappedComponent
            {...props}
            ref={props.innerRef}
            chart={chart}
          />
        )}
      </ChartContext.Consumer>
    )
  }

  ConnectedComponent.displayName = `withChart(${getDisplayName(WrappedComponent)})`

  return hoistNonReactStatics(ConnectedComponent, WrappedComponent)
}
