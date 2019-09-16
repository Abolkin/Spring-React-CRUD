import React, { Component } from 'react';
import ListGoodsComponent from './ListGoodsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GoodsComponent from './GoodsComponent';

class TradingApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Приложение заказа товаров</h1>
                    <Switch>
                        <Route path="/" exact component={ListGoodsComponent} />
                        <Route path="/goods" exact component={ListGoodsComponent} />
                        <Route path="/goods/:id" component={GoodsComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default TradingApp