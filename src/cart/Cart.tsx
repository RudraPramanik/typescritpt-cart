import CartItem from "../cartitem/CartItem";
import {Wrapper} from "./Cart.styles"
import {CartItemType} from '../App'

type props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType)=>void;
    removeFromCart:(id:number)=>void
}

const Cart: React.FC<props> = ({ cartItems, addToCart, removeFromCart })=>{
    return(
        <Wrapper>
            <h2>your shopping cart</h2>
            {cartItems.length ===0 ? <div>no items on cart</div> : null}
            {cartItems.map(item=>(
                <CartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}/>
            ))}
        </Wrapper>
    )
}

export default Cart