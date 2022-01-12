import { Button } from "@material-ui/core";

//types
import {CartItemType} from '../App'

//styles
import {Wrapper} from './CartItem.styles'


type props ={
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id:number)=> void
}
const CartItem: React.FC<props> = ({item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>price:${item.price}</p>
                <p>total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                       size='small'
                       disableElevation
                       variant = 'contained'
                       onClick={()=>removeFromCart(item.id)}>
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                       size='small'
                       disableElevation
                       variant = 'contained'
                       onClick={()=>addToCart(item)}>
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title}/>
    </Wrapper>
)

export default CartItem;