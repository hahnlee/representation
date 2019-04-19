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
import * as _ from 'lodash-es'
import { scaleLinear, scaleLog, scaleBand } from 'd3-scale'
import { ChartContext, isChildrenOf } from '@representation/core'

import { BarChartContext, IBarChartData, IBarChartState } from './types'
import ScaleTypes from './constants/ScaleTypes'
import { DEFAULT_BAR_WIDTH } from './constants/BarSize'
import Bar from './Bar'

type DomainFunction = (x: number) => number

type SVGProps = React.SVGProps<SVGSVGElement>

type BarChartBaseProps = IBarChartData & SVGProps

interface BarChartProps extends BarChartBaseProps {
  scale: ScaleTypes,
  barWidth?: number,
  domain: [
    number|DomainFunction,
    number|DomainFunction,
  ],
}

class BarChart extends React.Component<BarChartProps, IBarChartState> {
  static defaultProps = {
    scale: ScaleTypes.LINEAR,
    domain: [0, (max: number) => max * 1.2],
  }

  dataKeys: string[] = []

  barWidths: { [key: string]: number } = {}

  constructor(props: BarChartProps) {
    super(props)
    this.updateDataKeys()
    this.state = this.getChartData()
  }

  componentDidUpdate(prevProps: BarChartProps) {
    const { children, data } = this.props
    if (children !== prevProps.children) {
      this.updateDataKeys()
      this.setState(this.getChartData())
    } else if (data !== prevProps.data) {
      this.setState(this.getChartData())
    }
  }

  updateDataKeys() {
    const { children } = this.props

    this.dataKeys = []
    this.barWidths = {}

    React.Children.forEach(children, child => {
      if (isChildrenOf(child, Bar)) {
        const dataKey = child.props.dataKey

        this.dataKeys.push(dataKey)
        this.barWidths[dataKey] = child.props.width || DEFAULT_BAR_WIDTH
      }
    })
  }

  getDomain(): [number, number] {
    const { data, domain } = this.props
    const [ min, max ] = domain

    const isMinNumber = typeof min === 'number'
    const isMaxNumber = typeof max === 'number'

    if (isMinNumber && isMaxNumber) {
      return domain as [number, number]
    }

    const filteredData = _
      .filter(
        data,
        (__: number, dataKey: string) => this.dataKeys.includes(dataKey),
      ) as number[]

    const minValue = isMinNumber ? min : (min as DomainFunction)(_.min(filteredData) || 0)
    const maxValue = isMaxNumber ? max : (max as DomainFunction)(_.max(filteredData) || 0)

    return [
      minValue as number,
      maxValue as number,
    ]
  }

  getScaleMethod() {
    const { scale } = this.props

    switch (scale) {
      case ScaleTypes.LINEAR: {
        return scaleLinear()
      }
      case ScaleTypes.LOG: {
        return scaleLog()
      }
      default:
        return scaleLinear()
    }
  }

  getScale() {
    const { height } = this.props
    const domain = this.getDomain()

    return this.getScaleMethod()
      .domain(domain)
      .range([0, height])
  }

  getChartData = () => {
    const { data, width, height, barWidth: bandWidth } = this.props

    const scale = this.getScale()

    const getBarHeight = (dataKey: string) => {
      const value = _.get(data, dataKey)
      return scale(value)
    }

    const getBarYPosition = (dataKey: string) => {
      return height - getBarHeight(dataKey)
    }

    const barScale = scaleBand()
      .domain(this.dataKeys)
      .range([0, width])

    const barWidth = bandWidth || barScale.bandwidth()

    const getBarXPosition = (dataKey: string) => {
      const baseX = (barScale(dataKey) || 0) + barScale.paddingInner()
      const centerDiff = ((barWidth - this.barWidths[dataKey]) / 2)
      return baseX + centerDiff
    }

    return {
      barWidth,
      getBarHeight,
      getBarXPosition,
      getBarYPosition,
    }
  }

  getContext(): BarChartContext {
    const { data, height, width } = this.props

    return {
      ...this.state,
      height,
      width,
      data,
    }
  }

  getSVGProps(): SVGProps {
    const {
      data,
      scale,
      domain,
      children,
      ref,
      ...svgProps
    } = this.props
    return svgProps
  }

  render() {
    const { children } = this.props

    return (
      <ChartContext.Provider value={this.getContext()}>
        <svg {...this.getSVGProps()}>
          {children}
        </svg>
      </ChartContext.Provider>
    )
  }
}

export default BarChart
