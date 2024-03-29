import { createContext, useState } from "react";

export const WishlistContext = createContext()

function WishlistProvider({children}) {
   const [wishlist,setWishlist] = useState([])

   function handleWishlist(item) {
      const index = wishlist.findIndex((x)=>x._id===item._id)
      if (index===-1) {
         setWishlist([...wishlist, item])
      }else{
         setWishlist(wishlist.filter((x)=>x._id!==item._id))
      }
   }


   function checkWishlist(item) {  
      const index = wishlist.findIndex((x)=>x._id===item._id)
      if (index!==-1) {
        return true
      }
      return false
   }

   const data = {handleWishlist, checkWishlist,wishlist} 

   return (
    <WishlistContext.Provider value={data}>
      {children}
    </WishlistContext.Provider>
   )
    
}
export default WishlistProvider
