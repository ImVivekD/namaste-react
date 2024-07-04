
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    console.log(cartItems);
    const dispatch = useDispatch();
    handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className=" w-6/12 m-auto">
            <div className="text-center">
                <span>Cart </span> 
                {cartItems.length !==0 && (<button className="py-2 px-4 m-2 bg-black text-white cursor-pointer rounded-lg" onClick={handleClearCart}>Clear</button>)}
            </div>
            {cartItems.length ===0 && (<div>
                <h1 className="text-center">Your Cart is empty.  Please add the items to the cart.</h1>
            </div>)}
            <div>
                <ItemList isCart={true}  items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;