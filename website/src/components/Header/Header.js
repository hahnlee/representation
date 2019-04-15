import React from 'react'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Representation</h1>
      <a href="https://github.com/hahnlee/representation">GitHub</a>
    </div>
  )
}
