import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import '../sass/basket.scss'

const Basket = () => {
  const { basket, decreaseCount, increaseCount, remove } = useContext(BasketContext)
  return (
    <table border={1}>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Count</th>
        <th>Delete</th>

      </tr>


      {basket.map(item => (
        <tr>
          <td><img width={120} src={item.img} alt="" /></td>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>$ {item.price * item.count}</td>
          <td>
            <td className='count'>
              <i class="fa-solid fa-caret-up" onClick={() => increaseCount(item)}></i>
              <h2>{item.count}</h2>
              <i class="fa-solid fa-sort-down" onClick={() => decreaseCount(item)}></i>
            </td>
          </td>
          <td><i class="fa-solid fa-trash-can" onClick={() => remove(item)}></i></td>
        </tr>
      ))}
    </table>

  )
}

export default Basket