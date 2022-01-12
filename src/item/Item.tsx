import { Button } from "@material-ui/core";

//types
import {CartItemType} from '../App'
//styles
import { Wrapper } from "./Item.style";
import {StyledButton} from "./App.styles"

type ItemProps = {
    item: CartItemType;
    handleAddtoCart: (clickedItam: CartItemType) => void;
} 

const Item: React.FC<ItemProps> = ({item, handleAddtoCart}) =>(
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={()=> handleAddtoCart(item) }>Button</Button>
        <StyledButton></StyledButton>
    </Wrapper>
)

export default Item