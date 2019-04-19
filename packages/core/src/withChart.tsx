/**
 * Copyright (c) 2019 Han Lee
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
