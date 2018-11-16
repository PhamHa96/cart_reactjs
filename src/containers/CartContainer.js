import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import * as message from '../constants/Message'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteProductInCart } from './../actions/index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        console.log(cart);
        
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var result = message.MSG_CART_EMPTY;

        if (cart.length > 0) {
            result = cart.map((c, index) => {
                return <CartItem key={index} cart={c} onDeleteProductInCart={this.props.onDeleteProductInCart}/>
            })
        }
        return result
    }
    showTotalAmount = (cart)=> {
        var result = null;
        if(cart.length > 0){
            result =<CartResult cart={cart}/>
        }
        return result;
    }
}


// lay du lieu tu Store (reducer chua)
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);