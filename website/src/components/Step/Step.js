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

import React from 'react'
import numeral from 'numeral'

import styles from './Step.module.scss'

function Step({ chart, fromDataKey, toDataKey, width, onClick }) {
  const fromPosition = chart.getBarXPosition(fromDataKey)
  const toPosition = chart.getBarXPosition(toDataKey)
  const xPosition = (fromPosition + toPosition) / 2

  const fromData = chart.data[fromDataKey]
  const toData = chart.data[toDataKey]
  const rate = toData / fromData

  const stepHeight = 100

  return (
    <foreignObject
      x={xPosition - (width / 2)}
      y={(chart.height / 2) - (stepHeight / 2)}
      width={width}
      height={stepHeight}
    >
      <div
        className={styles.step}
        onClick={onClick}
      >
        <div className={styles.content}>
          <div className={styles.arrow}>
            <i className="material-icons">
              arrow_forward
            </i>
          </div>
          <div className={styles.rate}>
            {numeral(rate).format('0 %')}
          </div>
        </div>
      </div>
    </foreignObject>
  )
}

export default Step
