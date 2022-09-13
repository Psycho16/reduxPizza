import React from 'react'

import PageTitle from 'components/ui/PageTitle'

import Layout from '../../components/layout'

import styles from './styles.module.scss'


const IndexPage = () => {
  return (
    <Layout>
      <div className={styles['page-wrapper-root']}>
        <PageTitle text="Все пиццы" />
      </div>
    </Layout>
  )
}

export default IndexPage
