import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext)
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
        <link rel="icon" sizes='72x72' href="https://pngimg.com/d/heart_PNG51335.png" />
      </Helmet>
      <h1>Salam</h1>
      {wishlist.map(item => (
        <div className="card" key={item._id}>
          <img src={item.img} width={300} alt="" />
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <h3>&{item.price}</h3>

        </div>
      ))}
    </div>
  )
}

export default Wishlist