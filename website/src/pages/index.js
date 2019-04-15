import React from 'react'
import { BarChart, Bar } from '@representation/bar'
import { XAxis, YAxis } from '@representation/axis'

import Page from '../components/Page'
import Responsive from '../components/Responsive'
import Step from '../components/Step'
import styles from './index.module.scss'

function App() {
  return (
    <Page>
      <div className={styles.index}>
        <div className={styles.chartWrapper}>
          <Responsive className={styles.chart}>
            {(width, height) => (
              <BarChart
                data={{ a: 400, b: 300, c: 100 }}
                width={width}
                height={height}
              >
                <Bar dataKey="a" fill="#00c3ff" />
                <Step fromDataKey="a" toDataKey="b" width={200} />
                <Bar dataKey="b" fill="rgba(0, 138, 255, 0.8)" />
                <Step fromDataKey="b" toDataKey="c" width={200} />
                <Bar dataKey="c" fill="#4f5bff" />
                <YAxis stroke="#ccc" />
                <XAxis stroke="#ccc" />
              </BarChart>
            )}
          </Responsive>
        </div>
        <div className={styles.about}>
          <p className={styles.description}>An<br />extensible<br />react chart library</p>
          <a
            href="https://github.com/hahnlee/representation/tree/master/website/src/components/Step"
            className={styles.example}
          >
            <i className="material-icons">
              arrow_forward
            </i>
            Custom chart children example
          </a>
        </div>
      </div>
    </Page>
  )
}

export default App
