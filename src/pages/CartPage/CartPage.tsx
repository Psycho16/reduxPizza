import React from 'react'

import Layout from 'components/layout'
import PageTitle from 'components/ui/PageTitle'

import Icons from 'constants/Icons'


const CartPage = () => {
  return (
    <Layout>
      <PageTitle text="Корзина" icon={Icons.cartIcon} />
    </Layout>
  )
}

export default CartPage
