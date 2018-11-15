import {combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import message from './message'

// Khi combineReducers thì khi dispatch 1 action tất cả reducer đều nhận được =>  nhận ở reducer message đó với 
// case 'ADD_TO_CART' rồi change mesage , ko can` dispatch 2 action một lúc khi click vào nút add sản phẩm  
const appReducers = combineReducers ({
    products, cart, message
})
export default appReducers;