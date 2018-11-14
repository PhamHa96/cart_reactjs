import React, { Component } from 'react';
import Message from './components/Message';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <Message />
                        <Cart />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
