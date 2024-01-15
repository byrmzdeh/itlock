import React from 'react'
import BasketProvider from './context/BasketContext'
import WishlistProvider from './context/WishlistContext'

const MainLayout = ({ children }) => {
  return (
    <WishlistProvider>
      <BasketProvider >

        {children}
      </BasketProvider>
    </WishlistProvider>
  )
}

export default MainLayout