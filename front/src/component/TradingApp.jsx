import React, {Component} from 'react';
import ListGoodsComponent from './ListGoodsComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GoodsComponent from './GoodsComponent';
import {Tab, Nav} from 'react-bootstrap';
import ListOrderComponent from "./ListOrderComponent";
import OrderComponent from "./OrderComponent";

class TradingApp extends Component {
    render() {
        return (
            <Router>
                <>
                        <Nav fill variant="tabs">
                            <Nav.Item>
                                <Nav.Link active href="/goods" aria-controls="goods">Все товары</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/orders" aria-controls="orders">Заказы</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="nav-tabContent" >
                            <Tab.Pane active id="goods">
                                <Switch>
                                    <Route path="/goods" exact component={ListGoodsComponent}/>
                                    <Route path="/goods/:id" component={GoodsComponent}/>
                                </Switch>
                            </Tab.Pane>
                            <Tab.Pane active id="orders">
                                <Switch>
                                    <Route path="/orders" exact component={ListOrderComponent}/>
                                    <Route path="/orders/:id" component={OrderComponent}/>
                                </Switch>
                            </Tab.Pane>
                            {/*<Tab eventKey="contact" title="Строка заказа" disabled>*/}

                            {/*</Tab>*/}
                        </Tab.Content>
                </>
            </Router>
        )
    }
}

export default TradingApp