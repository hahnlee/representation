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
