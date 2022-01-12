import {useState} from 'react'
import { useQuery} from 'react-query'
import {Drawer}  from '@material-ui/core';
import  LinearProgress  from '@material-ui/core/LinearProgress';
import {Grid}  from '@material-ui/core';
import  AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCart';
import {Badge} from '@material-ui/core';
import Cart from './cart/Cart'
// import { Wrapper } from './item/Item.style';



import {Wrapper,  StyledButton } from './item/App.styles'
import Item from './item/Item'

export type CartItemType = {
  id: number,
  category:string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount:number
}

const getProducts = async (): Promise <CartItemType[]> =>
     await(await fetch('https://fakestoreapi.com/products')).json()

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([] as CartItemType[])
  const { data, isError, isLoading} = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

const  getTotalItems= (items: CartItemType[])=>{
  items.reduce((ack:number,item )=> ack + item.amount, 0) }


const  handleAddtoCart = (clickedItem: CartItemType) => {
  setCartItem(prev=>{
    //is the item already added
    const isItemInCart = prev.find(item => item.id === clickedItem.id)
    if(isItemInCart){
      return prev.map(item=>
        item.id === clickedItem.id ?
        { ...item, amount: item.amount + 1} 
        : item
      );
    }
    //first time item is added
    return [...prev, {...clickedItem, amount: 1}]
  })
}
const  removeFromCart = () => null
  
  if(isLoading) return <LinearProgress/>
  if(isError) return <div>some thing went wrong.....</div>
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
       <Cart
           cartItems={cartItem}
           addToCart={handleAddtoCart}
           removeFromCart={removeFromCart}/>
      </Drawer>
      <StyledButton onClick={()=>setCartOpen(true)}>
        <Badge color='error'>
          <AddShoppingCartIcon/>
        </Badge>hello
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item)=> (
          <Grid key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddtoCart={handleAddtoCart}/>
          </Grid>
          
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
