import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import '../sass/home.scss'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'
import {Helmet} from "react-helmet";



const Home = () => {
  const [data, setData] = useState([])
  const [input,setInput] = useState('')
  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((api) => setData(api))

  }, [])

  const {addBasket} = useContext(BasketContext)
  const {handleWishlist, checkWishlist} = useContext(WishlistContext)

  return (
    <div className='home'>
         <Helmet>
                <title>Home</title>
                <link rel="icon" sizes='72x72' href="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
            </Helmet>
      <div className="four">
        <p>OUR CASE STUDY</p>
        <h1>We work with global brands</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <div className="cards">
          {data
          .filter((x)=>x.name.toLowerCase().includes(input.toLowerCase()))
          .map(item => (
            <div className="card">
              <img width={400} src={item.img} alt="" />
              <i class={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`} onClick={() => handleWishlist(item)}></i>
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <h3>& {item.price}</h3>
              <button onClick={()=>addBasket(item)}>Add To Cart</button>
              <Link to={`/${item._id}`}>Learn More...</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home