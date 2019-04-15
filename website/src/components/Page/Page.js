import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'
import styles from './Page.module.scss'
import './Page.scss'

function Page({ children }) {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Representation</title>
        <meta property="og:title" content="Representation" />
        <meta property="og:description" content="extensible react chart library" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page
